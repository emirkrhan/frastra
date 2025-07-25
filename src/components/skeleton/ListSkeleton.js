'use client'

function ListItemSkeleton() {
    return (
        <div className='flex items-center space-x-4'>
            <div className='h-10 w-10 animate-pulse rounded-full bg-white/5'></div>
            <div className='flex-1 space-y-2'>
                <div className='h-3 w-3/5 animate-pulse rounded-lg bg-white/5'></div>
                <div className='h-3 w-4/5 animate-pulse rounded-lg bg-white/5'></div>
            </div>
        </div>
    )
}

export default function ListSkeleton() {
  return (
    <div className='w-full max-w-sm space-y-4 rounded-xl bg-neutral-800 p-4'>
        <ListItemSkeleton />
        <ListItemSkeleton />
        <ListItemSkeleton />
    </div>
  )
} 