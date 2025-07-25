'use client'

import { usePathname } from 'next/navigation'

export default function GetStartedLayout({ children }) {
  const pathname = usePathname()
  const pageName = pathname.split('/').pop()

  return (
    <div className='p-8'>
      {children}
    </div>
  )
}
