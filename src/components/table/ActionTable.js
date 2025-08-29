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
    <div className='w-full overflow-hidden rounded-lg border border-border'>
      <table className='w-full'>
        <thead className='bg-secondary'>
          <tr>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Project
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Type
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Last Updated
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Size
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-border'>
          {tableData.map((row) => (
            <tr
              key={row.id}
              className='hover:bg-secondary transition-colors'
            >
              <td className='px-4 py-3 text-paragraph-size text-paragraph font-paragraph'>
                {row.title}
              </td>
              <td className='px-4 py-3 text-paragraph-size text-descriptive'>
                {row.type}
              </td>
              <td className='px-4 py-3 text-paragraph-size text-descriptive'>
                {row.lastUpdated}
              </td>
              <td className='px-4 py-3 text-paragraph-size text-descriptive'>
                {row.size}
              </td>
              <td className='px-4 py-3 text-paragraph-size'>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => handleView(row)}
                    className='p-1 text-descriptive hover:text-info hover:bg-info/10 rounded transition-colors'
                    title='View'
                  >
                    <EyeIcon className='h-4 w-4' />
                  </button>
                  <button
                    onClick={() => handleEdit(row)}
                    className='p-1 text-descriptive hover:text-info hover:bg-info/10 rounded transition-colors'
                    title='Edit'
                  >
                    <PencilIcon className='h-4 w-4' />
                  </button>
                  <button
                    onClick={() => handleDelete(row)}
                    className='p-1 text-descriptive hover:text-danger hover:bg-danger/10 rounded transition-colors'
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