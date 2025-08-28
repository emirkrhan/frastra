'use client'
import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

export default function ProjectCard() {
  return (
    <div className="group relative w-full max-w-sm rounded-xl border border-border bg-tertiary p-6 text-paragraph transition-all hover:border-border/15">
      <div className="flex items-center justify-between">
        <h3 className="text-title-size font-title">CosmoUI</h3>
        <ArrowUpRightIcon className="size-4 text-descriptive transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className="mt-2 text-descriptive-size text-descriptive">
        A sleek and modern and woaaaa UI component library for your next front project.
      </p>
      <div className="mt-4 flex gap-2">
        <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-black">
          React
        </span>
        <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-black">
          Next.js
        </span>
        <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-black">
          Tailwind
        </span>
      </div>
    </div>
  )
} 