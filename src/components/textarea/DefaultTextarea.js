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
      className={`w-full px-3 py-2 text-sm bg-neutral-800 border border-white/10 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:border-white/20 transition-colors resize-vertical ${className}`}
      {...props}
    />
  )
} 