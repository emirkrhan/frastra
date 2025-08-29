'use client'

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
      className={`${
        enabled ? 'bg-white' : 'bg-tertiary'
      } relative inline-flex items-center h-5 w-9 flex-shrink-0 ${
        disabled 
          ? 'cursor-not-allowed opacity-50' 
          : 'cursor-pointer'
      } rounded-full transition-colors duration-200 ease-in-out focus:outline-none`}
      role='switch'
      aria-checked={enabled}
    >
      <span
        aria-hidden='true'
        className={`${
          enabled ? 'translate-x-4 bg-black' : 'translate-x-0.5 bg-white'
        } pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out`}
      />
    </button>
  )

  if (label) {
    return (
      <div className='flex items-center gap-4'>
        <label htmlFor={id} className='text-paragraph text-paragraph-size font-paragraph'>
          {label}
        </label>
        {switchElement}
      </div>
    )
  }

  return switchElement
} 