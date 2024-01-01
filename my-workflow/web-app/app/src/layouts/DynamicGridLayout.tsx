import React, { useEffect, useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

export interface GridLayoutProps {
  items: number
  rowHeight: number
  cols: number
}

const generateLayout = (num: number) => {
  return [...new Array(num)].map((i: number) => {
    const y = Math.ceil(Math.random() * 4) + 1
    console.log(i)
    return {
      x: (i * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: `${i}`,
    }
  })
}

const Grid: React.FC<GridLayoutProps & { children?: React.ReactNode }> = (
  props,
) => {
  return (
    <ResponsiveGridLayout
      layouts={{ lg: generateLayout(props.items) }}
      className="layout"
      rowHeight={props.rowHeight}
    >
      {props.children}
    </ResponsiveGridLayout>
  )
}

export default Grid
