// Spinner Component (Tek)
const spinnerComponentCode = `'use client'

import React from 'react'

export default function Spinner({ 
  size = 'size-8', 
  label = '', 
  className = '' 
}) {
  return (
    <div className={\`flex items-center gap-3 \${label ? '' : ''}\`}>
      <div
        className={\`\${size} animate-spin rounded-full border-2 border-white/20 border-t-white \${className}\`}
        role="status"
        aria-live="polite"
      >
        <span className="sr-only">Loading...</span>
      </div>
      {label && <span className="text-sm font-medium text-white/80">{label}</span>}
    </div>
  )
}`

// Default Usage
const spinnerDefaultUsage = `'use client'

import Spinner from '@/components/spinner/Spinner'

export default function MyComponent() {
  return <Spinner />
}`

// Sizes Usage
const spinnerSizesUsage = `'use client'

import Spinner from '@/components/spinner/Spinner'

export default function MyComponent() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="size-6" />
      <Spinner size="size-8" />
      <Spinner size="size-10" />
    </div>
  )
}`

// With Label Usage
const spinnerWithLabelUsage = `'use client'

import Spinner from '@/components/spinner/Spinner'

export default function MyComponent() {
  return <Spinner size="size-6" label="Loading..." />
}`

export const spinnerTabsUsage = [
  { label: "Component", code: spinnerComponentCode }
]
export const spinnerTabsDefault = [
  { label: "Usage", code: spinnerDefaultUsage }
]

export const spinnerTabsSizes = [
  { label: "Usage", code: spinnerSizesUsage }
]

export const spinnerTabsWithLabel = [
  { label: "Usage", code: spinnerWithLabelUsage }
]
