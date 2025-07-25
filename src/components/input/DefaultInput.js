'use client'
import React from 'react'

export default function DefaultInput(props) {
  return (
    <input
      type="text"
      placeholder="Email"
      className="w-full max-w-xs px-3 py-2 rounded-md bg-neutral-800 border border-white/10 text-sm text-white placeholder-neutral-400 focus:outline-none hover:border-white/20 focus:border-white/30 transition-all duration-150"
      {...props}
    />
  )
} 