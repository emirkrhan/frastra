// 1. Default Tabs Component
const defaultTabsComponentCode = `'use client'

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
            className={\`\${
              activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white'
            } relative px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-white\`}
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
}`;

const defaultTabsUsage = `const tabsData = [
  { id: 'account', label: 'Account', content: 'Account settings and information.' },
  { id: 'password', label: 'Password', content: 'Change your password here.' },
  { id: 'team', label: 'Team', content: 'Manage your team members and roles.' },
  { id: 'billing', label: 'Billing', content: 'View your billing history and manage payment methods.' },
]

<DefaultTabs tabs={tabsData} />`;

// 2. Tabs With Icons Component
const tabsWithIconsComponentCode = `'use client'

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
      <div className='flex border-b border-white/10'>
        {tabs.map((tab) => {
          const Icon = iconsMap[tab.id]
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`\${
                activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white'
              } relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-white\`}
            >
              <Icon className='h-5 w-5' />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId='active-icon-tab-indicator'
                  className='absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white'
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
}`;

const tabsWithIconsUsage = `import { UserCircleIcon, KeyIcon, UsersIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const tabsData = [
  { id: 'account', label: 'Account', content: 'Account settings and information.' },
  { id: 'password', label: 'Password', content: 'Change your password here.' },
  { id: 'team', label: 'Team', content: 'Manage your team members and roles.' },
  { id: 'billing', label: 'Billing', content: 'View your billing history and manage payment methods.' },
]

<TabsWithIcons tabs={tabsData} />`;

// 3. Vertical Tabs Component
const verticalTabsComponentCode = `'use client'

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
            className={\`\${
              activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white'
            } relative whitespace-nowrap px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-white text-right\`}
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
}`;

const verticalTabsUsage = `const tabsData = [
  { id: 'account', label: 'Account', content: 'Account settings and information.' },
  { id: 'password', label: 'Password', content: 'Change your password here.' },
  { id: 'team', label: 'Team', content: 'Manage your team members and roles.' },
  { id: 'billing', label: 'Billing', content: 'View your billing history and manage payment methods.' },
]

<VerticalTabs tabs={tabsData} />`;

// 4. Combined exports
export const defaultTabsTabs = [
  { label: "Component", code: defaultTabsComponentCode },
  { label: "Usage", code: defaultTabsUsage },
];

export const tabsWithIconsTabs = [
  { label: "Component", code: tabsWithIconsComponentCode },
  { label: "Usage", code: tabsWithIconsUsage },
];

export const verticalTabsTabs = [
  { label: "Component", code: verticalTabsComponentCode },
  { label: "Usage", code: verticalTabsUsage },
]; 