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
    <div className='w-full overflow-hidden rounded-lg border border-border'>
      <table className='w-full'>
        <thead className='bg-secondary'>
          <tr>
            {tableColumns.map((column) => (
              <th
                key={column.key}
                className='px-4 py-3 text-left text-tips-size font-tips text-descriptive uppercase tracking-wider'
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-border'>
          {tableData.map((row, index) => (
            <tr
              key={row.id || index}
              className='hover:bg-secondary transition-colors'
            >
              {tableColumns.map((column) => (
                <td
                  key={column.key}
                  className='px-4 py-3 text-paragraph-size text-paragraph'
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