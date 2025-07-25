'use client'

export default function DefaultSpinner() {
  return (
    <div
      className='size-8 animate-spin rounded-full border-2 border-white/20 border-t-white'
      role='status'
      aria-live='polite'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
} 