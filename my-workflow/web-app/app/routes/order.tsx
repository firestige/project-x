import LineChart, { EChartsOption } from '~/src/components/charts/LineChart'

const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
} as EChartsOption

const Order = () => {
  return (
    <>
      <h1>订单</h1>
      <LineChart options={options} />
    </>
  )
}

export default Order
