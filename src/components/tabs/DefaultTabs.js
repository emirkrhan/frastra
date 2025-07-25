'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function DefaultTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className='w-full max-w-md'>
      <div className='flex border-b border-white/10'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white'
            } relative px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-white`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId='active-tab-indicator'
                className='absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white'
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className='p-4'>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
} 