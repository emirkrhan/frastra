export const simpleCardTabs = [
  {
    label: 'Component',
    code: `<div className="w-full max-w-sm rounded-xl border border-white/10 bg-neutral-800 p-6 text-white">
  <h3 className="text-lg font-bold">Card Title</h3>
  <p className="mt-2 text-sm text-white/70">
    This is the content of the card. You can put any information you want here.
  </p>
</div>`
  }
]

export const notificationCardTabs = [
  {
    label: 'Component',
    code: `import { BellIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'

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
</div>`
  }
]

export const userCardTabs = [
  {
    label: 'Component',
    code: `import Image from 'next/image'
import { UserGroupIcon, UserPlusIcon } from '@heroicons/react/24/outline'

<div className="group relative w-full max-w-sm rounded-xl border border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900 p-6 text-white overflow-hidden transition-all duration-300 hover:border-white/15 hover:shadow-xl hover:shadow-white/[0.02]">
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
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-neutral-800 transition-colors duration-200">
          <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all duration-300">
            Emirhan Körhan
          </h3>
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-200">
            Founder @ Frastra
          </p>
          <div className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 group-hover:bg-white/10 group-hover:text-white/70 transition-all duration-200">
            Pro
          </div>
        </div>
        
        <p className="text-xs text-white/60 leading-relaxed mt-3 group-hover:text-white/70 transition-colors duration-200">
          Building beautiful, accessible UI components and tools for modern web development. 
          Passionate about design systems and developer experience.
        </p>
        
        {/* Stats */}
        <div className="flex items-center gap-4 mt-3 text-xs text-white/50">
          <div className="flex items-center gap-1">
            <UserGroupIcon className="w-3 h-3" />
            <span className="group-hover:text-white/60 transition-colors duration-200">
              23.5k followers
            </span>
          </div>
          <div className="flex items-center gap-1">
            <UserPlusIcon className="w-3 h-3" />
            <span className="group-hover:text-white/60 transition-colors duration-200">
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
      <button className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-white/5 text-white hover:bg-white/8 border border-white/10 hover:border-white/15 transition-all duration-200 backdrop-blur-sm">
        Message
      </button>
    </div>
  </div>
</div>`
  }
]

export const projectCardTabs = [
  {
    label: 'Component',
    code: `import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

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
</div>`
  }
] 