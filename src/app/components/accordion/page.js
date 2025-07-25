'use client'

import { DefaultAccordion } from '@/components/accordion/DefaultAccordion'
import { SingleAccordion } from '@/components/accordion/SingleAccordion'
import { BorderlessAccordion } from '@/components/accordion/BorderlessAccordion'
import PreviewAndCode from '@/components/PreviewAndCode'
import ComponentFooter from '@/components/ComponentFooter'
import {
  defaultAccordionTabs,
  singleAccordionTabs,
  borderlessAccordionTabs,
} from './codes'
import TableOfContents from '@/components/TableOfContents'
import Footer from '@/components/Footer'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'single', label: 'Single Item' },
  { id: 'borderless', label: 'Borderless' },
]

const accordionItems = [
  {
    question: 'What is Frastra?',
    answer: 'Frastra is a collection of beautifully designed, accessible, and customizable components that you can copy and paste into your projects.',
  },
  {
    question: 'How do I use the components?',
    answer: 'Simply find the component you want to use, copy the code from the "Component" tab, and paste it into your project.',
  },
  {
    question: 'Is it a component library?',
    answer: 'No, it is not a component library. It is a collection of components that you can use to build your own component library.',
  },
]

export default function AccordionPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Accordion</h1>
          <p className='text-white/70'>
            A vertically stacked set of interactive headings that each reveal a section of content.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultAccordionTabs}>
              <DefaultAccordion items={accordionItems} />
            </PreviewAndCode>
          </section>

          <section id='single' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Single Item</h2>
            <PreviewAndCode codeTabs={singleAccordionTabs}>
              <SingleAccordion items={accordionItems} />
            </PreviewAndCode>
          </section>

          <section id='borderless' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Borderless</h2>
            <PreviewAndCode codeTabs={borderlessAccordionTabs}>
              <BorderlessAccordion items={accordionItems} />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='accordion' />
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
