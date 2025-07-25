'use client'

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import PreviewAndCode from '@/components/PreviewAndCode'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import {
  breadcrumbComponentTabs,
  usageTabs,
  withIconsTabs,
  withSlashSeparatorTabs,
} from './codes'
import TableOfContents from '@/components/TableOfContents'
import { HomeIcon } from '@heroicons/react/20/solid'

const headings = [
  { id: 'component', label: 'Component Code' },
  { id: 'usage', label: 'Usage' },
  { id: 'with-icons', label: 'With Icons' },
  { id: 'with-slash-separator', label: 'With Slash Separator' },
]

const defaultItems = [
  { name: 'Home', href: '#' },
  { name: 'Components', href: '#' },
  { name: 'Breadcrumb', href: '#' },
]



export default function BreadcrumbPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Breadcrumb</h1>
          <p className='text-white/70'>
            Indicates the current page&apos;s location within a navigational hierarchy.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='component' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component Code</h2>
            <PreviewAndCode preview={false} codeTabs={breadcrumbComponentTabs} />
          </section>

          <section id='usage' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Usage</h2>
            <PreviewAndCode codeTabs={usageTabs}>
              <Breadcrumb items={defaultItems} />
            </PreviewAndCode>
          </section>
          
          <section id='with-icons' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Icons</h2>
            <PreviewAndCode codeTabs={withIconsTabs}>
              <Breadcrumb items={defaultItems} icon={HomeIcon} />
            </PreviewAndCode>
          </section>
          
          <section id='with-slash-separator' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Slash Separator</h2>
            <PreviewAndCode codeTabs={withSlashSeparatorTabs}>
              <Breadcrumb items={defaultItems} slash={true} />
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='breadcrumb' />
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