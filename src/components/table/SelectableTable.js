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
        <div className='mb-3 px-4 py-2 bg-info/10 border border-info/20 rounded-lg'>
          <div className='flex items-center justify-between'>
            <span className='text-paragraph-size text-info'>
              {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
            </span>
            <div className='flex gap-2'>
              <button className='text-tips-size text-info hover:text-info/80 transition-colors'>
                Download
              </button>
              <button className='text-tips-size text-danger hover:text-danger/80 transition-colors'>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className='overflow-hidden rounded-lg border border-border'>
        <table className='w-full'>
          <thead className='bg-secondary'>
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
              <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
                File Name
              </th>
              <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
                Type
              </th>
              <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
                Size
              </th>
              <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
                Modified
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-border'>
            {tableData.map((row) => {
              const isSelected = selectedItems.includes(row.id)
              
              return (
                <tr
                  key={row.id}
                  className={`transition-colors cursor-pointer ${
                    isSelected 
                      ? 'bg-info/10 hover:bg-info/15' 
                      : 'hover:bg-secondary'
                  }`}
                  onClick={() => handleToggleItem(row.id)}
                >
                  <td className='px-4 py-3'>
                    <div 
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-info border-info' 
                          : 'border-border'
                      }`}
                    >
                      {isSelected && (
                        <CheckIcon className='h-3 w-3 text-white' />
                      )}
                    </div>
                  </td>
                  <td className='px-4 py-3 text-paragraph-size text-paragraph font-paragraph'>
                    {row.filename}
                  </td>
                  <td className='px-4 py-3 text-paragraph-size text-descriptive'>
                    {row.type}
                  </td>
                  <td className='px-4 py-3 text-paragraph-size text-descriptive'>
                    {row.size}
                  </td>
                  <td className='px-4 py-3 text-paragraph-size text-descriptive'>
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