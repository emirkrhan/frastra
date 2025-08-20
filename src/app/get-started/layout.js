'use client'

import Sidebar from "@/components/Sidebar"

export default function GetStartedLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className='ml-64 p-8'>
        {children}
      </div>
    </>
  )
}
