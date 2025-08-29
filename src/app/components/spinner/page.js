'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import { 
  spinnerTabsDefault,
  spinnerTabsSizes,
  spinnerTabsUsage,
  spinnerTabsWithLabel
} from './codes'
import Spinner from '@/components/spinner/Spinner'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'with-label', label: 'With Label' },
]

export default function SpinnerPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Spinner</h1>
          <p className='text-white/70'>
            Indicates the loading state of a component or page with various animations.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
           <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component</h2>
            <p className='text-white/70 text-sm'>
              Classic spinning circle loader with border animation.
            </p>
            <PreviewAndCode codeTabs={spinnerTabsUsage} preview={false}>
            </PreviewAndCode>
          </section>

          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <p className='text-white/70 text-sm'>
              Classic spinning circle loader with border animation.
            </p>
            <PreviewAndCode codeTabs={spinnerTabsDefault}>
              <Spinner />
            </PreviewAndCode>
          </section>

          <section id='sizes' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Sizes</h2>
            <p className='text-white/70 text-sm'>
              Different sizes of the spinner - small, medium, and large.
            </p>
            <PreviewAndCode codeTabs={spinnerTabsSizes}>
              <div className='flex items-center gap-6'>
                <Spinner size='size-6' />
                <Spinner size='size-8' />
                <Spinner size='size-10' />
              </div>
            </PreviewAndCode>
          </section>

          <section id='with-label' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Label</h2>
            <p className='text-white/70 text-sm'>
              Spinner combined with descriptive text for better user experience.
            </p>
            <PreviewAndCode codeTabs={spinnerTabsWithLabel}>
              <Spinner size='size-6' label='Loading...' />
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
