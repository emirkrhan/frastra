'use client'
import React from 'react'
import Image from 'next/image'
import { UserGroupIcon, UserPlusIcon } from '@heroicons/react/24/outline'

export default function UserCard() {
  return (
    <div className="group relative w-full max-w-sm rounded-xl border border-border bg-tertiary p-6 text-paragraph overflow-hidden transition-all duration-300 hover:border-border/15 hover:shadow-xl hover:shadow-white/[0.02]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-black/10 pointer-events-none" />
      
      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/8 via-white/4 to-white/8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
            <Image
              src="https://avatars.githubusercontent.com/u/78386200?v=4"
              alt="Emirhan Körhan"
              width={64}
              height={64}
              className="relative rounded-full flex-shrink-0 ring-2 ring-white/10 group-hover:ring-white/15 transition-all duration-300"
            />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-success rounded-full border-2 border-border transition-colors duration-200">
              <div className="w-full h-full bg-success rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold bg-gradient-to-r from-title via-title to-title/90 bg-clip-text text-transparent group-hover:from-title group-hover:to-title/80 transition-all duration-300">
                Emirhan Körhan
              </h3>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <p className="text-paragraph-size text-paragraph group-hover:text-paragraph transition-colors duration-200">
                Founder @ Frastra
              </p>
              <div className="px-2 py-0.5 bg-white/5 border border-border rounded-full text-tips-size text-tips group-hover:bg-white/10 group-hover:text-tips transition-all duration-200">
                Pro
              </div>
            </div>
            
            <p className="text-tips-size text-tips leading-relaxed mt-3 group-hover:text-tips transition-colors duration-200">
              Building beautiful, accessible UI components and tools for modern web development. 
              Passionate about design systems and developer experience.
            </p>
            
            {/* Stats */}
            <div className="flex items-center gap-4 mt-3 text-tips-size text-tips">
              <div className="flex items-center gap-1">
                <UserGroupIcon className="w-3 h-3" />
                <span className="group-hover:text-tips transition-colors duration-200">
                  23.5k followers
                </span>
              </div>
              <div className="flex items-center gap-1">
                <UserPlusIcon className="w-3 h-3" />
                <span className="group-hover:text-descriptive transition-colors duration-200">
                  1.2k following
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex gap-3">
          <button className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-white text-black hover:bg-white/95 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:shadow-white/5">
            <span className="bg-gradient-to-r from-black to-neutral-800 bg-clip-text text-transparent">
              Follow
            </span>
          </button>
          <button className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-tertiary text-white hover:bg-tertiary/8 border border-border  transition-all duration-200 backdrop-blur-sm">
            Message
          </button>
        </div>
      </div>
    </div>
  )
} 