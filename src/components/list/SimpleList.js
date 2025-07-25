'use client'

import { UserIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

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
} 