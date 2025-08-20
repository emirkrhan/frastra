'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export function DefaultAccordion({ items = [], allowMultiple = true }) {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      const isOpen = newSet.has(index)

      if (allowMultiple) {
        isOpen ? newSet.delete(index) : newSet.add(index)
      } else {
        newSet.clear()
        if (!isOpen) newSet.add(index)
      }

      return newSet
    })
  }

  return (
    <div className='w-full'>
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const contentId = `accordion-content-${index}`
        const buttonId = `accordion-button-${index}`

        return (
          <div key={index} className='border-b border-border last:border-b-0'>
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
              className='w-full flex items-center justify-between py-4 text-left'
            >
              <span className='text-paragraph-size font-paragraph text-paragraph'>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className='w-4 h-4 text-descriptive' />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='overflow-hidden'
                >
                  <div className='pb-4'>
                    <p className='text-descriptive-size font-descriptive text-descriptive'>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
