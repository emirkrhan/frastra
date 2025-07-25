'use client'

export default function CheckboxWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <input
        id="terms"
        type='checkbox'
        className='size-4 rounded bg-neutral-800 border-white/20 text-white focus:ring-white/20'
      />
      <label htmlFor="terms" className="text-sm text-white/80">
        Accept terms and conditions
      </label>
    </div>
  )
} 