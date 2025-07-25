'use client'

import Box from '@/components/layout/Box'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import {
  leftTopBoxTabs,
  centeredBoxTabs,
} from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'left-top-box', label: 'Content Box' },
  { id: 'centered-box', label: 'Centered Box' },
]

export default function BoxPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Box</h1>
          <p className='text-white/70'>
            A simple container component for wrapping content. Can be used as a vanilla div or with the Box component wrapper.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='left-top-box' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Content Box</h2>
            <p className='text-sm text-white/60'>
              A container with padding where content is aligned to the top-left. Perfect for cards and content panels.
            </p>
            <PreviewAndCode codeTabs={leftTopBoxTabs}>
              <Box className="w-full bg-neutral-800 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                <p className="text-white/70">
                  This is a content box with text aligned to the top-left. Perfect for cards, panels, or any container with content.
                </p>
              </Box>
            </PreviewAndCode>
          </section>

          <section id='centered-box' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Centered Box</h2>
            <p className='text-sm text-white/60'>
              A box with flexbox centering where content is perfectly centered in the middle.
            </p>
            <PreviewAndCode codeTabs={centeredBoxTabs}>
              <Box className="w-full h-32 bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white">Centered Content</span>
              </Box>
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='box' />
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