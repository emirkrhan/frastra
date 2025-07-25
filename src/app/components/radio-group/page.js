'use client'

import { useState } from 'react'
import {
  radioGroupComponentTabs,
  defaultRadioGroupTabs,
  descriptiveRadioGroupTabs,
  disabledRadioGroupTabs,
} from './codes'
import PreviewAndCode from '@/components/PreviewAndCode'
import ComponentFooter from '@/components/ComponentFooter'
import TableOfContents from '@/components/TableOfContents'
import RadioGroup from '@/components/radio-group/RadioGroup'
import Footer from '@/components/Footer'

function DefaultRadioGroup() {
  const [plan, setPlan] = useState('pro')
  const options = [
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise' },
  ]
  return <RadioGroup name='plan' options={options} value={plan} onChange={setPlan} />
}

function DescriptiveRadioGroup() {
  const [notification, setNotification] = useState('all')
  const options = [
    { value: 'all', label: 'All notifications', description: 'Receive all updates.' },
    { value: 'mentions', label: 'Mentions', description: 'Only for direct mentions.' },
    { value: 'none', label: 'None', description: 'Mute all notifications.' },
  ]
  return <RadioGroup name='notification' options={options} value={notification} onChange={setNotification} />
}

function DisabledRadioGroup() {
  const [view, setView] = useState('comfortable')
  const options = [
    { value: 'default', label: 'Default' },
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'compact', label: 'Compact' },
    { value: 'ultra-compact', label: 'Ultra Compact', disabled: true },
  ]
  return <RadioGroup name='view' options={options} value={view} onChange={setView} />
}

const headings = [
  { id: 'component', label: 'Component' },
  { id: 'default', label: 'Default' },
  { id: 'with-description', label: 'With Description' },
  { id: 'disabled', label: 'Disabled' },
]

export default function RadioGroupPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Radio Group</h1>
          <p className='text-white/70'>
            A set of checkable buttons, where only one button can be checked at a time.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='component' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component Code</h2>
            <p className='text-white/70 text-sm'>
              The self-contained code for the minimal RadioGroup component.
            </p>
            <PreviewAndCode codeTabs={radioGroupComponentTabs} preview={false} />
          </section>

          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <p className='text-white/70 text-sm'>
              A standard radio group with a minimal and clean design.
            </p>
            <PreviewAndCode codeTabs={defaultRadioGroupTabs}>
              <DefaultRadioGroup />
            </PreviewAndCode>
          </section>
          
          <section id='with-description' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Description</h2>
            <p className='text-white/70 text-sm'>
              Each option can include a description for more context.
            </p>
            <PreviewAndCode codeTabs={descriptiveRadioGroupTabs}>
              <DescriptiveRadioGroup />
            </PreviewAndCode>
          </section>
          
          <section id='disabled' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Disabled</h2>
            <p className='text-white/70 text-sm'>
              An option can be disabled to prevent user interaction.
            </p>
            <PreviewAndCode codeTabs={disabledRadioGroupTabs}>
              <DisabledRadioGroup />
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='radio-group' />
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