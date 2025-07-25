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