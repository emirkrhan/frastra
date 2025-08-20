'use client'

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
      <ul className='space-y-1'>
        {listItems.map((item) => (
          <li 
            key={item.id}
            className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 transition-colors'
          >
            <div className='relative flex-shrink-0'>
              <div className={'w-9 h-9 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center'}>
                <span className='text-sm font-semibold text-white'>
                  {item.avatar}
                </span>
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(item.status)} rounded-full border-2 border-black`} />
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
} 