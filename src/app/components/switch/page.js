'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import Switch from '@/components/switch/Switch'
import { 
  switchComponentTabs,
  switchUsageTabs,
  switchWithLabelTabs,
  switchDisabledTabs
} from './codes'

const headings = [
  { id: 'component', label: 'Component' },
  { id: 'usage', label: 'Usage' },
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
          <section id='component' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component</h2>
            <p className='text-white/70 text-sm'>
              A flexible toggle switch component with customizable props for various use cases.
            </p>
            <PreviewAndCode codeTabs={switchComponentTabs} preview={false}>
            </PreviewAndCode>
          </section>

          <section id='usage' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Usage</h2>
            <p className='text-white/70 text-sm'>
              Basic usage of the switch component without any additional props.
            </p>
            <PreviewAndCode codeTabs={switchUsageTabs}>
              <Switch defaultValue={false} />
            </PreviewAndCode>
          </section>

          <section id='with-label' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Label</h2>
            <p className='text-white/70 text-sm'>
              Switch component paired with a descriptive label for better accessibility.
            </p>
            <PreviewAndCode codeTabs={switchWithLabelTabs}>
              <Switch label='Enable notifications' id='notifications' defaultValue={true} />
            </PreviewAndCode>
          </section>

          <section id='disabled' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Disabled</h2>
            <p className='text-white/70 text-sm'>
              Non-interactive switches showing both off and on disabled states.
            </p>
            <PreviewAndCode codeTabs={switchDisabledTabs}>
              <div className='flex items-center gap-6'>
                <Switch disabled />
                <Switch disabled defaultValue={true} />
              </div>
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