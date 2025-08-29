'use client'

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
      className={`w-full px-3 py-2 text-paragraph-size bg-tertiary border border-border rounded-md text-paragraph placeholder-descriptive focus:outline-none hover:border-white/30 focus:border-white/30 transition-all duration-150 resize-vertical ${className}`}
      {...props}
    />
  )
} 