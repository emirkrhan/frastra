'use client'
import React from 'react'
import Image from 'next/image'

export default function UserCard() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-neutral-800 p-6 text-white text-center">
      <Image
        src="https://github.com/peduarte.png"
        alt="Pedro Duarte"
        width={80}
        height={80}
        className="rounded-full mx-auto"
      />
      <h3 className="mt-4 text-lg font-bold">Pedro Duarte</h3>
      <p className="mt-1 text-sm text-white/70">Co-founder @ Vercel</p>
      <div className="mt-6 flex gap-3 justify-center">
        <button className="px-4 py-2 text-xs rounded-md bg-white text-black hover:bg-gray-200 transition cursor-pointer">
          Follow
        </button>
        <button className="px-4 py-2 text-xs rounded-md bg-zinc-800 text-white hover:bg-zinc-700 transition cursor-pointer">
          View Profile
        </button>
      </div>
    </div>
  )
} 