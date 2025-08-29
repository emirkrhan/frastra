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
      <label className="block text-paragraph-size font-paragraph text-paragraph">
        {label}
        {required && <span className="text-danger ml-1">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full px-3 py-2 text-paragraph-size bg-tertiary border border-border rounded-md text-paragraph placeholder-descriptive focus:outline-none hover:border-white/30 focus:border-white/30 transition-all duration-150 resize-vertical ${className}`}
        {...props}
      />
      {helperText && (
        <p className="text-tips-size text-tips">
          {helperText}
        </p>
      )}
    </div>
  )
} 