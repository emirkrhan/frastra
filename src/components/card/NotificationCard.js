'use client'
import React from 'react'
import { BellIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'

export default function NotificationCard() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-border bg-tertiary text-paragraph">
      <div className="flex items-center gap-4 p-4">
        <BellIcon className="size-6 shrink-0 text-descriptive" />
        <div className="flex-grow">
          <p className="text-paragraph-size font-paragraph">New notification</p>
          <p className="text-tips-size text-tips">
            A new update is available for your account.
          </p>
        </div>
        <button className="shrink-0 p-1 text-descriptive hover:text-paragraph transition cursor-pointer">
          <ArchiveBoxXMarkIcon className="size-5" />
        </button>
      </div>
    </div>
  )
} 