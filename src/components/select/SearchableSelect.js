'use client'

import { useState } from 'react'
import { Select } from './Select'

export function SearchableSelect() {
  const [selectedValue, setSelectedValue] = useState(null)

  const options = [
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'albania', label: 'Albania' },
    { value: 'algeria', label: 'Algeria' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'armenia', label: 'Armenia' },
    { value: 'australia', label: 'Australia' },
    { value: 'austria', label: 'Austria' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'canada', label: 'Canada' },
    { value: 'china', label: 'China' },
    { value: 'france', label: 'France' },
    { value: 'germany', label: 'Germany' },
    { value: 'india', label: 'India' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'italy', label: 'Italy' },
    { value: 'japan', label: 'Japan' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'netherlands', label: 'Netherlands' },
    { value: 'russia', label: 'Russia' },
    { value: 'spain', label: 'Spain' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'ukraine', label: 'Ukraine' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'united-states', label: 'United States' },
  ]

  return (
    <Select
      options={options}
      placeholder="Search for a country..."
      value={selectedValue}
      onChange={setSelectedValue}
      searchable={true}
    />
  )
} 