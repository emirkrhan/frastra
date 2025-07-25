'use client'

import { useState } from 'react'
import { Select } from './Select'

export function DefaultSelect() {
  const [selectedValue, setSelectedValue] = useState(null)

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
  ]

  return (
    <Select
      options={options}
      placeholder="Choose a framework..."
      value={selectedValue}
      onChange={setSelectedValue}
    />
  )
} 