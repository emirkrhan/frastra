'use client'

export default function CheckboxWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <input
        id="terms"
        type='checkbox'
        className='size-4 rounded bg-secondary border-border text-white focus:ring-white/20'
      />
      <label htmlFor="terms" className="text-paragraph-size text-paragraph">
        Accept terms and conditions
      </label>
    </div>
  )
} 