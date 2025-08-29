'use client'

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
            className='group flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors cursor-pointer'
          >
            <div className='flex-shrink-0'>
              <item.icon className={`h-5 w-5 ${item.color}`} />
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-paragraph font-paragraph text-paragraph-size truncate'>
                {item.title}
              </p>
              <p className='text-tips-size text-tips truncate'>
                {item.description}
              </p>
            </div>
            {item.action === 'navigate' && (
              <div className='flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                <ChevronRightIcon className='h-4 w-4 text-descriptive' />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
} 