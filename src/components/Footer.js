'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-20 py-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between text-sm text-white/40'>
          <div>
            © 2025 Frastra UI. Released under the MIT License.
          </div>
          <div>
            Designed and developed by{' '}
            <Link
              href='https://github.com/emirkrhan'
              target='_blank'
              className='text-white/60 hover:text-white transition-colors underline'
            >
              emirkrhan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 