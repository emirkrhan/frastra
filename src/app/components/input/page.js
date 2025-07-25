import DefaultInput from '@/components/input/DefaultInput'
import ErrorInput from '@/components/input/ErrorInput'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import { defaultInputTabs, errorInputTabs } from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'error', label: 'Error State' },
]

export default function InputPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Input</h1>
          <p className='text-white/70'>
            Displays a form input field or a component that looks like an input field.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultInputTabs}>
              <DefaultInput />
            </PreviewAndCode>
          </section>

          <section id='error' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Error State</h2>
            <PreviewAndCode codeTabs={errorInputTabs}>
              <ErrorInput />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='input' />
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