import Badge from '@/components/badge/Badge'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import {
  badgeComponentTabs,
  defaultBadgeTabs,
  secondaryBadgeTabs,
  destructiveBadgeTabs,
  outlineBadgeTabs,
  iconBadgeTabs,
} from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'component', label: 'Component' },
  { id: 'default', label: 'Default' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'destructive', label: 'Destructive' },
  { id: 'outline', label: 'Outline' },
  { id: 'with-icon', label: 'With Icon' },
  // Notification başlığı kaldırıldı
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
          <section id='component' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component</h2>
            <PreviewAndCode preview={false} codeTabs={badgeComponentTabs} />
          </section>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultBadgeTabs}>
              <Badge variant="primary">Badge</Badge>
            </PreviewAndCode>
          </section>

          <section id='secondary' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Secondary</h2>
            <PreviewAndCode codeTabs={secondaryBadgeTabs}>
              <Badge variant="secondary">Badge</Badge>
            </PreviewAndCode>
          </section>

          <section id='destructive' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Destructive</h2>
            <PreviewAndCode codeTabs={destructiveBadgeTabs}>
              <Badge variant="destructive">Badge</Badge>
            </PreviewAndCode>
          </section>

          <section id='outline' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Outline</h2>
            <PreviewAndCode codeTabs={outlineBadgeTabs}>
              <Badge variant="outline">Badge</Badge>
            </PreviewAndCode>
          </section>

          <section id='with-icon' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Icon</h2>
            <PreviewAndCode codeTabs={iconBadgeTabs}>
              <Badge variant="success" icon={<CheckCircleIcon className="size-3.5" />}>Verified</Badge>
            </PreviewAndCode>
          </section>

          {/* Notification bölümü kaldırıldı */}
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