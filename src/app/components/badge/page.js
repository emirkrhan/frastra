import DefaultBadge from '@/components/badge/DefaultBadge'
import SecondaryBadge from '@/components/badge/SecondaryBadge'
import DestructiveBadge from '@/components/badge/DestructiveBadge'
import OutlineBadge from '@/components/badge/OutlineBadge'
import IconBadge from '@/components/badge/IconBadge'
import NotificationDot from '@/components/badge/NotificationDot'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import {
  defaultBadgeTabs,
  secondaryBadgeTabs,
  destructiveBadgeTabs,
  outlineBadgeTabs,
  iconBadgeTabs,
  notificationDotTabs,
} from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'destructive', label: 'Destructive' },
  { id: 'outline', label: 'Outline' },
  { id: 'with-icon', label: 'With Icon' },
  { id: 'notification', label: 'Notification' },
]

export default function BadgePage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Badge</h1>
          <p className='text-white/70'>
            Displays a small status descriptor.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultBadgeTabs}>
              <DefaultBadge />
            </PreviewAndCode>
          </section>

          <section id='secondary' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Secondary</h2>
            <PreviewAndCode codeTabs={secondaryBadgeTabs}>
              <SecondaryBadge />
            </PreviewAndCode>
          </section>

          <section id='destructive' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Destructive</h2>
            <PreviewAndCode codeTabs={destructiveBadgeTabs}>
              <DestructiveBadge />
            </PreviewAndCode>
          </section>

          <section id='outline' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Outline</h2>
            <PreviewAndCode codeTabs={outlineBadgeTabs}>
              <OutlineBadge />
            </PreviewAndCode>
          </section>

          <section id='with-icon' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Icon</h2>
            <PreviewAndCode codeTabs={iconBadgeTabs}>
              <IconBadge />
            </PreviewAndCode>
          </section>

          <section id='notification' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Notification</h2>
            <PreviewAndCode codeTabs={notificationDotTabs}>
              <NotificationDot />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='badge' />
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