'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function VerticalTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className='flex w-full max-w-lg gap-6'>
      <div className='flex flex-col border-r border-border'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'text-paragraph' : 'text-descriptive hover:text-paragraph'
            } relative whitespace-nowrap px-4 py-2 text-paragraph-size font-paragraph transition focus-visible:outline-2 focus-visible:outline-paragraph text-right`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId='active-vertical-tab-indicator'
                className='absolute right-[-1px] top-0 bottom-0 w-0.5 bg-paragraph'
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className='p-2 flex-1'>
        <p className='text-paragraph-size text-paragraph'>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </p>
      </div>
    </div>
  )
} 