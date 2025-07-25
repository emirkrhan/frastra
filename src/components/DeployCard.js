import Link from 'next/link'

export default function DeployCard() {
  return (
    <div className='mt-8 p-4 bg-neutral-800 border border-white/10 rounded-lg space-y-3'>
      <div className='flex items-center justify-between'>
        <h4 className='font-medium text-white text-sm'>Open Source</h4>
        <span className='text-xs text-white/50'>MIT License</span>
      </div>
      
      <p className='text-xs text-white/60 leading-relaxed'>
        Frastra is open source. View the code, report issues, or contribute to make it better.
      </p>

      <p className='text-xs text-white/50 leading-relaxed'>
        Licensed under MIT - free to use in personal and commercial projects. No attribution required.
      </p>

      {/* Buttons */}
      <div className='flex gap-2'>
        <Link href='https://github.com/username/frastra' target='_blank' rel='noopener noreferrer' className='flex-1'>
          <button className='w-full bg-white text-black px-4 py-2 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white'>
            View Code
          </button>
        </Link>
        <Link href='https://github.com/username/frastra' target='_blank' rel='noopener noreferrer' className='flex-1'>
          <button className='w-full bg-neutral-700 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white border border-white/10'>
            Star
          </button>
        </Link>
      </div>

      {/* Footer info */}
      <div className='pt-1 text-xs text-white/40'>
        Last updated 2 days ago
      </div>
    </div>
  )
} 