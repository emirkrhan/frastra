'use client'

export default function DefaultAlert() {
  return (
    <div className="flex w-full max-w-lg gap-3 rounded-md border border-white/10 bg-neutral-800 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5 flex-shrink-0 text-white"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2V9a1 1 0 0 0-1-1H9Z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex-grow">
        <h5 className="font-bold text-white">Heads up!</h5>
        <p className="text-sm text-white/70">You can add components to your app using the CLI.</p>
      </div>
    </div>
  )
}
