'use client'

export default function CardSkeleton() {
  return (
    <div className='flex items-center space-x-4 w-full max-w-sm rounded-xl bg-neutral-800 p-4'>
      <div className='h-12 w-12 animate-pulse rounded-full bg-white/5'></div>
      <div className='flex-1 space-y-3 py-1'>
        <div className='h-4 w-3/4 animate-pulse rounded-lg bg-white/5'></div>
        <div className='space-y-2'>
          <div className='h-4 animate-pulse rounded-lg bg-white/5'></div>
          <div className='h-4 w-5/6 animate-pulse rounded-lg bg-white/5'></div>
        </div>
      </div>
    </div>
  )
} 