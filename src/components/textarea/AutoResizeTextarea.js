'use client'

import { useEffect, useRef } from 'react'

export function AutoResizeTextarea({ 
  placeholder = "Start typing and I'll grow...", 
  value, 
  onChange, 
  minRows = 3,
  maxRows = 10,
  className = "",
  ...props 
}) {
  const textareaRef = useRef(null)

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    // Reset height to get accurate scrollHeight
    textarea.style.height = 'auto'
    
    // Calculate line height
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight)
    const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop)
    const paddingBottom = parseInt(window.getComputedStyle(textarea).paddingBottom)
    
    // Calculate min and max heights
    const minHeight = lineHeight * minRows + paddingTop + paddingBottom
    const maxHeight = lineHeight * maxRows + paddingTop + paddingBottom
    
    // Set new height within bounds
    const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight)
    textarea.style.height = `${newHeight}px`
  }

  useEffect(() => {
    adjustHeight()
  }, [value])

  const handleChange = (e) => {
    onChange?.(e)
    adjustHeight()
  }

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 text-sm bg-neutral-800 border border-white/10 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:border-white/20 transition-colors resize-none overflow-hidden ${className}`}
      style={{ minHeight: `${minRows * 1.5 + 1}rem` }}
      {...props}
    />
  )
} 