import DefaultAlert from '@/components/alert/DefaultAlert'
import DestructiveAlert from '@/components/alert/DestructiveAlert'
import PreviewAndCode from '@/components/PreviewAndCode'
import ComponentFooter from '@/components/ComponentFooter'
import { defaultAlertTabs, destructiveAlertTabs } from './codes'
import TableOfContents from '@/components/TableOfContents'
import Footer from '@/components/Footer'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'destructive', label: 'Destructive' },
]

export default function AlertPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Alert</h1>
          <p className='text-white/70'>
            Displays a callout for user attention.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultAlertTabs}>
              <DefaultAlert />
            </PreviewAndCode>
          </section>

          <section id='destructive' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Destructive</h2>
            <PreviewAndCode codeTabs={destructiveAlertTabs}>
              <DestructiveAlert />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='alert' />
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