'use client'

export default function DisabledSwitch() {
  return (
    <div className='flex items-center gap-6'>
       {/* Disabled Off */}
      <button
        type='button'
        disabled
        className='bg-neutral-800 relative inline-flex items-center h-5 w-9 flex-shrink-0 cursor-not-allowed rounded-full transition-colors duration-200 ease-in-out opacity-50'
        role='switch'
        aria-checked={false}
      >
        <span
          aria-hidden='true'
          className='translate-x-0.5 bg-white pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out'
        />
      </button>

      {/* Disabled On */}
       <button
        type='button'
        disabled
        className='bg-white/80 relative inline-flex items-center h-5 w-9 flex-shrink-0 cursor-not-allowed rounded-full transition-colors duration-200 ease-in-out opacity-50'
        role='switch'
        aria-checked={true}
      >
        <span
          aria-hidden='true'
          className='translate-x-4 bg-black pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out'
        />
      </button>
    </div>
  )
} 