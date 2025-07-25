export const simpleListTabs = [
  {
    label: 'Component',
    code: `'use client'

import { UserIcon } from '@heroicons/react/24/outline'

export default function SimpleList({ items }) {
  const defaultItems = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com' },
  ]

  const listItems = items || defaultItems

  return (
    <div className='w-full max-w-md'>
      <ul className='space-y-1'>
        {listItems.map((item) => (
          <li 
            key={item.id}
            className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer'
          >
            <div className='flex-shrink-0'>
              <UserIcon className='h-5 w-5 text-white/60' />
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-white truncate'>
                {item.name}
              </p>
              <p className='text-xs text-white/60 truncate'>
                {item.email}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}`
  }
]

export const avatarListTabs = [
  {
    label: 'Component',
    code: `'use client'

import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export default function AvatarList({ items }) {
  const defaultItems = [
    { 
      id: 1, 
      name: 'Alex Chen', 
      role: 'Product Designer', 
      avatar: 'AC',
      status: 'online',
      color: 'from-blue-400 to-purple-500'
    },
    { 
      id: 2, 
      name: 'Maya Rodriguez', 
      role: 'Frontend Developer', 
      avatar: 'MR',
      status: 'offline',
      color: 'from-green-400 to-blue-500'
    },
    { 
      id: 3, 
      name: 'David Kim', 
      role: 'Backend Developer', 
      avatar: 'DK',
      status: 'away',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      id: 4, 
      name: 'Emma Thompson', 
      role: 'UI/UX Designer', 
      avatar: 'ET',
      status: 'online',
      color: 'from-yellow-400 to-orange-500'
    },
  ]

  const listItems = items || defaultItems

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-400'
      case 'away': return 'bg-yellow-400'
      case 'offline': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className='w-full max-w-md'>
      <ul className='space-y-2'>
        {listItems.map((item) => (
          <li 
            key={item.id}
            className='flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors'
          >
            <div className='relative flex-shrink-0'>
              <div className={\`w-10 h-10 rounded-full bg-gradient-to-br \${item.color} flex items-center justify-center\`}>
                <span className='text-sm font-semibold text-white'>
                  {item.avatar}
                </span>
              </div>
              <div className={\`absolute -bottom-0.5 -right-0.5 w-3 h-3 \${getStatusColor(item.status)} rounded-full border-2 border-black\`} />
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-white truncate'>
                {item.name}
              </p>
              <p className='text-xs text-white/60 truncate'>
                {item.role}
              </p>
            </div>
            <button className='flex-shrink-0 p-1 text-white/50 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer'>
              <EllipsisVerticalIcon className='h-4 w-4' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}`
  }
]

export const actionListTabs = [
  {
    label: 'Component',
    code: `'use client'

import { 
  DocumentIcon, 
  FolderIcon, 
  PhotoIcon,
  VideoCameraIcon,
  ArchiveBoxIcon,
  TrashIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function ActionList({ items }) {
  const defaultItems = [
    { 
      id: 1, 
      title: 'Documents', 
      description: '24 files',
      icon: DocumentIcon,
      color: 'text-blue-400',
      action: 'navigate'
    },
    { 
      id: 2, 
      title: 'Photos', 
      description: '156 images',
      icon: PhotoIcon,
      color: 'text-green-400',
      action: 'navigate'
    },
    { 
      id: 3, 
      title: 'Videos', 
      description: '8 videos',
      icon: VideoCameraIcon,
      color: 'text-purple-400',
      action: 'navigate'
    },
    { 
      id: 4, 
      title: 'Archive', 
      description: 'Old files',
      icon: ArchiveBoxIcon,
      color: 'text-yellow-400',
      action: 'navigate'
    },
    { 
      id: 5, 
      title: 'Trash', 
      description: '12 items',
      icon: TrashIcon,
      color: 'text-red-400',
      action: 'navigate'
    },
  ]

  const listItems = items || defaultItems

  return (
    <div className='w-full max-w-md'>
      <ul className='space-y-1'>
        {listItems.map((item) => (
          <li 
            key={item.id}
            className='group flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 transition-colors cursor-pointer'
          >
            <div className='flex-shrink-0'>
              <item.icon className={\`h-5 w-5 \${item.color}\`} />
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-white truncate'>
                {item.title}
              </p>
              <p className='text-xs text-white/60 truncate'>
                {item.description}
              </p>
            </div>
            {item.action === 'navigate' && (
              <div className='flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                <ChevronRightIcon className='h-4 w-4 text-white/50' />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}`
  }
]

export const selectableListTabs = [
  {
    label: 'Component',
    code: `'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function SelectableList({ items, onSelectionChange }) {
  const defaultItems = [
    { id: 1, title: 'Design System Update', description: 'Update button components and color palette' },
    { id: 2, title: 'API Integration', description: 'Connect frontend with new authentication API' },
    { id: 3, title: 'Performance Optimization', description: 'Optimize bundle size and loading times' },
    { id: 4, title: 'User Testing', description: 'Conduct usability tests for new dashboard' },
    { id: 5, title: 'Documentation', description: 'Update component documentation and examples' },
  ]

  const listItems = items || defaultItems
  const [selectedItems, setSelectedItems] = useState([])

  const handleToggleItem = (itemId) => {
    const newSelection = selectedItems.includes(itemId)
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId]
    
    setSelectedItems(newSelection)
    onSelectionChange?.(newSelection)
  }

  const handleSelectAll = () => {
    const allIds = listItems.map(item => item.id)
    const newSelection = selectedItems.length === listItems.length ? [] : allIds
    setSelectedItems(newSelection)
    onSelectionChange?.(newSelection)
  }

  return (
    <div className='w-full max-w-md'>
      <div className='flex items-center justify-between mb-3 px-3'>
        <span className='text-sm text-white/70'>
          {selectedItems.length} of {listItems.length} selected
        </span>
        <button
          onClick={handleSelectAll}
          className='text-xs text-blue-400 hover:text-blue-300 transition-colors'
        >
          {selectedItems.length === listItems.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      
      <ul className='space-y-1'>
        {listItems.map((item) => {
          const isSelected = selectedItems.includes(item.id)
          
          return (
            <li 
              key={item.id}
              onClick={() => handleToggleItem(item.id)}
              className={\`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors cursor-pointer \${
                isSelected 
                  ? 'bg-blue-500/10 border border-blue-500/20' 
                  : 'hover:bg-white/5 border border-transparent'
              }\`}
            >
              <div className='flex-shrink-0'>
                <div 
                  className={\`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors \${
                    isSelected 
                      ? 'bg-blue-500 border-blue-500' 
                      : 'border-white/30 hover:border-white/50'
                  }\`}
                >
                  {isSelected && (
                    <CheckIcon className='h-3 w-3 text-white' />
                  )}
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <p className={\`text-sm font-medium truncate transition-colors \${
                  isSelected ? 'text-white' : 'text-white/90'
                }\`}>
                  {item.title}
                </p>
                <p className='text-xs text-white/60 truncate'>
                  {item.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}`
  }
] 