'use client'

import React, { useState } from 'react'
import { useToast } from '@/components/toast/ToastProvider'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

export default function DeleteProjectCard({ inline = false, projectName = 'Cosmo UI', minimal = false }) {
  const { addToast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      setIsDeleting(false)
      addToast('success', 'Project deleted', 'The project was removed successfully.', 3000)
    }, 700)
  }

  const containerClass = inline
    ? 'rounded-lg border border-white/10 bg-black/30 p-3'
    : 'rounded-xl border border-white/10 bg-white/5 px-4 py-3'

  if (minimal) {
    return (
      <div className={containerClass}>
        <div className='text-sm font-semibold text-white/90'>Delete project</div>
        <p className='mt-1 text-[12px] text-white/60'>This action cannot be undone. This will permanently delete the project and all of its data.</p>
      </div>
    )
  }

  return (
    <div className={containerClass}>
      <div className='flex items-start gap-3'>
        <div className='flex-shrink-0 rounded-md bg-red-500/15 border border-red-500/30 p-1.5'>
          <ExclamationTriangleIcon className='w-4 h-4 text-red-400' />
        </div>
        <div className='flex-1'>
          <div className='text-norm font-semibold text-white/90'>Delete project</div>
          <p className='mt-1 text-[12px] text-white/60'>This action cannot be undone. This will permanently delete the project and all of its data.</p>

          <div className='mt-3 flex items-center justify-end gap-2'>
            <button
              className='px-3 py-1.5 text-xs rounded-md border border-white/10 text-white/70 hover:bg-white/5'
              onClick={() => addToast('info', 'Cancelled', 'No changes were made.', 2500)}
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className='px-3 py-1.5 text-xs rounded-md border border-red-500/30 text-red-300 hover:bg-red-500/10'
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting…' : 'Delete project'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


