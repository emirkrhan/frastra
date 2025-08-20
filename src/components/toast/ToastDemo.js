'use client'

import React from 'react'
import { useToast } from './ToastProvider'

export default function ToastDemo() {
  const { addToast } = useToast()

  return (
    <button
      className='px-3 py-1.5 text-xs rounded-md border border-white/10 text-white/80 hover:bg-white/5'
      onClick={() => addToast('success', 'Action completed', 'Your changes have been saved', 3000)}
    >
      Show toast
    </button>
  )
}


