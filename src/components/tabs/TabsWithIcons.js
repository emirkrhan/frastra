'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserCircleIcon, KeyIcon, UsersIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export function TabsWithIcons({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const iconsMap = {
    account: UserCircleIcon,
    password: KeyIcon,
    team: UsersIcon,
    billing: CreditCardIcon,
  }

  return (
    <div className='w-full max-w-md'>
      <div className='flex border-b border-border'>
        {tabs.map((tab) => {
          const Icon = iconsMap[tab.id]
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? 'text-paragraph' : 'text-descriptive hover:text-paragraph'
              } relative flex items-center gap-2 px-4 py-2 text-paragraph-size font-paragraph transition focus-visible:outline-2 focus-visible:outline-paragraph`}
            >
              <Icon className='h-5 w-5' />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId='active-icon-tab-indicator'
                  className='absolute bottom-[-1px] left-0 right-0 h-0.5 bg-paragraph'
                />
              )}
            </button>
          )
        })}
      </div>
      <div className='p-4'>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
} 