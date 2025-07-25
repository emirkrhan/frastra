'use client'

export default function SimpleSkeleton() {
  return (
    <div className='w-full space-y-3'>
      <div className='h-4 w-2/5 animate-pulse rounded-lg bg-white/5'></div>
      <div className='h-4 w-4/5 animate-pulse rounded-lg bg-white/5'></div>
      <div className='h-4 w-3/5 animate-pulse rounded-lg bg-white/5'></div>
    </div>
  )
} 