'use client'

import React from 'react'
import { useToast } from './ToastProvider'

export default function ToastDemo() {
  const { addToast } = useToast()

  return (
    <button
      className='px-3 py-1.5 text-tips-size rounded-md border border-border text-descriptive hover:bg-secondary'
      onClick={() => addToast('success', 'Action completed', 'Your changes have been saved', 3000)}
    >
      Show toast
    </button>
  )
}


