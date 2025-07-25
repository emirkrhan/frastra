'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import DefaultSpinner from '@/components/spinner/DefaultSpinner'
import SizedSpinners from '@/components/spinner/SizedSpinners'
import SpinnerWithLabel from '@/components/spinner/SpinnerWithLabel'
import DotsSpinner from '@/components/spinner/DotsSpinner'
import BarsSpinner from '@/components/spinner/BarsSpinner'
import PulseSpinner from '@/components/spinner/PulseSpinner'
import { 
  defaultSpinnerTabs,
  sizedSpinnersTabs,
  spinnerWithLabelTabs,
  dotsSpinnerTabs,
  barsSpinnerTabs,
  pulseSpinnerTabs
} from './codes'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'with-label', label: 'With Label' },
  { id: 'dots', label: 'Dots' },
  { id: 'bars', label: 'Bars' },
  { id: 'pulse', label: 'Pulse' },
]

export default function SpinnerPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Loader</h1>
          <p className='text-white/70'>
            Indicates the loading state of a component or page with various animations.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <p className='text-white/70 text-sm'>
              Classic spinning circle loader with border animation.
            </p>
            <PreviewAndCode codeTabs={defaultSpinnerTabs}>
              <DefaultSpinner />
            </PreviewAndCode>
          </section>

          <section id='sizes' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Sizes</h2>
            <p className='text-white/70 text-sm'>
              Different sizes of the default spinner - small, medium, and large.
            </p>
            <PreviewAndCode codeTabs={sizedSpinnersTabs}>
              <SizedSpinners />
            </PreviewAndCode>
          </section>

          <section id='with-label' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Label</h2>
            <p className='text-white/70 text-sm'>
              Spinner combined with descriptive text for better user experience.
            </p>
            <PreviewAndCode codeTabs={spinnerWithLabelTabs}>
              <SpinnerWithLabel />
            </PreviewAndCode>
          </section>

          <section id='dots' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Dots</h2>
            <p className='text-white/70 text-sm'>
              Three bouncing dots animation - perfect for chat interfaces and messaging.
            </p>
            <PreviewAndCode codeTabs={dotsSpinnerTabs}>
              <DotsSpinner />
            </PreviewAndCode>
          </section>

          <section id='bars' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Bars</h2>
            <p className='text-white/70 text-sm'>
              Equalizer-style bars animation - great for audio/media loading states.
            </p>
            <PreviewAndCode codeTabs={barsSpinnerTabs}>
              <BarsSpinner />
            </PreviewAndCode>
          </section>

          <section id='pulse' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Pulse</h2>
            <p className='text-white/70 text-sm'>
              Pulsing circles with ripple effect - ideal for search or sync operations.
            </p>
            <PreviewAndCode codeTabs={pulseSpinnerTabs}>
              <PulseSpinner />
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='loader' />
        <Footer />
      </main>
      <aside className='w-[280px] shrink-0'>
        <div className='sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar'>
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  )
} 