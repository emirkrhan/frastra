export function InlineCode({ children }) {
  return (
    <code className='bg-neutral-800 border border-white/10 px-1.5 py-0.5 rounded text-xs font-medium text-white'>
      {children}
    </code>
  )
} 