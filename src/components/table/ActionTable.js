'use client'

import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline'

export default function ActionTable({ data, onEdit, onDelete, onView }) {
  const defaultData = [
    { 
      id: 1, 
      title: 'User Management System',
      type: 'Web App',
      lastUpdated: '2 hours ago',
      size: '2.4 MB'
    },
    { 
      id: 2, 
      title: 'E-commerce Platform',
      type: 'Full Stack',
      lastUpdated: '1 day ago',
      size: '5.1 MB'
    },
    { 
      id: 3, 
      title: 'Mobile Banking App',
      type: 'Mobile',
      lastUpdated: '3 days ago',
      size: '8.3 MB'
    },
    { 
      id: 4, 
      title: 'Dashboard Analytics',
      type: 'Web App',
      lastUpdated: '1 week ago',
      size: '1.8 MB'
    },
  ]

  const tableData = data || defaultData

  const handleEdit = (item) => {
    onEdit?.(item)
    console.log('Edit:', item.title)
  }

  const handleDelete = (item) => {
    onDelete?.(item)
    console.log('Delete:', item.title)
  }

  const handleView = (item) => {
    onView?.(item)
    console.log('View:', item.title)
  }

  return (
    <div className='w-full overflow-hidden rounded-lg border border-white/10'>
      <table className='w-full'>
        <thead className='bg-white/5'>
          <tr>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Project
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Type
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Last Updated
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Size
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-white/10'>
          {tableData.map((row) => (
            <tr
              key={row.id}
              className='hover:bg-white/5 transition-colors'
            >
              <td className='px-4 py-3 text-sm text-white/90 font-medium'>
                {row.title}
              </td>
              <td className='px-4 py-3 text-sm text-white/70'>
                {row.type}
              </td>
              <td className='px-4 py-3 text-sm text-white/70'>
                {row.lastUpdated}
              </td>
              <td className='px-4 py-3 text-sm text-white/70'>
                {row.size}
              </td>
              <td className='px-4 py-3 text-sm'>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => handleView(row)}
                    className='p-1 text-white/50 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors'
                    title='View'
                  >
                    <EyeIcon className='h-4 w-4' />
                  </button>
                  <button
                    onClick={() => handleEdit(row)}
                    className='p-1 text-white/50 hover:text-yellow-400 hover:bg-yellow-500/10 rounded transition-colors'
                    title='Edit'
                  >
                    <PencilIcon className='h-4 w-4' />
                  </button>
                  <button
                    onClick={() => handleDelete(row)}
                    className='p-1 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors'
                    title='Delete'
                  >
                    <TrashIcon className='h-4 w-4' />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 