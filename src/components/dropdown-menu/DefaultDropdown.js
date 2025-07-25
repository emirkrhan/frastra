'use client'

import { useState, useEffect, useRef } from 'react'
import {
  PencilIcon,
  DocumentDuplicateIcon,
  ArchiveBoxIcon,
  TrashIcon,
  ChevronDownIcon,
  ShareIcon,
  ArrowUturnRightIcon
} from '@heroicons/react/24/outline'

export default function DefaultDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type='button'
          className='inline-flex items-center justify-center gap-2 w-full rounded-md px-3 py-1.5 bg-white/10 text-sm font-medium text-white/80 hover:bg-white/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50'
          id='menu-button'
          aria-expanded={isOpen}
          aria-haspopup='true'
        >
          Dropdown
          <ChevronDownIcon
            className={`-mr-1 ml-1 size-4 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden='true'
          />
        </button>
      </div>

      <div
        className={`transition-all duration-200 ease-out origin-top-right absolute right-0 mt-1.5 w-56 rounded-xl shadow-lg bg-neutral-800 ring-1 ring-white/5 focus:outline-none z-10 p-1 ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex='-1'
      >
        <a
          href='#'
          className='group flex w-full items-center rounded-md px-2 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors'
          role='menuitem'
          tabIndex='-1'
          id='menu-item-0'
        >
          <PencilIcon className='mr-2 size-4 text-white' />
          Edit
        </a>
        <a
          href='#'
          className='group flex w-full items-center rounded-md px-2 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors'
          role='menuitem'
          tabIndex='-1'
          id='menu-item-1'
        >
          <DocumentDuplicateIcon className='mr-2 size-4 text-white' />
          Duplicate
        </a>
        <a
          href='#'
          className='group flex w-full items-center rounded-md px-2 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors'
          role='menuitem'
          tabIndex='-1'
          id='menu-item-2'
        >
          <ArchiveBoxIcon className='mr-2 size-4 text-white' />
          Archive
        </a>
        <div className='my-0.5 h-px bg-white/5' />
        <a
          href='#'
          className='group flex w-full items-center rounded-md px-2 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors'
          role='menuitem'
          tabIndex='-1'
        >
          <ShareIcon className='mr-2 size-4 text-white' />
          Share
        </a>
        <a
          href='#'
          className='group flex w-full items-center rounded-md px-2 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors'
          role='menuitem'
          tabIndex='-1'
        >
          <ArrowUturnRightIcon className='mr-2 size-4 text-white' />
          Move
        </a>
        <div className='my-0.5 h-px bg-white/5' />
        <a
          href='#'
          className='group flex w-full items-center rounded-md px-2 py-1.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors'
          role='menuitem'
          tabIndex='-1'
          id='menu-item-3'
        >
          <TrashIcon className='mr-2 size-4' />
          Delete
        </a>
      </div>
    </div>
  )
} 