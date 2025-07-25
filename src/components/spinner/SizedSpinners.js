'use client'

function Spinner({ size }) {
  return (
    <div
      className={`${size} animate-spin rounded-full border-2 border-white/20 border-t-white`}
      role='status'
      aria-live='polite'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default function SizedSpinners() {
  return (
    <div className='flex items-center gap-6'>
      <Spinner size='size-6' />
      <Spinner size='size-8' />
      <Spinner size='size-10' />
    </div>
  )
} 