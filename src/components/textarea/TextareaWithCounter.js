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
    if (isOverLimit) return 'text-red-400'
    if (isNearLimit) return 'text-yellow-400'
    return 'text-white/50'
  }

  const getBorderColor = () => {
    if (isOverLimit) return 'border-red-500/50 focus:ring-red-500/20'
    return 'border-white/10 focus:ring-white/20 hover:border-white/20'
  }

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white/90">
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
          className={`w-full px-3 py-2 text-sm bg-neutral-800 border rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-vertical ${getBorderColor()} ${className}`}
          {...props}
        />
        {showCounter && (
          <div className="flex justify-between items-center mt-2">
            <div className="text-xs text-white/50">
              {isOverLimit && "Character limit exceeded"}
            </div>
            <div className={`text-xs font-medium ${getCounterColor()}`}>
              {currentLength}/{maxLength}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 