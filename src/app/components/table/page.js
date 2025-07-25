import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import SimpleTable from '@/components/table/SimpleTable'
import StatusTable from '@/components/table/StatusTable'
import ActionTable from '@/components/table/ActionTable'
import SelectableTable from '@/components/table/SelectableTable'
import { 
  simpleTableTabs, 
  statusTableTabs, 
  actionTableTabs, 
  selectableTableTabs 
} from './codes'

const headings = [
  { id: 'simple', label: 'Simple Table' },
  { id: 'status', label: 'Status Table' },
  { id: 'actions', label: 'Action Table' },
  { id: 'selectable', label: 'Selectable Table' },
]

export default function TablePage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Table</h1>
          <p className='text-white/70'>
            Display data in rows and columns with sorting, filtering, and interactive features.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='simple' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Simple Table</h2>
            <p className='text-white/70 text-sm'>
              A basic table with clean styling and hover effects. Perfect for displaying structured data.
            </p>
            <PreviewAndCode codeTabs={simpleTableTabs}>
              <SimpleTable />
            </PreviewAndCode>
          </section>

          <section id='status' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Status Table</h2>
            <p className='text-white/70 text-sm'>
              Table with status badges, priority indicators, and avatar columns. Ideal for project management or task tracking.
            </p>
            <PreviewAndCode codeTabs={statusTableTabs}>
              <StatusTable />
            </PreviewAndCode>
          </section>

          <section id='actions' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Action Table</h2>
            <p className='text-white/70 text-sm'>
              Interactive table with action buttons for each row. Great for admin panels and data management interfaces.
            </p>
            <PreviewAndCode codeTabs={actionTableTabs}>
              <ActionTable />
            </PreviewAndCode>
          </section>

          <section id='selectable' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Selectable Table</h2>
            <p className='text-white/70 text-sm'>
              Multi-selection table with checkboxes and bulk operations. Perfect for file managers and batch processing.
            </p>
            <PreviewAndCode codeTabs={selectableTableTabs}>
              <SelectableTable />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='table' />
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