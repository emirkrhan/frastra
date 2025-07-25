'use client'
import React from 'react'
import { BellIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'

export default function NotificationCard() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-neutral-800 text-white">
      <div className="flex items-center gap-4 p-4">
        <BellIcon className="size-6 shrink-0 text-white/70" />
        <div className="flex-grow">
          <p className="text-sm font-semibold">New notification</p>
          <p className="text-xs text-white/60">
            A new update is available for your account.
          </p>
        </div>
        <button className="shrink-0 p-1 text-white/50 hover:text-white transition cursor-pointer">
          <ArchiveBoxXMarkIcon className="size-5" />
        </button>
      </div>
    </div>
  )
} 