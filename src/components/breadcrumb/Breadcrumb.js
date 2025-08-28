'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Breadcrumb({ items, separator, icon: Icon, slash = false }) {
  const Separator = separator || (
    slash ? (
      <span className="text-descriptive text-descriptive-size font-descriptive">/</span>
    ) : (
      <ChevronRightIcon className='h-5 w-5 text-descriptive' />
    )
  )

  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='flex items-center space-x-2'>
        {items.map((item, index) => (
          <li key={item.name}>
            <div className='flex items-center'>
              {index > 0 && <div className='mr-2'>{Separator}</div>}
              <a
                href={item.href}
                className={`flex items-center text-sm font-medium ${
                  index === items.length - 1
                    ? 'pointer-events-none text-white'
                    : 'text-descriptive hover:text-white'
                }`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {Icon && (
                  <Icon
                    className='mr-2 h-5 w-5 flex-shrink-0'
                    aria-hidden='true'
                  />
                )}
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
} 