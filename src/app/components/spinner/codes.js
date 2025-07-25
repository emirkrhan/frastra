// Default Spinner Component
const defaultSpinnerComponentCode = `'use client'

export default function DefaultSpinner() {
  return (
    <div
      className='size-8 animate-spin rounded-full border-2 border-white/20 border-t-white'
      role='status'
      aria-live='polite'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}`

// Sized Spinners Component
const sizedSpinnersComponentCode = `'use client'

function Spinner({ size }) {
  return (
    <div
      className={\`\${size} animate-spin rounded-full border-2 border-white/20 border-t-white\`}
      role='status'
      aria-live='polite'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default function SizedSpinners() {
  return (
    <div className='flex items-center gap-6'>
      <Spinner size='size-6' />
      <Spinner size='size-8' />
      <Spinner size='size-10' />
    </div>
  )
}`

// Spinner With Label Component
const spinnerWithLabelComponentCode = `'use client'

export default function SpinnerWithLabel() {
  return (
    <div className='flex items-center gap-3'>
       <div
        className='size-6 animate-spin rounded-full border-2 border-white/20 border-t-white'
        role='status'
        aria-live='polite'
      >
        <span className='sr-only'>Loading...</span>
      </div>
      <span className='text-sm font-medium text-white/80'>Loading...</span>
    </div>
  )
}`

// Dots Spinner Component
const dotsSpinnerComponentCode = `'use client'

export default function DotsSpinner() {
  return (
    <div className='flex items-center gap-1' role='status' aria-live='polite'>
      <div className='size-2 bg-white/70 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='size-2 bg-white/70 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='size-2 bg-white/70 rounded-full animate-bounce'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}`

// Bars Spinner Component
const barsSpinnerComponentCode = `'use client'

export default function BarsSpinner() {
  return (
    <div className='flex items-end gap-1 h-6' role='status' aria-live='polite'>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.4s] h-2'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.2s] h-4'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse h-6'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.2s] h-4'></div>
      <div className='w-1 bg-white/70 rounded-sm animate-pulse [animation-delay:-0.4s] h-2'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}`

// Pulse Spinner Component
const pulseSpinnerComponentCode = `'use client'

export default function PulseSpinner() {
  return (
    <div className='relative flex items-center justify-center' role='status' aria-live='polite'>
      <div className='size-8 rounded-full bg-white/20 animate-ping absolute'></div>
      <div className='size-6 rounded-full bg-white/40 animate-pulse'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}`

// Usage Examples
const defaultSpinnerUsage = `'use client'

import DefaultSpinner from '@/components/spinner/DefaultSpinner'

export default function MyComponent() {
  return <DefaultSpinner />
}`

const sizedSpinnersUsage = `'use client'

import SizedSpinners from '@/components/spinner/SizedSpinners'

export default function MyComponent() {
  return <SizedSpinners />
}`

const spinnerWithLabelUsage = `'use client'

import SpinnerWithLabel from '@/components/spinner/SpinnerWithLabel'

export default function MyComponent() {
  return <SpinnerWithLabel />
}`

const dotsSpinnerUsage = `'use client'

import DotsSpinner from '@/components/spinner/DotsSpinner'

export default function MyComponent() {
  return <DotsSpinner />
}`

const barsSpinnerUsage = `'use client'

import BarsSpinner from '@/components/spinner/BarsSpinner'

export default function MyComponent() {
  return <BarsSpinner />
}`

const pulseSpinnerUsage = `'use client'

import PulseSpinner from '@/components/spinner/PulseSpinner'

export default function MyComponent() {
  return <PulseSpinner />
}`

// Export Tab Arrays
export const defaultSpinnerTabs = [
  { label: "Component", code: defaultSpinnerComponentCode },
  { label: "Usage", code: defaultSpinnerUsage }
]

export const sizedSpinnersTabs = [
  { label: "Component", code: sizedSpinnersComponentCode },
  { label: "Usage", code: sizedSpinnersUsage }
]

export const spinnerWithLabelTabs = [
  { label: "Component", code: spinnerWithLabelComponentCode },
  { label: "Usage", code: spinnerWithLabelUsage }
]

export const dotsSpinnerTabs = [
  { label: "Component", code: dotsSpinnerComponentCode },
  { label: "Usage", code: dotsSpinnerUsage }
]

export const barsSpinnerTabs = [
  { label: "Component", code: barsSpinnerComponentCode },
  { label: "Usage", code: barsSpinnerUsage }
]

export const pulseSpinnerTabs = [
  { label: "Component", code: pulseSpinnerComponentCode },
  { label: "Usage", code: pulseSpinnerUsage }
] 