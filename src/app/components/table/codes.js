const simpleTableComponentCode = `'use client'

export default function SimpleTable({ data, columns }) {
  const defaultData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Developer' },
  ]

  const defaultColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ]

  const tableData = data || defaultData
  const tableColumns = columns || defaultColumns

  return (
    <div className='w-full overflow-hidden rounded-lg border border-white/10'>
      <table className='w-full'>
        <thead className='bg-white/5'>
          <tr>
            {tableColumns.map((column) => (
              <th
                key={column.key}
                className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-white/10'>
          {tableData.map((row, index) => (
            <tr
              key={row.id || index}
              className='hover:bg-white/5 transition-colors'
            >
              {tableColumns.map((column) => (
                <td
                  key={column.key}
                  className='px-4 py-3 text-sm text-white/90'
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`

const statusTableComponentCode = `'use client'

export default function StatusTable({ data }) {
  const defaultData = [
    { 
      id: 1, 
      name: 'Project Alpha', 
      assignee: 'John Doe',
      avatar: 'JD',
      status: 'active', 
      priority: 'high',
      dueDate: '2024-01-15'
    },
    // ... more data
  ]

  const tableData = data || defaultData

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      inactive: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
    
    return (
      <span className={\`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border \${statusConfig[status]}\`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: 'bg-red-500/20 text-red-400',
      medium: 'bg-orange-500/20 text-orange-400',
      low: 'bg-green-500/20 text-green-400'
    }
    
    return (
      <span className={\`inline-flex items-center px-2 py-1 rounded text-xs font-medium \${priorityConfig[priority]}\`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    )
  }

  const getAvatarColor = (name) => {
    const colors = [
      'from-blue-400 to-purple-500',
      'from-green-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-yellow-400 to-orange-500'
    ]
    return colors[name.length % colors.length]
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
              Assignee
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Status
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Priority
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider'>
              Due Date
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-white/10'>
          {tableData.map((row) => (
            <tr key={row.id} className='hover:bg-white/5 transition-colors'>
              <td className='px-4 py-3 text-sm text-white/90 font-medium'>
                {row.name}
              </td>
              <td className='px-4 py-3 text-sm text-white/90'>
                <div className='flex items-center gap-2'>
                  <div className={\`w-6 h-6 rounded-full bg-gradient-to-br \${getAvatarColor(row.assignee)} flex items-center justify-center\`}>
                    <span className='text-xs font-semibold text-white'>
                      {row.avatar}
                    </span>
                  </div>
                  {row.assignee}
                </div>
              </td>
              <td className='px-4 py-3 text-sm'>
                {getStatusBadge(row.status)}
              </td>
              <td className='px-4 py-3 text-sm'>
                {getPriorityBadge(row.priority)}
              </td>
              <td className='px-4 py-3 text-sm text-white/70'>
                {row.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`

const actionTableComponentCode = `'use client'

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
    // ... more data
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
            <tr key={row.id} className='hover:bg-white/5 transition-colors'>
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
}`

const selectableTableComponentCode = `'use client'

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
    // ... more data
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
                    className={\`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-colors \${
                      isAllSelected 
                        ? 'bg-blue-500 border-blue-500' 
                        : isIndeterminate
                        ? 'bg-blue-500/50 border-blue-500'
                        : 'border-white/30 hover:border-white/50'
                    }\`}
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
              {/* ... other headers */}
            </tr>
          </thead>
          <tbody className='divide-y divide-white/10'>
            {tableData.map((row) => {
              const isSelected = selectedItems.includes(row.id)
              
              return (
                <tr
                  key={row.id}
                  className={\`transition-colors cursor-pointer \${
                    isSelected 
                      ? 'bg-blue-500/10 hover:bg-blue-500/15' 
                      : 'hover:bg-white/5'
                  }\`}
                  onClick={() => handleToggleItem(row.id)}
                >
                  <td className='px-4 py-3'>
                    <div 
                      className={\`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors \${
                        isSelected 
                          ? 'bg-blue-500 border-blue-500' 
                          : 'border-white/30'
                      }\`}
                    >
                      {isSelected && (
                        <CheckIcon className='h-3 w-3 text-white' />
                      )}
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm text-white/90 font-medium'>
                    {row.filename}
                  </td>
                  {/* ... other cells */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}`

// Tabs
export const simpleTableTabs = [
  {
    label: 'Component',
    code: simpleTableComponentCode,
  },
]

export const statusTableTabs = [
  {
    label: 'Component',
    code: statusTableComponentCode,
  },
]

export const actionTableTabs = [
  {
    label: 'Component',
    code: actionTableComponentCode,
  },
]

export const selectableTableTabs = [
  {
    label: 'Component',
    code: selectableTableComponentCode,
  },
] 