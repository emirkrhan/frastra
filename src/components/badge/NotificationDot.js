'use client'
import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function NotificationDot() {
  return (
    <div className="relative inline-block">
      <EnvelopeIcon className="size-8 text-white" />
      <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-black" />
    </div>
  )
} 