'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

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

  const safeValue = useMemo(() => (
    multiple ? (value || []) : value
  ), [multiple, value])

  const listboxId = "select-listbox" 

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

  const handleBlur = useCallback((event) => {
    if (selectRef.current && !selectRef.current.contains(event.relatedTarget)) {
      setIsOpen(false)
      setSearchQuery('')
    }
  }, [])

  const filteredOptions = useMemo(() => {
    return searchable 
      ? options.filter(option => 
          option.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : options
  }, [options, searchQuery, searchable])

  const handleOptionClick = useCallback((option) => {
    if (multiple) {
      const isSelected = Array.isArray(safeValue) && safeValue.some(v => v.value === option.value)
      const newValue = isSelected
        ? safeValue.filter(v => v.value !== option.value)
        : [...safeValue, option]
      onChange(newValue)
    } else {
      onChange(option)
      setIsOpen(false)
      setSearchQuery('')
    }
  }, [multiple, safeValue, onChange])

  const handleRemoveItem = useCallback((removedOption) => {
    if (multiple && Array.isArray(safeValue)) {
      const newValue = safeValue.filter(v => v.value !== removedOption.value)
      onChange(newValue)
    }
  }, [multiple, safeValue, onChange])

  const isSelected = useCallback((option) => {
    if (multiple) {
      return Array.isArray(safeValue) && safeValue.some(v => v.value === option.value)
    }
    return safeValue && safeValue.value === option.value
  }, [multiple, safeValue])

  const getDisplayContent = useCallback(() => {
    if (multiple) {
      if (!safeValue || safeValue.length === 0) {
        return <span className="text-descriptive">{placeholder}</span>
      }
      
      return (
        <div className="flex flex-wrap gap-1">
          {safeValue.map((item) => (
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
                <XMarkIcon className="w-3 h-3" />
              </div>
            </span>
          ))}
        </div>
      )
    }
    return (
      <span className={safeValue ? 'text-paragraph' : 'text-descriptive'}>
        {safeValue ? safeValue.label : placeholder}
      </span>
    )
  }, [multiple, safeValue, placeholder, handleRemoveItem])

  return (
    <div 
      ref={selectRef} 
      className={`relative w-full max-w-md ${className}`} 
      onBlur={handleBlur}
    >
      <button
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}  
        aria-disabled={disabled}
        aria-haspopup="listbox"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-full px-3 py-2 bg-tertiary border border-border rounded-md
          flex items-center justify-between text-left text-descriptive-size min-h-[36px]
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
          <ChevronDownIcon className="w-4 h-4 text-descriptive" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={listboxId}      
            role="listbox"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute z-50 w-full mt-1 bg-tertiary border border-border rounded-md shadow-lg max-h-60 overflow-hidden"
          >
            {searchable && (
              <div className="p-2 border-b border-border">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-1.5 bg-tertiary border border-border rounded text-paragraph text-paragraph-size placeholder-descriptive focus:outline-none focus:border-white/30 transition-all duration-150"
                />
              </div>
            )}

            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-descriptive text-descriptive-size">
                  {searchable && searchQuery ? 'No results found' : 'No options available'}
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected(option)}
                    onClick={() => handleOptionClick(option)}
                    className={`
                      w-full px-3 py-1.5 text-left flex items-center justify-between text-descriptive-size
                      transition-colors duration-100
                      ${isSelected(option) 
                        ? 'bg-white/5 text-white' 
                        : 'text-descriptive hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    <span>{option.label}</span>
                    {isSelected(option) && (
                      <CheckIcon className="w-4 h-4 text-white" />
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
