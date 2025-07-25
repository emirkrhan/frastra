'use client'
import React from 'react'

export default function SimpleCard() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-neutral-800 p-6 text-white">
      <h3 className="text-lg font-bold">Card Title</h3>
      <p className="mt-2 text-sm text-white/70">
        This is the content of the card. You can put any information you want here.
      </p>
    </div>
  )
} 