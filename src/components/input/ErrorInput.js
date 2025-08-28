'use client'
import React from 'react'

export default function ErrorInput(props) {
  return (
    <input
      type="text"
      placeholder="email@example.com"
      defaultValue="wrong@email"
      className="w-full max-w-xs px-3 py-2 rounded-md bg-tertiary border border-danger text-paragraph-size text-paragraph placeholder-descriptive focus:outline-none"
      {...props}
    />
  )
} 