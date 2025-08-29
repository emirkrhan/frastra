'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const placementClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
  left: 'right-full top-1/2 -translate-y-1/2 mr-3',
  right: 'left-full top-1/2 -translate-y-1/2 ml-3',
}

export function Tooltip({ children, content, placement = 'top' }) {
  const [isOpen, setIsOpen] = useState(false)

  const showTooltip = () => setIsOpen(true)
  const hideTooltip = () => setIsOpen(false)

  return (
    <div
      className='relative inline-block'
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={0}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: placement === 'top' ? 5 : placement === 'bottom' ? -5 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute z-50 whitespace-nowrap rounded-md bg-tertiary border border-border px-2.5 py-1.5 text-tips-size font-tips text-paragraph shadow-lg backdrop-blur-sm ${placementClasses[placement]}`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 