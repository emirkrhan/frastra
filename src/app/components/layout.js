'use client'

import { usePathname } from 'next/navigation'

export default function ComponentLayout({ children }) {
  const pathname = usePathname()
  const componentName = pathname.split('/').pop()

  return (
    <div className='p-8'>
      {children}
    </div>
  )
} 