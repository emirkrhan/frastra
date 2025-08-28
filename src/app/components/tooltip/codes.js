// 1. Tooltip Component
const tooltipComponentCode = `'use client'

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
            className={\`absolute z-50 whitespace-nowrap rounded-md bg-neutral-800 border border-white/10 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm \${placementClasses[placement]}\`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}`;

// 2. Usage Example
const tooltipUsageCode = `import { Tooltip } from '@/components/tooltip/Tooltip'
import Button from '@/components/button/Button'

export default function TooltipExample() {
  return (
    <Tooltip content="I'm a tooltip!" placement="top">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  )
}`;

// 3. Placement Examples
const placementExamplesCode = `import { Tooltip } from '@/components/tooltip/Tooltip'
import Button from '@/components/button/Button'

export default function PlacementExamples() {
  return (
    <div className='grid grid-cols-2 gap-8 place-items-center p-8'>
      <Tooltip content='Tooltip on top' placement='top'>
        <Button variant='primary'>Top</Button>
      </Tooltip>
      <Tooltip content='Tooltip on right' placement='right'>
        <Button variant='primary'>Right</Button>
      </Tooltip>
      <Tooltip content='Tooltip on left' placement='left'>
        <Button variant='primary'>Left</Button>
      </Tooltip>
      <Tooltip content='Tooltip on bottom' placement='bottom'>
        <Button variant='primary'>Bottom</Button>
      </Tooltip>
    </div>
  )
}`;

// 4. Combined exports
export const tooltipComponentTabs = [
  { label: "Component", code: tooltipComponentCode },
];

export const tooltipUsageTabs = [
  { label: "Usage", code: tooltipUsageCode },
];

export const placementExamplesTabs = [
  { label: "Examples", code: placementExamplesCode },
];

// Legacy exports for backward compatibility
export { tooltipComponentCode, tooltipUsageCode }; 