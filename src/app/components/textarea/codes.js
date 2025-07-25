// 1. Default Textarea Component
const defaultTextareaComponentCode = `'use client'

export function DefaultTextarea({ 
  placeholder = "Enter your message...", 
  value, 
  onChange, 
  rows = 4,
  className = "",
  ...props 
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={\`w-full px-3 py-2 text-sm bg-neutral-800 border border-white/10 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:border-white/20 transition-colors resize-vertical \${className}\`}
      {...props}
    />
  )
}`;

const defaultTextareaUsage = `<div className="max-w-md">
  <DefaultTextarea placeholder="Enter your message..." />
</div>`;

// 2. Textarea With Label Component
const textareaWithLabelComponentCode = `'use client'

export function TextareaWithLabel({ 
  label = "Message",
  placeholder = "Type your message here...", 
  value, 
  onChange, 
  rows = 4,
  helperText = "",
  required = false,
  className = "",
  ...props 
}) {
  return (
    <div className="w-full space-y-2">
      <label className="block text-sm font-medium text-white/90">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={\`w-full px-3 py-2 text-sm bg-neutral-800 border border-white/10 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:border-white/20 transition-colors resize-vertical \${className}\`}
        {...props}
      />
      {helperText && (
        <p className="text-xs text-white/50">
          {helperText}
        </p>
      )}
    </div>
  )
}`;

const textareaWithLabelUsage = `<div className="max-w-md">
  <TextareaWithLabel 
    label="Feedback"
    placeholder="Share your thoughts..."
    helperText="Please provide detailed feedback to help us improve."
    required
  />
</div>`;

// 3. Auto Resize Textarea Component
const autoResizeTextareaComponentCode = `'use client'

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
    textarea.style.height = \`\${newHeight}px\`
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
      className={\`w-full px-3 py-2 text-sm bg-neutral-800 border border-white/10 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:border-white/20 transition-colors resize-none overflow-hidden \${className}\`}
      style={{ minHeight: \`\${minRows * 1.5 + 1}rem\` }}
      {...props}
    />
  )
}`;

const autoResizeTextareaUsage = `<div className="max-w-md">
  <AutoResizeTextarea 
    placeholder="Start typing and watch me grow..."
    minRows={3}
    maxRows={8}
  />
</div>`;

// 4. Textarea With Counter Component
const textareaWithCounterComponentCode = `'use client'

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
          className={\`w-full px-3 py-2 text-sm bg-neutral-800 border rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-vertical \${getBorderColor()} \${className}\`}
          {...props}
        />
        {showCounter && (
          <div className="flex justify-between items-center mt-2">
            <div className="text-xs text-white/50">
              {isOverLimit && "Character limit exceeded"}
            </div>
            <div className={\`text-xs font-medium \${getCounterColor()}\`}>
              {currentLength}/{maxLength}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}`;

const textareaWithCounterUsage = `<div className="max-w-md">
  <TextareaWithCounter 
    label="Bio"
    placeholder="Tell us about yourself..."
    maxLength={150}
  />
</div>`;

// 5. Combined exports
export const defaultTextareaTabs = [
  { label: "Component", code: defaultTextareaComponentCode },
  { label: "Usage", code: defaultTextareaUsage },
];

export const textareaWithLabelTabs = [
  { label: "Component", code: textareaWithLabelComponentCode },
  { label: "Usage", code: textareaWithLabelUsage },
];

export const autoResizeTextareaTabs = [
  { label: "Component", code: autoResizeTextareaComponentCode },
  { label: "Usage", code: autoResizeTextareaUsage },
];

export const textareaWithCounterTabs = [
  { label: "Component", code: textareaWithCounterComponentCode },
  { label: "Usage", code: textareaWithCounterUsage },
]; 