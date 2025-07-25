// Default Switch Component
const defaultSwitchComponentCode = `'use client'

import { useState } from 'react'

export default function DefaultSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <button
      type='button'
      onClick={() => setEnabled(!enabled)}
      className={\`\${
        enabled ? 'bg-white/80' : 'bg-neutral-800'
      } relative inline-flex items-center h-5 w-9 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none\`}
      role='switch'
      aria-checked={enabled}
    >
      <span
        aria-hidden='true'
        className={\`\${
          enabled ? 'translate-x-4 bg-black' : 'translate-x-0.5 bg-white'
        } pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out\`}
      />
    </button>
  )
}`

// Switch With Label Component
const switchWithLabelComponentCode = `'use client'

import { useState } from 'react'

export default function SwitchWithLabel() {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className='flex items-center gap-4'>
       <label htmlFor='airplane-mode' className='text-sm font-medium text-white/90'>
        Airplane Mode
      </label>
      <button
        id='airplane-mode'
        type='button'
        onClick={() => setEnabled(!enabled)}
        className={\`\${
          enabled ? 'bg-white/80' : 'bg-neutral-800'
        } relative inline-flex items-center h-5 w-9 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none\`}
        role='switch'
        aria-checked={enabled}
      >
        <span
          aria-hidden='true'
          className={\`\${
            enabled ? 'translate-x-4 bg-black' : 'translate-x-0.5 bg-white'
          } pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out\`}
        />
      </button>
    </div>
  )
}`

// Disabled Switch Component
const disabledSwitchComponentCode = `'use client'

export default function DisabledSwitch() {
  return (
    <div className='flex items-center gap-6'>
       {/* Disabled Off */}
      <button
        type='button'
        disabled
        className='bg-neutral-800 relative inline-flex items-center h-5 w-9 flex-shrink-0 cursor-not-allowed rounded-full transition-colors duration-200 ease-in-out opacity-50'
        role='switch'
        aria-checked={false}
      >
        <span
          aria-hidden='true'
          className='translate-x-0.5 bg-white pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out'
        />
      </button>

      {/* Disabled On */}
       <button
        type='button'
        disabled
        className='bg-white/80 relative inline-flex items-center h-5 w-9 flex-shrink-0 cursor-not-allowed rounded-full transition-colors duration-200 ease-in-out opacity-50'
        role='switch'
        aria-checked={true}
      >
        <span
          aria-hidden='true'
          className='translate-x-4 bg-black pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out'
        />
      </button>
    </div>
  )
}`

// Usage Examples
const defaultSwitchUsage = `'use client'

import DefaultSwitch from '@/components/switch/DefaultSwitch'

export default function MyComponent() {
  return <DefaultSwitch />
}`

const switchWithLabelUsage = `'use client'

import SwitchWithLabel from '@/components/switch/SwitchWithLabel'

export default function MyComponent() {
  return <SwitchWithLabel />
}`

const disabledSwitchUsage = `'use client'

import DisabledSwitch from '@/components/switch/DisabledSwitch'

export default function MyComponent() {
  return <DisabledSwitch />
}`

// Export Tab Arrays
export const defaultSwitchTabs = [
  { label: "Component", code: defaultSwitchComponentCode },
  { label: "Usage", code: defaultSwitchUsage }
]

export const switchWithLabelTabs = [
  { label: "Component", code: switchWithLabelComponentCode },
  { label: "Usage", code: switchWithLabelUsage }
]

export const disabledSwitchTabs = [
  { label: "Component", code: disabledSwitchComponentCode },
  { label: "Usage", code: disabledSwitchUsage }
] 