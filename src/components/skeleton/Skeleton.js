'use client'

import React from 'react'

export function Skeleton({ className = "w-full h-4 rounded-md" }) {
  return (
    <div className={`animate-pulse bg-secondary ${className}`}></div>
  )
}
