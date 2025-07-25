'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import ComponentFooter from '@/components/ComponentFooter'
import TableOfContents from '@/components/TableOfContents'
import Footer from '@/components/Footer'
import { Tooltip } from '@/components/tooltip/Tooltip'
import PrimaryButton from '@/components/button/PrimaryButton'
import { 
  tooltipComponentTabs, 
  tooltipUsageTabs, 
  placementExamplesTabs 
} from './codes'

const headings = [
  { id: 'component', label: 'Component Code' },
  { id: 'usage', label: 'Usage Example' },
  { id: 'examples', label: 'Placement Examples' },
]

export default function TooltipPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Tooltip</h1>
          <p className='text-white/70'>
            A popup that displays information related to an element when the
            element receives keyboard focus or the mouse hovers over it.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='component' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component Code</h2>
            <p className='text-white/70 text-sm'>
              The Tooltip component is self-contained and uses only Framer
              Motion for animations. No external libraries are needed. Simply
              copy the component code below into your project.
            </p>
            <PreviewAndCode preview={false} codeTabs={tooltipComponentTabs} />
          </section>

          <section id='usage' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Usage Example</h2>
            <p className='text-white/70 text-sm'>
              Wrap any element with the Tooltip component and provide content via the content prop.
            </p>
            <PreviewAndCode preview={false} codeTabs={tooltipUsageTabs} />
          </section>

          <section id='examples' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Placement Examples</h2>
            <p className='text-white/70 text-sm'>
              You can control the position of the tooltip using the{' '}
              <code className='text-sm font-medium text-white/80 bg-white/10 px-1 py-0.5 rounded'>placement</code> prop.
            </p>
            <PreviewAndCode codeTabs={placementExamplesTabs}>
              <div className='grid grid-cols-2 gap-8 place-items-center p-8'>
                <Tooltip content='Tooltip on top' placement='top'>
                  <PrimaryButton>Top</PrimaryButton>
                </Tooltip>
                <Tooltip content='Tooltip on right' placement='right'>
                  <PrimaryButton>Right</PrimaryButton>
                </Tooltip>
                <Tooltip content='Tooltip on left' placement='left'>
                  <PrimaryButton>Left</PrimaryButton>
                </Tooltip>
                <Tooltip content='Tooltip on bottom' placement='bottom'>
                  <PrimaryButton>Bottom</PrimaryButton>
                </Tooltip>
              </div>
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='tooltip' />
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