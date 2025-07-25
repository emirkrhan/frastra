export const breadcrumbComponentTabs = [
  {
    label: 'Component',
    code: `'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Breadcrumb({ items, separator, icon: Icon, slash = false }) {
  const Separator = separator || (
    slash ? (
      <span className="text-gray-500 text-sm font-light">/</span>
    ) : (
      <ChevronRightIcon className='h-5 w-5 text-gray-500' />
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
                className={\`flex items-center text-sm font-medium \${
                  index === items.length - 1
                    ? 'pointer-events-none text-white'
                    : 'text-gray-400 hover:text-white'
                }\`}
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
}`
  }
]

export const usageTabs = [
  {
    label: 'Component',
    code: `const items = [
  { name: 'Home', href: '#' },
  { name: 'Components', href: '#' },
  { name: 'Breadcrumb', href: '#' },
]

<Breadcrumb items={items} />`
  }
]

export const withIconsTabs = [
  {
    label: 'Component',
    code: `import { HomeIcon } from '@heroicons/react/20/solid'

const items = [
  { name: 'Home', href: '#' },
  { name: 'Components', href: '#' },
  { name: 'Breadcrumb', href: '#' },
]

<Breadcrumb items={items} icon={HomeIcon} />`
  }
]

export const withSlashSeparatorTabs = [
  {
    label: 'Component',
    code: `const items = [
  { name: 'Home', href: '#' },
  { name: 'Components', href: '#' },
  { name: 'Breadcrumb', href: '#' },
]

<Breadcrumb items={items} slash={true} />`
  }
] 