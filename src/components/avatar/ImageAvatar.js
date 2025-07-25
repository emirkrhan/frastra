/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'

export default function ImageAvatar() {
  return (
    <div
      className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
      role="img"
      aria-label="Avatar of Pedro Duarte"
    >
      <img
        src="/profile.jpg"
        alt=""
        className="size-10 aspect-square h-full w-full object-cover"
      />
    </div>
  )
}
