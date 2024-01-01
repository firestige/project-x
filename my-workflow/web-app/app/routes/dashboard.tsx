import { Paper } from '@mui/material'
import DynamicGridLayout from '../src/layouts/DynamicGridLayout'

export default function Index() {
  return (
    <DynamicGridLayout items={10} rowHeight={30} cols={12}>
      {[...new Array(10).keys()].map((key) => (
        <Paper key={key}>{key}</Paper>
      ))}
    </DynamicGridLayout>
  )
}
