export const buttonComponentTabs = [
  {
    label: 'Button.js',
    language: 'jsx',
    code: `"use client"

import React from 'react'

export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white'
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  const resolved = variantClasses[variant] || variantClasses.primary
  const disabledClasses = disabled ? ' opacity-50 cursor-not-allowed' : ' cursor-pointer'

  return (
    <button
      disabled={disabled}
      className={base + ' ' + resolved + disabledClasses + ' ' + className}
      {...props}
    >
      {children}
    </button>
  )
}`
  }
]

// Usage tabs removed per request

export const primaryButtonTabs = [
  {
    label: 'Usage',
    code: `import Button from '@/components/button/Button'

<Button variant="primary">Primary</Button>`
  }
]

// Disabled examples consolidated to a single section

export const secondaryButtonTabs = [
  {
    label: 'Usage',
    code: `import Button from '@/components/button/Button'

<Button variant="secondary">Secondary</Button>`
  }
]

// Disabled examples consolidated to a single section

export const outlineButtonTabs = [
  {
    label: 'Usage',
    code: `import Button from '@/components/button/Button'

<Button variant="outline">Outline</Button>`
  }
]

// Disabled examples consolidated to a single section

export const dangerButtonTabs = [
  {
    label: 'Usage',
    code: `import Button from '@/components/button/Button'

<Button variant="danger">Danger</Button>`
  }
]

// Disabled examples consolidated to a single section

export const disabledButtonTabs = [
  {
    label: 'Disabled',
    code: `import Button from '@/components/button/Button'

<Button variant="primary" disabled>Disabled</Button>`
  }
]
