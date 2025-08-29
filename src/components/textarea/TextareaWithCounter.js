'use client'

import { useState } from 'react'

export function TextareaWithCounter({ 
  placeholder = "Share your thoughts...", 
  value: controlledValue, 
  onChange, 
  maxLength = 280,
  rows = 4,
  label = "Description",
  showCounter = true,
  className = "",
  ...props 
}) {
  const [internalValue, setInternalValue] = useState('')
  
  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue
  const currentLength = value?.length || 0
  const isNearLimit = currentLength > maxLength * 0.8
  const isOverLimit = currentLength > maxLength

  const handleChange = (e) => {
    const newValue = e.target.value
    
    if (controlledValue !== undefined) {
      onChange?.(e)
    } else {
      setInternalValue(newValue)
      onChange?.(e)
    }
  }

  const getCounterColor = () => {
    if (isOverLimit) return 'text-danger'
    if (isNearLimit) return 'text-info'
    return 'text-tips'
  }

  const getBorderColor = () => {
    if (isOverLimit) return 'border-danger focus:border-danger'
    return 'border-border hover:border-white/30 focus:border-white/30'
  }

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-paragraph-size font-paragraph text-paragraph">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          className={`w-full px-3 py-2 text-paragraph-size bg-tertiary border rounded-md text-paragraph placeholder-descriptive focus:outline-none transition-all duration-150 resize-vertical ${getBorderColor()} ${className}`}
          {...props}
        />
        {showCounter && (
          <div className="flex justify-between items-center mt-2">
            <div className="text-tips-size text-tips">
              {isOverLimit && "Character limit exceeded"}
            </div>
            <div className={`text-tips-size font-tips ${getCounterColor()}`}>
              {currentLength}/{maxLength}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 