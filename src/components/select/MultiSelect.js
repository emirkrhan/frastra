'use client'

import { useState } from 'react'
import { Select } from './Select'

export function MultiSelect() {
  const [selectedValues, setSelectedValues] = useState([])

  const options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'go', label: 'Go' },
  ]

  return (
    <Select
      options={options}
      placeholder="Select programming languages..."
      value={selectedValues}
      onChange={setSelectedValues}
      multiple={true}
    />
  )
} 