'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function SelectableList({ items, onSelectionChange }) {
  const defaultItems = [
    { id: 1, title: 'Design System Update', description: 'Update button components and color palette' },
    { id: 2, title: 'API Integration', description: 'Connect frontend with new authentication API' },
    { id: 3, title: 'Performance Optimization', description: 'Optimize bundle size and loading times' },
    { id: 4, title: 'User Testing', description: 'Conduct usability tests for new dashboard' },
    { id: 5, title: 'Documentation', description: 'Update component documentation and examples' },
  ]

  const listItems = items || defaultItems
  const [selectedItems, setSelectedItems] = useState([])

  const handleToggleItem = (itemId) => {
    const newSelection = selectedItems.includes(itemId)
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId]
    
    setSelectedItems(newSelection)
    onSelectionChange?.(newSelection)
  }

  const handleSelectAll = () => {
    const allIds = listItems.map(item => item.id)
    const newSelection = selectedItems.length === listItems.length ? [] : allIds
    setSelectedItems(newSelection)
    onSelectionChange?.(newSelection)
  }

  return (
    <div className='w-full max-w-md'>
      <div className='flex items-center justify-between mb-3 px-3'>
        <span className='text-sm text-white/70'>
          {selectedItems.length} of {listItems.length} selected
        </span>
        <button
          onClick={handleSelectAll}
          className='text-xs text-blue-400 hover:text-blue-300 transition-colors'
        >
          {selectedItems.length === listItems.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      
      <ul className='space-y-1'>
        {listItems.map((item) => {
          const isSelected = selectedItems.includes(item.id)
          
          return (
            <li 
              key={item.id}
              onClick={() => handleToggleItem(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors cursor-pointer ${
                isSelected 
                  ? 'bg-blue-500/10 border border-blue-500/20' 
                  : 'hover:bg-white/5 border border-transparent'
              }`}
            >
              <div className='flex-shrink-0'>
                <div 
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    isSelected 
                      ? 'bg-blue-500 border-blue-500' 
                      : 'border-white/30 hover:border-white/50'
                  }`}
                >
                  {isSelected && (
                    <CheckIcon className='h-3 w-3 text-white' />
                  )}
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <p className={`text-sm font-medium truncate transition-colors ${
                  isSelected ? 'text-white' : 'text-white/90'
                }`}>
                  {item.title}
                </p>
                <p className='text-xs text-white/60 truncate'>
                  {item.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
} 