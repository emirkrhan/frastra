'use client'
import React from 'react'

export default function ErrorInput(props) {
  return (
    <input
      type="text"
      placeholder="email@example.com"
      defaultValue="wrong@email"
      className="w-full max-w-xs px-3 py-2 rounded-md bg-neutral-800 border border-red-500 text-sm text-white placeholder-gray-500 focus:outline-none"
      {...props}
    />
  )
} 