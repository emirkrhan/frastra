// Component Code
const radioGroupComponentCode = `'use client'

import { motion } from 'framer-motion'
import { useId } from 'react'

export default function RadioGroup({ options, value, onChange, name }) {
  const id = useId()
  const componentName = name || id

  return (
    <div className='w-full max-w-xs space-y-1'>
      {options.map((option) => {
        const isSelected = value === option.value
        const isDisabled = option.disabled || false

        return (
          <label
            key={option.value}
            className={\`flex items-start rounded-md p-2 transition-colors \${
              isDisabled
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer hover:bg-white/10'
            }\`}
          >
            <input
              type='radio'
              name={componentName}
              value={option.value}
              checked={isSelected}
              onChange={() => !isDisabled && onChange(option.value)}
              disabled={isDisabled}
              className='sr-only'
            />
            <span
              className={\`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors \${
                isSelected ? 'border-white' : 'border-gray-500'
              }\`}
            >
              {isSelected && (
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className='h-[18px] w-[18px] rounded-full bg-white'
                />
              )}
            </span>
            <div className='ml-2 text-sm'>
              <span className='font-medium text-white'>{option.label}</span>
              {option.description && (
                <p className='text-gray-400'>{option.description}</p>
              )}
            </div>
          </label>
        )
      })}
    </div>
  )
}`

// Usage Examples
const defaultRadioGroupUsage = `'use client'
import { useState } from 'react'
import RadioGroup from '@/components/radio-group/RadioGroup'

export default function DefaultRadioGroup() {
  const [plan, setPlan] = useState('pro')
  const options = [
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise' },
  ]
  return <RadioGroup name="plan" options={options} value={plan} onChange={setPlan} />
}`

const descriptiveRadioGroupUsage = `'use client'
import { useState } from 'react'
import RadioGroup from '@/components/radio-group/RadioGroup'

export default function DescriptiveRadioGroup() {
  const [notification, setNotification] = useState('all')
  const options = [
    { value: 'all', label: 'All notifications', description: 'Receive all updates.' },
    { value: 'mentions', label: 'Mentions', description: 'Only for mentions.' },
    { value: 'none', label: 'None', description: 'Mute all notifications.' },
  ]
  return <RadioGroup name="notification" options={options} value={notification} onChange={setNotification} />
}`

const disabledRadioGroupUsage = `'use client'
import { useState } from 'react'
import RadioGroup from '@/components/radio-group/RadioGroup'

export default function DisabledRadioGroup() {
  const [view, setView] = useState('comfortable')
  const options = [
    { value: 'default', label: 'Default' },
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'compact', label: 'Compact' },
    { value: 'ultra-compact', label: 'Ultra Compact', disabled: true },
  ]
  return <RadioGroup name="view" options={options} value={view} onChange={setView} />
}`

// Tab Exports
export const radioGroupComponentTabs = [
  { label: "Component", code: radioGroupComponentCode }
]

export const defaultRadioGroupTabs = [
  { label: "Component", code: defaultRadioGroupUsage }
]

export const descriptiveRadioGroupTabs = [
  { label: "Component", code: descriptiveRadioGroupUsage }
]

export const disabledRadioGroupTabs = [
  { label: "Component", code: disabledRadioGroupUsage }
] 