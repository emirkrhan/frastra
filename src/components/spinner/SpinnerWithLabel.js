'use client'

export default function SpinnerWithLabel() {
  return (
    <div className='flex items-center gap-3'>
       <div
        className='size-6 animate-spin rounded-full border-2 border-white/20 border-t-white'
        role='status'
        aria-live='polite'
      >
        <span className='sr-only'>Loading...</span>
      </div>
      <span className='text-sm font-medium text-white/80'>Loading...</span>
    </div>
  )
} 