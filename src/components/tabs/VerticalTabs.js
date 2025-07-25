'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function VerticalTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className='flex w-full max-w-lg gap-6'>
      <div className='flex flex-col border-r border-white/10'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white'
            } relative whitespace-nowrap px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-white text-right`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId='active-vertical-tab-indicator'
                className='absolute right-[-1px] top-0 bottom-0 w-0.5 bg-white'
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className='p-2 flex-1'>
        <p className='text-sm'>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </p>
      </div>
    </div>
  )
} 