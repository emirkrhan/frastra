'use client'

export default function StatusTable({ data, columns }) {
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
    { 
      id: 2, 
      name: 'Website Redesign', 
      assignee: 'Jane Smith',
      avatar: 'JS',
      status: 'pending', 
      priority: 'medium',
      dueDate: '2024-01-20'
    },
    { 
      id: 3, 
      name: 'Mobile App', 
      assignee: 'Mike Johnson',
      avatar: 'MJ',
      status: 'completed', 
      priority: 'low',
      dueDate: '2024-01-10'
    },
    { 
      id: 4, 
      name: 'API Development', 
      assignee: 'Sarah Wilson',
      avatar: 'SW',
      status: 'inactive', 
      priority: 'high',
      dueDate: '2024-01-25'
    },
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
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${statusConfig[status]}`}>
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
      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${priorityConfig[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    )
  }

  const getAvatarColor = () => 'bg-neutral-800'

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
            <tr
              key={row.id}
              className='hover:bg-white/5 transition-colors'
            >
              <td className='px-4 py-3 text-sm text-white/90 font-medium'>
                {row.name}
              </td>
              <td className='px-4 py-3 text-sm text-white/90'>
                <div className='flex items-center gap-2'>
                  <div className={`w-6 h-6 rounded-full ${getAvatarColor()} border border-white/10 flex items-center justify-center`}>
                    <span className='text-xs font-semibold text-white'>{row.avatar}</span>
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
} 