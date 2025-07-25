'use client'

import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// Hard-coded navigation array in exact sidebar order
const navigationOrder = [
  { id: 'introduction', label: 'Introduction', path: '/get-started/introduction' },
  { id: 'installation', label: 'Installation', path: '/get-started/installation' },
  { id: 'typography', label: 'Typography', path: '/get-started/typography' },
  { id: 'accordion', label: 'Accordion', path: '/components/accordion' },
  { id: 'alert', label: 'Alert', path: '/components/alert' },
  { id: 'avatar', label: 'Avatar', path: '/components/avatar' },
  { id: 'badge', label: 'Badge', path: '/components/badge' },
  { id: 'breadcrumb', label: 'Breadcrumb', path: '/components/breadcrumb' },
  { id: 'button', label: 'Button', path: '/components/button' },
  { id: 'card', label: 'Card', path: '/components/card' },
  { id: 'checkbox', label: 'Checkbox', path: '/components/checkbox' },
  { id: 'dropdown-menu', label: 'Dropdown Menu', path: '/components/dropdown-menu' },
  { id: 'footer', label: 'Footer', path: '/components/footer' },
  { id: 'input', label: 'Input', path: '/components/input' },
  { id: 'list', label: 'List', path: '/components/list' },
  { id: 'modal', label: 'Modal', path: '/components/modal' },
  { id: 'navbar', label: 'Navbar', path: '/components/navbar' },
  { id: 'pagination', label: 'Pagination', path: '/components/pagination' },
  { id: 'radio-group', label: 'Radio Group', path: '/components/radio-group' },
  { id: 'select', label: 'Select', path: '/components/select' },
  { id: 'skeleton', label: 'Skeleton', path: '/components/skeleton' },
  { id: 'loader', label: 'Loader', path: '/components/spinner' },
  { id: 'switch', label: 'Switch', path: '/components/switch' },
  { id: 'table', label: 'Table', path: '/components/table' },
  { id: 'tabs', label: 'Tabs', path: '/components/tabs' },
  { id: 'textarea', label: 'Textarea', path: '/components/textarea' },
  { id: 'toast', label: 'Toast', path: '/components/toast' },
  { id: 'tooltip', label: 'Tooltip', path: '/components/tooltip' },
  { id: 'box', label: 'Box', path: '/layout/box' },
  { id: 'flex', label: 'Flex', path: '/layout/flex' },
  { id: 'grid', label: 'Grid', path: '/layout/grid' },
  { id: 'aspect-ratio', label: 'Aspect Ratio', path: '/layout/aspect-ratio' },
]

export default function ComponentFooter({ currentComponent, nextComponent }) {
  // Find current page in navigation order
  const currentIndex = navigationOrder.findIndex(page => 
    page.id === currentComponent?.toLowerCase()
  )
  
  const prevComponent = currentIndex > 0 ? navigationOrder[currentIndex - 1] : null
  const autoNextComponent = currentIndex >= 0 && currentIndex < navigationOrder.length - 1 ? navigationOrder[currentIndex + 1] : null

  // Use provided nextComponent or fallback to automatic
  const displayNextComponent = nextComponent || (autoNextComponent ? {
    name: autoNextComponent.label,
    href: autoNextComponent.path
  } : null)

  return (
    <div className='mt-16 pt-6'>
      <div className='flex justify-between items-center'>
        <div>
          {prevComponent && (
            <Link
              href={prevComponent.path}
              className='inline-flex items-center gap-2 px-3 py-1.5 text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-all'
            >
              <ArrowLeftIcon className='h-4 w-4' />
              <span className='text-sm'>{prevComponent.label}</span>
            </Link>
          )}
        </div>
        <div>
          {displayNextComponent && (
            <Link
              href={displayNextComponent.href}
              className='inline-flex items-center gap-2 px-3 py-1.5 text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-all'
            >
              <span className='text-sm'>{displayNextComponent.name}</span>
              <ArrowRightIcon className='h-4 w-4' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 