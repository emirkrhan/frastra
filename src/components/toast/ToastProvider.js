'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toast } from './Toast'
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
} 