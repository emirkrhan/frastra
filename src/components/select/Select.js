'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, X } from 'lucide-react'

export function Select({ 
  options = [], 
  placeholder = "Select an option...", 
  value = null, 
  onChange = () => {}, 
  multiple = false,
  searchable = false,
  className = "",
  disabled = false 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const selectRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Filter options based on search query
  const filteredOptions = searchable 
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options

  const handleOptionClick = (option) => {
    if (multiple) {
      const isSelected = Array.isArray(value) && value.some(v => v.value === option.value)
      const newValue = isSelected
        ? value.filter(v => v.value !== option.value)
        : [...(value || []), option]
      onChange(newValue)
    } else {
      onChange(option)
      setIsOpen(false)
      setSearchQuery('')
    }
  }

  const handleRemoveItem = (removedOption) => {
    if (multiple && Array.isArray(value)) {
      const newValue = value.filter(v => v.value !== removedOption.value)
      onChange(newValue)
    }
  }

  const isSelected = (option) => {
    if (multiple) {
      return Array.isArray(value) && value.some(v => v.value === option.value)
    }
    return value && value.value === option.value
  }

  const getDisplayContent = () => {
    if (multiple) {
      if (!value || value.length === 0) {
        return <span className="text-neutral-400">{placeholder}</span>
      }
      
      return (
        <div className="flex flex-wrap gap-1">
          {value.map((item) => (
            <span 
              key={item.value} 
              className="inline-flex items-center gap-1 bg-white/5 text-white text-xs px-1.5 py-0.5 rounded"
            >
              {item.label}
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveItem(item)
                }}
                className="hover:bg-white/10 rounded p-0.5 cursor-pointer"
              >
                <X className="w-2.5 h-2.5" />
              </div>
            </span>
          ))}
        </div>
      )
    }
    return (
      <span className={value ? 'text-white' : 'text-neutral-400'}>
        {value ? value.label : placeholder}
      </span>
    )
  }

  return (
    <div ref={selectRef} className={`relative w-full max-w-md ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-md
          flex items-center justify-between text-left text-sm min-h-[36px]
          transition-all duration-150
          ${disabled 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:border-white/20 focus:outline-none focus:border-white/30'
          }
        `}
      >
        <div className="flex-1 min-w-0">
          {getDisplayContent()}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.15 }}
          className="ml-2 flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </motion.div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute z-50 w-full mt-1 bg-neutral-800 border border-white/10 rounded-md shadow-lg max-h-60 overflow-hidden"
          >
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-white/10">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-1.5 bg-neutral-800 border border-white/10 rounded text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-white/30 transition-all duration-150"
                />
              </div>
            )}

            {/* Options */}
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-neutral-400 text-sm">
                  {searchable && searchQuery ? 'No results found' : 'No options available'}
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleOptionClick(option)}
                    className={`
                      w-full px-3 py-1.5 text-left flex items-center justify-between text-sm
                      transition-colors duration-100
                      ${isSelected(option) 
                        ? 'bg-white/5 text-white' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    <span>{option.label}</span>
                    {isSelected(option) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 