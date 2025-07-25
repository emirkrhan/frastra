// 1. Installation
const installationComponentCode = `npm install framer-motion uuid`;

// 2. Toast Component
const toastComponentCode = `'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const icons = {
  success: <CheckCircleIcon className='h-5 w-5 text-green-400' />,
  error: <XCircleIcon className='h-5 w-5 text-red-400' />,
  info: <InformationCircleIcon className='h-5 w-5 text-blue-400' />,
  warning: <ExclamationTriangleIcon className='h-5 w-5 text-yellow-400' />,
  default: null,
}

export function Toast({
  id,
  type,
  title,
  description,
  duration,
  onDismiss,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id)
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [id, duration, onDismiss])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className='pointer-events-auto w-auto max-w-sm rounded-lg bg-neutral-800 border border-white/10 shadow-lg backdrop-blur-sm'
    >
      <div className='flex items-start p-2.5'>
        {icons[type] && (
          <div className='flex-shrink-0 pt-0.5'>{icons[type]}</div>
        )}
        <div className={\`flex-1 \${icons[type] ? 'ml-2.5' : ''}\`}>
          <p className='text-sm font-medium text-white'>{title}</p>
          {description && (
            <p className='mt-0.5 text-xs text-white/70'>{description}</p>
          )}
        </div>
        <div className='ml-3 flex flex-shrink-0'>
          <button
            type='button'
            onClick={() => onDismiss(id)}
            className='inline-flex p-0.5 rounded text-white/40 hover:text-white/70 focus:outline-none transition-colors'
          >
            <span className='sr-only'>Close</span>
            <XMarkIcon className='h-4 w-4' />
          </button>
        </div>
      </div>
    </motion.div>
  )
}`;

// 3. Toast Provider Component
const providerComponentCode = `'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toast } from './Toast' // Adjust this path if needed
import { v4 as uuidv4 } from 'uuid'

const ToastContext = createContext(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(
    (type, title, description, duration = 4000) => {
      const id = uuidv4()
      setToasts((prevToasts) => [
        ...prevToasts,
        { id, type, title, description, duration },
      ])
    },
    [],
  )

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className='fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 pointer-events-none'>
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} onDismiss={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}`;

// 4. Layout Setup
const layoutSetupCode = `import { ToastProvider } from "@/components/toast/ToastProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={...}>
        <ToastProvider>
          {/* Your app components (Navbar, Sidebar, etc.) */}
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}`;

// 5. Usage Example
const usageExampleCode = `'use client'

import { useToast } from '@/components/toast/ToastProvider'

export default function MyComponent() {
  const { addToast } = useToast()

  const handleShowDefault = () =>
    addToast('default', 'Event has been created', 'Anyone with a link can view this event.')
  
  const handleShowSuccess = () =>
    addToast('success', 'Success!', 'Your changes have been saved successfully.')
  
  const handleShowError = () =>
    addToast('error', 'Error!', 'Could not save your changes. Please try again.')
  
  const handleShowInfo = () =>
    addToast('info', 'Update Available', 'A new version of the software is ready to be installed.')
  
  const handleShowWarning = () =>
    addToast('warning', 'Session Expiring', 'Your session will end in 5 minutes due to inactivity.')

  return (
    <div className='flex flex-wrap gap-3'>
      <button 
        onClick={handleShowDefault}
        className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-md hover:bg-neutral-600 transition-colors"
      >
        Default Toast
      </button>
      <button 
        onClick={handleShowSuccess}
        className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
      >
        Success Toast
      </button>
      <button 
        onClick={handleShowError}
        className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
      >
        Error Toast
      </button>
      <button 
        onClick={handleShowInfo}
        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
      >
        Info Toast
      </button>
      <button 
        onClick={handleShowWarning}
        className="px-4 py-2 bg-yellow-500 text-black text-sm rounded-md hover:bg-yellow-600 transition-colors"
      >
        Warning Toast
      </button>
    </div>
  )
}`;

// 6. Custom Duration Example
const customDurationCode = `'use client'

import { useToast } from '@/components/toast/ToastProvider'

export default function CustomDurationExample() {
  const { addToast } = useToast()

  const handleQuickToast = () =>
    addToast('success', 'Quick Message', 'This disappears quickly!', 2000)
  
  const handleLongToast = () =>
    addToast('info', 'Important Notice', 'This message will stay visible for 10 seconds. Please read carefully.', 10000)

  return (
    <div className='flex gap-3'>
      <button 
        onClick={handleQuickToast}
        className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
      >
        Quick Toast
      </button>
      <button 
        onClick={handleLongToast}
        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
      >
        Long Toast
      </button>
    </div>
  )
}`;

// 7. Combined exports
export const installationTabs = [
  { label: "Command", code: installationComponentCode },
];

export const toastComponentTabs = [
  { label: "Component", code: toastComponentCode },
];

export const providerComponentTabs = [
  { label: "Component", code: providerComponentCode },
];

export const layoutSetupTabs = [
  { label: "Layout", code: layoutSetupCode },
];

export const usageExampleTabs = [
  { label: "Usage", code: usageExampleCode },
];

export const customDurationTabs = [
  { label: "Custom Duration", code: customDurationCode },
];

// Legacy exports for backward compatibility
export const installationCode = installationComponentCode;
export { toastComponentCode, providerComponentCode, layoutSetupCode }; 