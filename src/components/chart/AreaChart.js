'use client'

import { useMemo, useRef, useState } from 'react'

export default function AreaChart({
  width = 300,
  height = 200,
  data: inputData,
  strokeColor = 'rgba(255,255,255,0.9)',
  fillGradientId = 'chartGradient',
  gridColor = 'rgba(255,255,255,0.06)'
}) {
  const margin = { top: 10, right: 10, bottom: 10, left: 10 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const data = inputData && inputData.length > 1
    ? inputData
    : [12, 22, 14, 28, 18, 30, 16, 26, 20, 31, 24, 34]

  const minVal = Math.min(...data)
  const maxVal = Math.max(...data)
  const paddedMin = minVal - (maxVal - minVal) * 0.1
  const paddedMax = maxVal + (maxVal - minVal) * 0.1

  const xForIndex = (i) => margin.left + (i * innerWidth) / (data.length - 1)
  const yForValue = (v) => margin.top + (1 - (v - paddedMin) / (paddedMax - paddedMin)) * innerHeight

  const points = useMemo(() => data.map((v, i) => ({ x: xForIndex(i), y: yForValue(v), v })), [data])

  const pathD = useMemo(() => {
    if (points.length < 2) return ''
    let d = `M ${points[0].x},${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1]
      const p1 = points[i]
      const xm = (p0.x + p1.x) / 2
      d += ` C ${xm},${p0.y} ${xm},${p1.y} ${p1.x},${p1.y}`
    }
    return d
  }, [points])

  const areaD = useMemo(() => {
    if (!pathD) return ''
    const last = points[points.length - 1]
    const first = points[0]
    return `${pathD} L ${last.x},${margin.top + innerHeight} L ${first.x},${margin.top + innerHeight} Z`
  }, [pathD, points, innerHeight])

  const svgRef = useRef(null)
  const [hoverIndex, setHoverIndex] = useState(null)

  const handleMouseMove = (e) => {
    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return
    const mouseX = e.clientX - rect.left
    const step = innerWidth / (data.length - 1)
    const i = Math.round((mouseX - margin.left) / step)
    if (i >= 0 && i < points.length) setHoverIndex(i)
  }

  const handleMouseLeave = () => setHoverIndex(null)

  const gridLinesY = useMemo(() => {
    const lines = 5
    const gap = innerHeight / (lines + 1)
    return new Array(lines).fill(0).map((_, idx) => margin.top + gap * (idx + 1))
  }, [innerHeight])

  const hoverPoint = hoverIndex != null ? points[hoverIndex] : null

  return (
    <svg
      ref={svgRef}
      className='w-full'
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio='none'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden='true'
    >
      <defs>
        <linearGradient id={fillGradientId} x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor='rgba(255,255,255,0.35)' />
          <stop offset='100%' stopColor='rgba(255,255,255,0.02)' />
        </linearGradient>
      </defs>

      {/* Grid (5 horizontal lines) */}
      <g stroke={gridColor} strokeWidth='1'>
        {gridLinesY.map((y, i) => (
          <line key={i} x1={margin.left} y1={y} x2={margin.left + innerWidth} y2={y} />
        ))}
      </g>

      {/* Area fill */}
      <path d={areaD} fill={`url(#${fillGradientId})`} />
      {/* Line */}
      <path d={pathD} stroke={strokeColor} strokeWidth='2.5' fill='none' strokeLinecap='round' strokeLinejoin='round' />

      {/* Hover helpers */}
      {hoverPoint && (
        <g>
          <line
            x1={hoverPoint.x}
            y1={margin.top}
            x2={hoverPoint.x}
            y2={margin.top + innerHeight}
            stroke='rgba(255,255,255,0.15)'
            strokeWidth='1'
          />
          <circle cx={hoverPoint.x} cy={hoverPoint.y} r='3.5' fill='white' />
          <g transform={`translate(${Math.min(hoverPoint.x + 8, width - 80)}, ${Math.max(hoverPoint.y - 26, margin.top + 4)})`}>
            <rect width='72' height='22' rx='6' ry='6' fill='rgba(23,23,23,0.95)' stroke='rgba(255,255,255,0.08)' />
            <text x='10' y='14' fill='white' fontSize='10' fontFamily='Inter, ui-sans-serif'>
              {hoverPoint.v}
            </text>
          </g>
        </g>
      )}
    </svg>
  )
}


