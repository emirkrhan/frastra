'use client'
import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

export default function ProjectCard() {
  return (
    <div className="group relative w-full max-w-sm rounded-xl border border-white/10 bg-neutral-800 p-6 text-white transition-all hover:border-white/20">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">CosmoUI</h3>
        <ArrowUpRightIcon className="size-4 text-white/50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className="mt-2 text-sm text-white/70">
        A sleek and modern UI component library for your next project.
      </p>
      <div className="mt-4 flex gap-2">
        <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-300">
          React
        </span>
        <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-300">
          Next.js
        </span>
        <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-300">
          Tailwind
        </span>
      </div>
    </div>
  )
} 