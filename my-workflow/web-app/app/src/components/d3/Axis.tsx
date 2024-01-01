import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Axis = () => {
  const ref = useRef(null)

  useEffect(() => {
    const xScale = d3.scaleLinear().domain([0, 100]).range([10, 290])

    const el = d3.select(ref.current)
    const axisGenerator = d3.axisBottom(xScale)
    el.append('g').call(axisGenerator)
  }, [])

  return <svg ref={ref} />
}

export default Axis
