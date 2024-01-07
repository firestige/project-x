import { Box } from '@mui/material'
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export type EChartsOption = echarts.EChartsOption

export interface LinerProps {
  options: EChartsOption
}

const LineGraph: React.FC<LinerProps> = (props) => {
  const { options } = props
  const ref = useRef<HTMLDivElement>(null)
  // const chart = useMemo(() => ref && echarts.init(ref.current), [])
  useEffect(() => {
    console.log(options)
    let _chart = echarts.getInstanceByDom(ref.current!)
    if (!_chart) {
      console.log(_chart)
      _chart = echarts.init(ref.current)
    }
    options && _chart.setOption(options)
  }, [options])

  return <Box sx={{ height: '80vh' }} ref={ref} />
}

export default LineGraph
