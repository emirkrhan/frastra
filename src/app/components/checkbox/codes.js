export const defaultCheckboxTabs = [
  {
    label: 'Component',
    code: `<input
  type='checkbox'
  className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20'
/>`
  }
]

export const checkboxWithLabelTabs = [
  {
    label: 'Component',
    code: `<div className="flex items-center gap-2">
  <input
    id="terms"
    type='checkbox'
    className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20'
  />
  <label htmlFor="terms" className="text-sm text-white/80">
    Accept terms and conditions
  </label>
</div>`
  }
]

export const disabledCheckboxTabs = [
  {
    label: 'Component',
    code: `<div className="flex items-center gap-4">
  <input
    disabled
    id="disabled-unchecked"
    type='checkbox'
    className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed'
  />
  <input
    disabled
    id="disabled-checked"
    type='checkbox'
    defaultChecked
    className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed'
  />
</div>`
  }
]

export const indeterminateCheckboxTabs = [
  {
    label: 'Component',
    code: `'use client'

import { useState } from 'react'

export default function IndeterminateCheckbox() {
  const [checkedItems, setCheckedItems] = useState([true, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          id='parent'
          checked={allChecked}
          ref={(el) => el && (el.indeterminate = isIndeterminate)}
          onChange={(e) => setCheckedItems(Array(2).fill(e.target.checked))}
          className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20'
        />
        <label htmlFor='parent'>Select All</label>
      </div>
      <div className='flex flex-col gap-1 ml-6'>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='child1'
            checked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
            className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20'
          />
          <label htmlFor='child1'>Option 1</label>
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='child2'
            checked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
            className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20'
          />
          <label htmlFor='child2'>Option 2</label>
        </div>
      </div>
    </div>
  )
}`
  }
] 