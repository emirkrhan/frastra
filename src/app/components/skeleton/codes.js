// Simple Skeleton Component
const simpleSkeletonComponentCode = `'use client'

export default function SimpleSkeleton() {
  return (
    <div className='w-full space-y-3'>
      <div className='h-4 w-2/5 animate-pulse rounded-lg bg-white/5'></div>
      <div className='h-4 w-4/5 animate-pulse rounded-lg bg-white/5'></div>
      <div className='h-4 w-3/5 animate-pulse rounded-lg bg-white/5'></div>
    </div>
  )
}`

// Card Skeleton Component
const cardSkeletonComponentCode = `'use client'

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
}`

// List Skeleton Component
const listSkeletonComponentCode = `'use client'

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
}`

// Usage Examples
const simpleSkeletonUsage = `'use client'

import SimpleSkeleton from '@/components/skeleton/SimpleSkeleton'

export default function MyComponent() {
  return (
    <div className='w-full max-w-md'>
      <SimpleSkeleton />
    </div>
  )
}`

const cardSkeletonUsage = `'use client'

import CardSkeleton from '@/components/skeleton/CardSkeleton'

export default function MyComponent() {
  return <CardSkeleton />
}`

const listSkeletonUsage = `'use client'

import ListSkeleton from '@/components/skeleton/ListSkeleton'

export default function MyComponent() {
  return <ListSkeleton />
}`

// Export Tab Arrays
export const simpleSkeletonTabs = [
  { label: "Component", code: simpleSkeletonComponentCode },
  { label: "Usage", code: simpleSkeletonUsage }
]

export const cardSkeletonTabs = [
  { label: "Component", code: cardSkeletonComponentCode },
  { label: "Usage", code: cardSkeletonUsage }
]

export const listSkeletonTabs = [
  { label: "Component", code: listSkeletonComponentCode },
  { label: "Usage", code: listSkeletonUsage }
] 