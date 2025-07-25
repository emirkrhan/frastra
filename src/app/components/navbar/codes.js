export const defaultNavbarTabs = [
  {
    label: 'Component',
    code: `'use client'

import { useState } from 'react'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { href: '#', label: 'Features' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
]

export default function DefaultNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    // In a real app, you'd also toggle a class on the \`html\` or \`body\` tag.
  }

  return (
    <nav className='w-full bg-neutral-900/50 border border-white/10 backdrop-blur-sm rounded-xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <svg className='h-8 w-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z' />
              </svg>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className='text-neutral-300 hover:bg-neutral-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer'
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors cursor-pointer'
              aria-label='Toggle theme'
            >
              {isDarkMode ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
            </button>
            <button className='bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer'>
              Get Started
            </button>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none transition-colors cursor-pointer'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-neutral-300 hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer'
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className='pt-4 pb-3 border-t border-neutral-700'>
             <div className='flex items-center justify-between px-4'>
                <button
                onClick={toggleTheme}
                className='p-2 rounded-full text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors cursor-pointer'
                aria-label='Toggle theme'
                >
                {isDarkMode ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
                </button>
                <button className='bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer'>
                    Get Started
                </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  )
}`
  }
] 