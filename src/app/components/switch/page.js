'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import DefaultSwitch from '@/components/switch/DefaultSwitch'
import SwitchWithLabel from '@/components/switch/SwitchWithLabel'
import DisabledSwitch from '@/components/switch/DisabledSwitch'
import { 
  defaultSwitchTabs, 
  switchWithLabelTabs, 
  disabledSwitchTabs 
} from './codes'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'with-label', label: 'With Label' },
  { id: 'disabled', label: 'Disabled' },
]

export default function SwitchPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Switch</h1>
          <p className='text-white/70'>
            A control that allows the user to toggle between two states, typically on or off.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <p className='text-white/70 text-sm'>
              A simple toggle switch with smooth animation and subtle styling.
            </p>
            <PreviewAndCode codeTabs={defaultSwitchTabs}>
              <DefaultSwitch />
            </PreviewAndCode>
          </section>

          <section id='with-label' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Label</h2>
            <p className='text-white/70 text-sm'>
              Switch component paired with a descriptive label for better accessibility.
            </p>
            <PreviewAndCode codeTabs={switchWithLabelTabs}>
              <SwitchWithLabel />
            </PreviewAndCode>
          </section>

          <section id='disabled' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Disabled</h2>
            <p className='text-white/70 text-sm'>
              Non-interactive switches showing both off and on disabled states.
            </p>
            <PreviewAndCode codeTabs={disabledSwitchTabs}>
              <DisabledSwitch />
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='switch' />
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