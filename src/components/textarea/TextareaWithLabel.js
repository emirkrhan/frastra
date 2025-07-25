'use client'

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
        className={`w-full px-3 py-2 text-sm bg-neutral-800 border border-white/10 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:border-white/20 transition-colors resize-vertical ${className}`}
        {...props}
      />
      {helperText && (
        <p className="text-xs text-white/50">
          {helperText}
        </p>
      )}
    </div>
  )
} 