import { ChangeEvent, useEffect, useState } from 'react'
import DataGrid, { Column, textEditor } from 'react-data-grid'
import 'react-data-grid/lib/styles.css'
import { WorkSheet, read, utils, writeFile } from 'xlsx'

type DataSet = { [index: string]: WorkSheet }
type Row = any[]
type AOAColumn = Column<Row>
type RowCol = { rows: Row[]; columns: AOAColumn[] }

function arrayify(rows: any[]): Row[] {
  return rows.map((row) => {
    if (Array.isArray(row)) {
      return row
    }
    let length = Object.keys(row).length
    for (; length > 0; length--) {
      if (row[length - 1] != null) {
        break
      }
    }
    return Array.from({ length, ...row })
  })
}

const getRowsCols = (data: DataSet, sheetName: string): RowCol => ({
  rows: utils.sheet_to_json<Row>(data[sheetName], { header: 1 }),
  columns: Array.from(
    { length: utils.decode_range(data[sheetName]['!ref'] || 'A1').e.c + 1 },
    (_, i) => ({
      key: String(i),
      name: utils.encode_col(i),
      editor: textEditor,
    }),
  ),
})

const SheetViewer = () => {
  const [rows, setRows] = useState<Row[]>([])
  const [columns, setColumns] = useState<AOAColumn[]>([])
  const [workBook, setWorkBook] = useState<DataSet>({} as DataSet)
  const [sheets, setSheets] = useState<string[]>([])
  const [current, setCurrent] = useState<string>('')

  const selectSheet = (name: string) => {
    workBook[current] = utils.aoa_to_sheet(arrayify(rows))
    const { rows: new_rows, columns: new_columns } = getRowsCols(workBook, name)
    setRows(new_rows)
    setColumns(new_columns)
    setCurrent(name)
  }

  const handleAB = async (file: ArrayBuffer): Promise<void> => {
    const data = read(file)
    setWorkBook(data.Sheets)
    setSheets(data.SheetNames)

    const name = data.SheetNames[0]
    const { rows: new_rows, columns: new_columns } = getRowsCols(workBook, name)
    setRows(new_rows)
    setColumns(new_columns)
    setCurrent(name)
  }

  const handleFile = async (
    ev: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = await ev.target.files?.[0]?.arrayBuffer()
    if (file) {
      await handleAB(file)
    }
  }

  useEffect(() => {
    ;(async () => {
      const f = await fetch('https://sheetjs.com/pres.numbers')
      await handleAB(await f.arrayBuffer())
    })()
  }, [])

  const saveFile: (ext: string) => void = (ext) => {
    workBook[current] = utils.aoa_to_sheet(arrayify(rows))
    const wb = utils.book_new()
    sheets.forEach((n) => {
      utils.book_append_sheet(wb, workBook[n], n)
    })
    writeFile(wb, 'SheetJSRDG' + ext)
  }

  return (
    <>
      <input type="file" onChange={handleFile} />
      {sheets.length > 0 && (
        <>
          <p>
            Use the dropdown to switch to a worksheet:&nbsp;
            <select
              onChange={async (e) => selectSheet(sheets[+e.target.value])}
            >
              {sheets.map((sheet, idx) => (
                <option key={sheet} value={idx}>
                  {sheet}
                </option>
              ))}
            </select>
          </p>
          <div className="flex-cont">
            <b>Current Sheet: {current}</b>
          </div>
          <DataGrid columns={columns} rows={rows} onRowsChange={setRows} />
          <p>
            Click one of the buttons to create a new file with the modified data
          </p>
          <div className="flex-cont">
            {['xlsx', 'xlsb', 'xls'].map((ext) => (
              <button key={ext} onClick={() => saveFile(ext)}>
                export [.{ext}]
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default SheetViewer
