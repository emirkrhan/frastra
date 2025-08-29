'use client'

import React from 'react'

export default function Spinner({ 
  size = 'size-8', 
  label = '', 
  className = '' 
}) {
  return (
    <div className={`flex items-center gap-3 ${label ? '' : ''}`}>
      <div
        className={`${size} animate-spin rounded-full border-2 border-border border-t-white ${className}`}
        role="status"
        aria-live="polite"
      >
        <span className="sr-only">Loading...</span>
      </div>
      {label && <span className="text-descriptive text-descriptive-size font-descriptive">{label}</span>}
    </div>
  )
}
