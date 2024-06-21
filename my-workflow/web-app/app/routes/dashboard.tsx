import { Fab, Paper, useTheme } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import DynamicGridLayout from '../src/layouts/DynamicGridLayout'
import { useEffect, useState } from 'react'

export default function Index() {
  const theme = useTheme()
  // const [layouts, setLayouts] = useState()
  const [items, setItems] = useState<number[]>([])
  const addItems = () => {
    setItems(items.concat([new Date().getTime()]))
  }
  useEffect(() => {})
  return (
    <>
      <DynamicGridLayout items={items.length} rowHeight={30} cols={12}>
        {[...new Array(10).keys()].map((key) => (
          <Paper key={key}>{key}</Paper>
        ))}
      </DynamicGridLayout>
      <Fab
        sx={{
          position: 'absolute',
          zIndex: theme.zIndex.fab,
          bottom: 25,
          right: 25,
        }}
        color="primary"
        aria-label="add"
        onClick={() => addItems()}
      >
        <AddIcon />
      </Fab>
    </>
  )
}
