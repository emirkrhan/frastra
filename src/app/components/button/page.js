import PrimaryButton from '@/components/button/PrimaryButton'
import SecondaryButton from '@/components/button/SecondaryButton'
import OutlineButton from '@/components/button/OutlineButton'
import DangerButton from '@/components/button/DangerButton'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import {
  primaryButtonTabs,
  secondaryButtonTabs,
  outlineButtonTabs,
  dangerButtonTabs,
} from './codes'
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
  { id: 'primary', label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'outline', label: 'Outline' },
  { id: 'danger', label: 'Danger' },
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
          <section id='primary' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Primary</h2>
            <PreviewAndCode codeTabs={primaryButtonTabs}>
              <div className="flex gap-4">
                <PrimaryButton>Primary</PrimaryButton>
                <PrimaryButton disabled>Disabled</PrimaryButton>
              </div>
            </PreviewAndCode>
          </section>

          <section id='secondary' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Secondary</h2>
            <PreviewAndCode codeTabs={secondaryButtonTabs}>
              <div className="flex gap-4">
                <SecondaryButton>Secondary</SecondaryButton>
                <SecondaryButton disabled>Disabled</SecondaryButton>
              </div>
            </PreviewAndCode>
          </section>

          <section id='outline' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Outline</h2>
            <PreviewAndCode codeTabs={outlineButtonTabs}>
              <div className="flex gap-4">
                <OutlineButton>Outline</OutlineButton>
                <OutlineButton disabled>Disabled</OutlineButton>
              </div>
            </PreviewAndCode>
          </section>

          <section id='danger' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Danger</h2>
            <PreviewAndCode codeTabs={dangerButtonTabs}>
              <div className="flex gap-4">
                <DangerButton>Danger</DangerButton>
                <DangerButton disabled>Disabled</DangerButton>
              </div>
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