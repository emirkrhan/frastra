'use client'

export default function DisabledCheckbox() {
  return (
    <div className="flex items-center gap-4">
      <input
        disabled
        id="disabled-unchecked"
        type='checkbox'
        className='size-4 rounded bg-secondary border-border text-white focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed'
      />
      <input
        disabled
        id="disabled-checked"
        type='checkbox'
        defaultChecked
        className='size-4 rounded bg-secondary border-border text-white focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed'
      />
    </div>
  )
} 