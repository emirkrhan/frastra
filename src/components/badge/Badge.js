'use client'
import React from 'react'

export default function Badge({ children, variant = 'primary', icon, className = '', ...rest }) {
  const baseClasses = 'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors'
  const variantClasses = {
    primary: 'border border-transparent bg-tertiary text-paragraph',
    secondary: 'border border-transparent bg-secondary text-paragraph',
    destructive: 'bg-danger/20 text-danger',
    outline: 'border border-border text-paragraph',
    success: 'bg-success/20 text-success'
  }

  const hasIcon = Boolean(icon)
  const gapClasses = hasIcon ? ' gap-1.5' : ''
  const resolvedVariant = variantClasses[variant] || variantClasses.primary

  return (
    <div className={`${baseClasses}${gapClasses} ${resolvedVariant} ${className}`} {...rest}>
      {icon}
      {children && <span>{children}</span>}
    </div>
  )
}


