'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function SelectableTable({ data, onSelectionChange }) {
  const defaultData = [
    { 
      id: 1, 
      filename: 'project-proposal.pdf',
      type: 'PDF',
      size: '2.4 MB',
      modified: '2024-01-15'
    },
    { 
      id: 2, 
      filename: 'design-mockups.fig',
      type: 'Figma',
      size: '15.2 MB',
      modified: '2024-01-14'
    },
    { 
      id: 3, 
      filename: 'database-schema.sql',
      type: 'SQL',
      size: '45 KB',
      modified: '2024-01-13'
    },
    { 
      id: 4, 
      filename: 'user-research.docx',
      type: 'Word',
      size: '1.8 MB',
      modified: '2024-01-12'
    },
    { 
      id: 5, 
      filename: 'api-documentation.md',
      type: 'Markdown',
      size: '120 KB',
      modified: '2024-01-11'
    },
  ]

  const tableData = data || defaultData
  const [selectedItems, setSelectedItems] = useState([])

  const handleToggleItem = (itemId) => {
    const newSelection = selectedItems.includes(itemId)
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId]
    
    setSelectedItems(newSelection)
    onSelectionChange?.(newSelection)
  }

  const handleSelectAll = () => {
    const allIds = tableData.map(item => item.id)
    const newSelection = selectedItems.length === tableData.length ? [] : allIds
    setSelectedItems(newSelection)
    onSelectionChange?.(newSelection)
  }

  const isAllSelected = selectedItems.length === tableData.length
  const isIndeterminate = selectedItems.length > 0 && selectedItems.length < tableData.length

  return (
    <div className='w-full'>
      {selectedItems.length > 0 && (
        <div className='mb-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg'>
          <div className='flex items-center justify-between'>
            <span className='text-sm text-blue-400'>
              {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
            </span>
            <div className='flex gap-2'>
              <button className='text-xs text-blue-400 hover:text-blue-300 transition-colors'>
                Download
              </button>
              <button className='text-xs text-red-400 hover:text-red-300 transition-colors'>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className='overflow-hidden rounded-lg border border-white/10'>
        <table className='w-full'>
          <thead className='bg-white/5'>
            <tr>
              <th className='px-4 py-3 text-left'>
                <div className='flex items-center'>
                  <div 
                    onClick={handleSelectAll}
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
                      isAllSelected 
                        ? 'bg-blue-500 border-blue-500' 
                        : isIndeterminate
                        ? 'bg-blue-500/50 border-blue-500'
                        : 'border-white/30 hover:border-white/50'
                    }`}
                  >
                    {(isAllSelected || isIndeterminate) && (
                      <CheckIcon className='h-3 w-3 text-white' />
                    )}
                  </div>
                </div>
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
                File Name
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
                Type
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
                Size
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
                Modified
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-white/10'>
            {tableData.map((row) => {
              const isSelected = selectedItems.includes(row.id)
              
              return (
                <tr
                  key={row.id}
                  className={`transition-colors cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-500/10 hover:bg-blue-500/15' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => handleToggleItem(row.id)}
                >
                  <td className='px-4 py-3'>
                    <div 
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-blue-500 border-blue-500' 
                          : 'border-white/30'
                      }`}
                    >
                      {isSelected && (
                        <CheckIcon className='h-3 w-3 text-white' />
                      )}
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm text-white/90 font-medium'>
                    {row.filename}
                  </td>
                  <td className='px-4 py-3 text-sm text-white/70'>
                    {row.type}
                  </td>
                  <td className='px-4 py-3 text-sm text-white/70'>
                    {row.size}
                  </td>
                  <td className='px-4 py-3 text-sm text-white/70'>
                    {row.modified}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 