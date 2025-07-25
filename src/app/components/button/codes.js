export const primaryButtonTabs = [
  {
    label: 'Component',
    code: `'use client'

import React from 'react'

export default function PrimaryButton({ children, disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      className={\`inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white bg-white text-black hover:bg-gray-200 \${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }\`}
      {...props}
    >
      {children}
    </button>
  )
}`
  },
  {
    label: 'Usage',
    code: `<PrimaryButton>Primary</PrimaryButton>
<PrimaryButton disabled>Disabled</PrimaryButton>`
  }
]

export const secondaryButtonTabs = [
  {
    label: 'Component',
    code: `'use client'

import React from 'react'

export default function SecondaryButton({ children, disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      className={\`inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white bg-zinc-800 text-zinc-100 hover:bg-zinc-700 \${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }\`}
      {...props}
    >
      {children}
    </button>
  )
}`
  },
  {
    label: 'Usage',
    code: `<SecondaryButton>Secondary</SecondaryButton>
<SecondaryButton disabled>Disabled</SecondaryButton>`
  }
]

export const outlineButtonTabs = [
  {
    label: 'Component',
    code: `'use client'

import React from 'react'

export default function OutlineButton({ children, disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      className={\`inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white bg-transparent border border-white/20 text-white hover:bg-white/10 \${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }\`}
      {...props}
    >
      {children}
    </button>
  )
}`
  },
  {
    label: 'Usage',
    code: `<OutlineButton>Outline</OutlineButton>
<OutlineButton disabled>Disabled</OutlineButton>`
  }
]

export const dangerButtonTabs = [
  {
    label: 'Component',
    code: `'use client'

import React from 'react'

export default function DangerButton({ children, disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      className={\`inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white bg-red-600 text-white hover:bg-red-700 \${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }\`}
      {...props}
    >
      {children}
    </button>
  )
}`
  },
  {
    label: 'Usage',
    code: `<DangerButton>Danger</DangerButton>
<DangerButton disabled>Disabled</DangerButton>`
  }
]
