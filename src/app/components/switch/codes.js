// Switch Component Code
const switchComponentCode = `'use client'

import { useState } from 'react'

export default function Switch({ 
  label, 
  disabled = false, 
  defaultValue = false, 
  onChange,
  id 
}) {
  const [enabled, setEnabled] = useState(defaultValue)

  const handleToggle = () => {
    if (disabled) return
    const newValue = !enabled
    setEnabled(newValue)
    onChange?.(newValue)
  }

  const switchElement = (
    <button
      id={id}
      type='button'
      onClick={handleToggle}
      disabled={disabled}
      className={\`\${
        enabled ? 'bg-white/80' : 'bg-neutral-800'
      } relative inline-flex items-center h-5 w-9 flex-shrink-0 \${
        disabled 
          ? 'cursor-not-allowed opacity-50' 
          : 'cursor-pointer'
      } rounded-full transition-colors duration-200 ease-in-out focus:outline-none\`}
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

  if (label) {
    return (
      <div className='flex items-center gap-4'>
        <label htmlFor={id} className='text-sm font-medium text-white/90'>
          {label}
        </label>
        {switchElement}
      </div>
    )
  }

  return switchElement
}`

// Usage Examples
const switchUsageCode = `'use client'

import { useState } from 'react'
import Switch from '@/components/switch/Switch'

export default function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <Switch 
      defaultValue={isEnabled}
      onChange={(value) => setIsEnabled(value)}
    />
  )
}`

const switchWithLabelCode = `'use client'

import { useState } from 'react'
import Switch from '@/components/switch/Switch'

export default function MyComponent() {
  const [notifications, setNotifications] = useState(true)

  return (
    <Switch 
      label='Enable notifications' 
      id='notifications'
      defaultValue={notifications}
      onChange={(value) => setNotifications(value)}
    />
  )
}`

const switchDisabledCode = `'use client'

import Switch from '@/components/switch/Switch'

export default function MyComponent() {
  return (
    <div className='flex items-center gap-6'>
      <Switch disabled />
      <Switch disabled defaultValue={true} />
    </div>
  )
}`

// Export Tab Arrays
export const switchComponentTabs = [
  { label: "Component", code: switchComponentCode }
]

export const switchUsageTabs = [
  { label: "Component", code: switchUsageCode }
]

export const switchWithLabelTabs = [
  { label: "Component", code: switchWithLabelCode }
]

export const switchDisabledTabs = [
  { label: "Component", code: switchDisabledCode }
]