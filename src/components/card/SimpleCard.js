'use client'
import React from 'react'

export default function SimpleCard() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-border bg-tertiary p-4 text-paragraph">
      <h3 className="text-lg font-bold">Card Title</h3>
      <p className="mt-2 text-sm text-descriptive">
        This is the content of the card. You can put any information you want here.
      </p>
    </div>
  )
} 