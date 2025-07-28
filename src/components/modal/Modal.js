'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('Pedro Duarte')
  const [username, setUsername] = useState('@peduarte')

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='h-8 px-4 text-xs flex items-center justify-center
        gap-2 bg-white text-black hover:bg-gray-200 cursor-pointer
        rounded-md transition'
      >
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
            onClick={handleBackdropClick}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className='relative w-full max-w-md bg-neutral-900 border border-white/10 text-white rounded-xl shadow-xl p-6 space-y-4'
            >
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer'
            >
              <XMarkIcon className='size-4' />
            </button>

            {/* Başlık ve açıklama */}
            <h2 className='text-lg font-semibold mb-1'>Edit profile</h2>
            <p className='text-sm text-white/70'>
              Make changes to your profile here. Click save when you&apos;re done.
            </p>

            {/* Name input */}
            <div className='flex flex-col gap-1'>
              <label htmlFor='name' className='text-sm text-white/80'>
                Name
              </label>
              <input
                id='name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full px-3 py-2 rounded-md bg-neutral-800 border border-white/10 text-sm text-white placeholder-neutral-400 focus:outline-none hover:border-white/20 focus:border-white/30 transition-all duration-150'
              />
            </div>

            {/* Username input */}
            <div className='flex flex-col gap-1'>
              <label htmlFor='username' className='text-sm text-white/80'>
                Username
              </label>
              <input
                id='username'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-full px-3 py-2 rounded-md bg-neutral-800 border border-white/10 text-sm text-white placeholder-neutral-400 focus:outline-none hover:border-white/20 focus:border-white/30 transition-all duration-150'
              />
            </div>

            {/* Butonlar */}
            <div className='flex justify-end gap-2 pt-2'>
              <button
                onClick={() => setIsOpen(false)}
                className='px-4 py-2 text-sm text-white/70 hover:text-white transition cursor-pointer'
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className='bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition cursor-pointer'
              >
                Save changes
              </button>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
