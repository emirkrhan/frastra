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
      active: 'bg-success/20 text-success border-success/30',
      pending: 'bg-info/20 text-info border-info/30',
      completed: 'bg-info/20 text-info border-info/30',
      inactive: 'bg-tertiary/50 text-descriptive border-tertiary'
    }
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${statusConfig[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: 'bg-danger/20 text-danger',
      medium: 'bg-info/20 text-info',
      low: 'bg-success/20 text-success'
    }
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${priorityConfig[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    )
  }

  const getAvatarColor = () => 'bg-tertiary'

  return (
    <div className='w-full overflow-hidden rounded-lg border border-border'>
      <table className='w-full'>
        <thead className='bg-secondary'>
          <tr>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Project
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Assignee
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Status
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Priority
            </th>
            <th className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'>
              Due Date
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
                {row.name}
              </td>
              <td className='px-4 py-3 text-paragraph-size text-paragraph'>
                <div className='flex items-center gap-2'>
                  <div className={`w-6 h-6 rounded-full ${getAvatarColor()} border border-border flex items-center justify-center`}>
                    <span className='text-tips-size font-tips text-paragraph'>{row.avatar}</span>
                  </div>
                  {row.assignee}
                </div>
              </td>
              <td className='px-4 py-3 text-paragraph-size'>
                {getStatusBadge(row.status)}
              </td>
              <td className='px-4 py-3 text-paragraph-size'>
                {getPriorityBadge(row.priority)}
              </td>
              <td className='px-4 py-3 text-paragraph-size text-descriptive'>
                {row.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 