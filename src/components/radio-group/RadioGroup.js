'use client'

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
            className={`flex items-center rounded-md p-2 transition-colors ${
              isDisabled
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer hover:bg-tertiary'
            }`}
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
              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors border-white/50"
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
            <div className='ml-2'>
              <span className='text-paragraph text-paragraph-size font-paragraph'>{option.label}</span>
              {option.description && (
                <p className='text-tips text-tips-size font-tips'>{option.description}</p>
              )}
            </div>
          </label>
        )
      })}
    </div>
  )
}
