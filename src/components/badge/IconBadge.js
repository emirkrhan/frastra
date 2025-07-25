'use client'
import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function IconBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-md border border-green-500/50 bg-green-950/30 px-2.5 py-0.5 text-xs font-semibold text-green-300 transition-colors">
      <CheckCircleIcon className="size-3.5" />
      <span>Verified</span>
    </div>
  )
} 