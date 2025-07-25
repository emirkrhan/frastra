'use client'

export default function PulseSpinner() {
  return (
    <div className='relative flex items-center justify-center' role='status' aria-live='polite'>
      <div className='size-8 rounded-full bg-white/20 animate-ping absolute'></div>
      <div className='size-6 rounded-full bg-white/40 animate-pulse'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
} 