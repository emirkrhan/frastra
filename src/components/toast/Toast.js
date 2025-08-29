'use client'

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
  success: <CheckCircleIcon className='h-5 w-5 text-success' />,
  error: <XCircleIcon className='h-5 w-5 text-danger' />,
  info: <InformationCircleIcon className='h-5 w-5 text-info' />,
  warning: <ExclamationTriangleIcon className='h-5 w-5 text-warning' />,
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
      className='pointer-events-auto w-auto max-w-sm rounded-lg bg-tertiary border border-border shadow-lg backdrop-blur-sm'
    >
      <div className='flex items-start p-2.5'>
        {icons[type] && (
          <div className='flex-shrink-0 pt-0.5'>{icons[type]}</div>
        )}
        <div className={`flex-1 ${icons[type] ? 'ml-2.5' : ''}`}>
          <p className='text-paragraph-size font-paragraph text-paragraph'>{title}</p>
          {description && (
            <p className='mt-0.5 text-tips-size text-descriptive'>{description}</p>
          )}
        </div>
        <div className='ml-3 flex flex-shrink-0'>
          <button
            type='button'
            onClick={() => onDismiss(id)}
            className='inline-flex p-0.5 rounded text-descriptive hover:text-paragraph focus:outline-none transition-colors'
          >
            <span className='sr-only'>Close</span>
            <XMarkIcon className='h-4 w-4' />
          </button>
        </div>
      </div>
    </motion.div>
  )
} 