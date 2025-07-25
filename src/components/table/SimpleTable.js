'use client'

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
} 