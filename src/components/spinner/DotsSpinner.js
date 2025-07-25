'use client'

export default function DotsSpinner() {
  return (
    <div className='flex items-center gap-1' role='status' aria-live='polite'>
      <div className='size-2 bg-white/70 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='size-2 bg-white/70 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='size-2 bg-white/70 rounded-full animate-bounce'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
} 