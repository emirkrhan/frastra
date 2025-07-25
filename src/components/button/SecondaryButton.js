'use client'

import React from 'react'

export default function SecondaryButton({
  children,
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white bg-zinc-800 text-zinc-100 hover:bg-zinc-700 ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      {...props}
    >
      {children}
    </button>
  )
} 