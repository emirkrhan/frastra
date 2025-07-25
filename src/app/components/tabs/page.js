'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import { DefaultTabs } from '@/components/tabs/DefaultTabs'
import { TabsWithIcons } from '@/components/tabs/TabsWithIcons'
import { VerticalTabs } from '@/components/tabs/VerticalTabs'
import {
  defaultTabsTabs,
  tabsWithIconsTabs,
  verticalTabsTabs,
} from './codes'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'with-icons', label: 'With Icons' },
  { id: 'vertical', label: 'Vertical' },
]

const tabsData = [
  { id: 'account', label: 'Account', content: 'Account settings and information.' },
  { id: 'password', label: 'Password', content: 'Change your password here.' },
  { id: 'team', label: 'Team', content: 'Manage your team members and roles.' },
  { id: 'billing', label: 'Billing', content: 'View your billing history and manage payment methods.' },
]

export default function TabsPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Tabs</h1>
          <p className='text-white/70'>
            A set of layered sections of content, known as tab panels, that are displayed one at a time.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultTabsTabs}>
              <DefaultTabs tabs={tabsData} />
            </PreviewAndCode>
          </section>

          <section id='with-icons' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Icons</h2>
            <PreviewAndCode codeTabs={tabsWithIconsTabs}>
              <TabsWithIcons tabs={tabsData} />
            </PreviewAndCode>
          </section>
          
          <section id='vertical' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Vertical</h2>
            <PreviewAndCode codeTabs={verticalTabsTabs}>
              <VerticalTabs tabs={tabsData} />
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='tabs' />
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