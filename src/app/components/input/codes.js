export const defaultInputUsage = [
  {
    label: 'Component',
    code: `'use client'
import React from 'react'
import clsx from 'clsx'

export default function Input({ error, className, ...props }) {
  return (
    <input
      type="text"
      className={clsx(
        "w-full max-w-xs px-3 py-2 rounded-md bg-tertiary text-paragraph-size text-paragraph placeholder-descriptive focus:outline-none transition-all duration-150",
        error
          ? "border border-danger focus:border-danger"
          : "border border-border hover:border-white/30 focus:border-white/30",
        className
      )}
      {...props}
    />
  )
}
`
  }
]

export const defaultInputTabs = [
  {
    label: 'Component',
    code: `import Input from '@/components/input/Input'
    
<Input placeholder="Email" />`
  }
]

export const errorInputTabs = [
  {
    label: 'Component',
    code: `import Input from '@/components/input/Input'
    
<Input placeholder="Email" error />`
  }
] 