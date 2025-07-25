'use client'

export default function BarsSpinner() {
  return (
    <div className='flex items-end gap-1 h-6' role='status' aria-live='polite'>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.4s] h-2'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.2s] h-4'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse h-6'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.2s] h-4'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.4s] h-2'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
} 