import {
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
} from '@mui/x-data-grid'
import { useState } from 'react'

const GridView = () => {
  const [rows, setRows] = useState(initialRows)
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event,
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }
  return <></>
}

export default GridView
