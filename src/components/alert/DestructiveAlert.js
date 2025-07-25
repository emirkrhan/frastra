'use client'

export default function DestructiveAlert() {
  return (
    <div className="flex w-full max-w-lg gap-3 rounded-md border border-red-500/50 bg-red-950/30 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5 flex-shrink-0 text-red-400"
      >
        <path
          fillRule="evenodd"
          d="M10.868 2.884c.321-.576.94-1.025 1.632-1.025h.001c.691 0 1.31.449 1.632 1.025l6.7 12.061c.321.576.321 1.282 0 1.858a1.86 1.86 0 0 1-1.632 1.025H3.132c-.691 0-1.31-.449-1.632-1.025a1.86 1.86 0 0 1 0-1.858l6.7-12.061Zm-1.632 13.061a1 1 0 0 1 1-1h.001a1 1 0 0 1 1 1v.001a1 1 0 0 1-1 1h-.001a1 1 0 0 1-1-1v-.001ZM10 6a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1Z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex-grow">
        <h5 className="font-bold text-red-300">Error</h5>
        <p className="text-sm text-red-400/80">Your session has expired. Please log in again.</p>
      </div>
    </div>
  )
}
