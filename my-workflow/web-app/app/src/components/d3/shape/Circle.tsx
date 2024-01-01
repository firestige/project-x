import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Circle = () => {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const el = d3.select(ref.current)
    el.append('circle').attr('cx', 150).attr('cy', 70).attr('r', 50)
  }, [])

  return <svg ref={ref} />
}

export default Circle
