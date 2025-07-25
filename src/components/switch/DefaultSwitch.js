'use client'

import { useState } from 'react'

export default function DefaultSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <button
      type='button'
      onClick={() => setEnabled(!enabled)}
      className={`${
        enabled ? 'bg-white/80' : 'bg-neutral-800'
      } relative inline-flex items-center h-5 w-9 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none`}
      role='switch'
      aria-checked={enabled}
    >
      <span
        aria-hidden='true'
        className={`${
          enabled ? 'translate-x-4 bg-black' : 'translate-x-0.5 bg-white'
        } pointer-events-none inline-block size-4 transform rounded-full shadow transition duration-200 ease-in-out`}
      />
    </button>
  )
} 