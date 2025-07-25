import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import Pagination from '@/components/pagination/FullPagination'
import { paginationTabs } from './codes'

const headings = [
  { id: 'usage', label: 'Usage' },
]

export default function PaginationPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Pagination</h1>
          <p className='text-white/70'>
            Navigate through multiple pages of content with a clean, accessible pagination component.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='usage' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Usage</h2>
            <p className='text-white/70 text-sm'>
              A fully functional pagination component with props for total pages, initial page, and page change callbacks.
            </p>
            <PreviewAndCode codeTabs={paginationTabs}>
              <Pagination 
                totalPages={20} 
                initialPage={8}
              />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='pagination' />
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