import Button from '@/components/button/Button'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import { buttonComponentTabs, primaryButtonTabs, secondaryButtonTabs, outlineButtonTabs, dangerButtonTabs, disabledButtonTabs } from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Button - Frastra UI Components',
  description: 'Beautiful, accessible button components for your Next.js applications. Primary, secondary, outline, and danger button variants with hover effects.',
  openGraph: {
    title: 'Button - Frastra UI Components',
    description: 'Beautiful, accessible button components for your Next.js applications. Primary, secondary, outline, and danger button variants with hover effects.',
  },
}

const headings = [
  { id: 'component', label: 'Component' },
  { id: 'primary', label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'outline', label: 'Outline' },
  { id: 'danger', label: 'Danger' },
  { id: 'disabled', label: 'Disabled' },
]

export default function ButtonPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Button</h1>
          <p className='text-white/70'>
            Displays a button or a component that looks like a button.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='component' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component</h2>
            <PreviewAndCode preview={false} codeTabs={buttonComponentTabs} />
          </section>

          <section id='primary' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Primary</h2>
            <PreviewAndCode codeTabs={primaryButtonTabs}>
              <Button variant='primary'>Primary</Button>
            </PreviewAndCode>
          </section>

          <section id='secondary' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Secondary</h2>
            <PreviewAndCode codeTabs={secondaryButtonTabs}>
              <Button variant='secondary'>Secondary</Button>
            </PreviewAndCode>
          </section>

          <section id='outline' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Outline</h2>
            <PreviewAndCode codeTabs={outlineButtonTabs}>
              <Button variant='outline'>Outline</Button>
            </PreviewAndCode>
          </section>

          <section id='danger' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Danger</h2>
            <PreviewAndCode codeTabs={dangerButtonTabs}>
              <Button variant='danger'>Danger</Button>
            </PreviewAndCode>
          </section>

          <section id='disabled' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Disabled</h2>
            <PreviewAndCode codeTabs={disabledButtonTabs}>
              <Button variant='primary' disabled>Disabled</Button>
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='button' />
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