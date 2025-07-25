'use client'
import React from 'react'

export default function TextArea(props) {
  return (
    <textarea
      placeholder="Your message"
      className="w-full max-w-xs px-3 py-2 rounded-md bg-neutral-800 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
      rows={4}
      {...props}
    />
  )
} 