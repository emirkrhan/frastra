'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import { DefaultTextarea } from '@/components/textarea/DefaultTextarea'
import { TextareaWithLabel } from '@/components/textarea/TextareaWithLabel'
import { AutoResizeTextarea } from '@/components/textarea/AutoResizeTextarea'
import { TextareaWithCounter } from '@/components/textarea/TextareaWithCounter'
import { 
  defaultTextareaTabs, 
  textareaWithLabelTabs, 
  autoResizeTextareaTabs, 
  textareaWithCounterTabs 
} from './codes'

const headings = [
  { id: 'default', label: 'Default Textarea' },
  { id: 'label', label: 'With Label' },
  { id: 'auto-resize', label: 'Auto Resize' },
  { id: 'counter', label: 'With Counter' },
]

export default function TextareaPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Textarea</h1>
          <p className='text-white/70'>
            Multi-line text input component with various features like auto-resize, character counting, and validation.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default Textarea</h2>
            <p className='text-white/70 text-sm'>
              A basic textarea with minimal styling, focus states, and responsive behavior.
            </p>
            <PreviewAndCode codeTabs={defaultTextareaTabs}>
              <div className="max-w-md">
                <DefaultTextarea placeholder="Enter your message..." />
              </div>
            </PreviewAndCode>
          </section>

          <section id='label' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Textarea with Label</h2>
            <p className='text-white/70 text-sm'>
              Textarea with label, helper text, and required field indicator for forms and user input.
            </p>
            <PreviewAndCode codeTabs={textareaWithLabelTabs}>
              <div className="max-w-md">
                <TextareaWithLabel 
                  label="Feedback"
                  placeholder="Share your thoughts..."
                  helperText="Please provide detailed feedback to help us improve."
                  required
                />
              </div>
            </PreviewAndCode>
          </section>

          <section id='auto-resize' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Auto Resize Textarea</h2>
            <p className='text-white/70 text-sm'>
              Automatically grows and shrinks based on content with configurable min and max rows.
            </p>
            <PreviewAndCode codeTabs={autoResizeTextareaTabs}>
              <div className="max-w-md">
                <AutoResizeTextarea 
                  placeholder="Start typing and watch me grow..."
                  minRows={3}
                  maxRows={8}
                />
              </div>
            </PreviewAndCode>
          </section>

          <section id='counter' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Textarea with Counter</h2>
            <p className='text-white/70 text-sm'>
              Character counter with visual feedback for limits. Changes color as you approach the maximum.
            </p>
            <PreviewAndCode codeTabs={textareaWithCounterTabs}>
              <div className="max-w-md">
                <TextareaWithCounter 
                  label="Bio"
                  placeholder="Tell us about yourself..."
                  maxLength={150}
                />
              </div>
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='textarea' />
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