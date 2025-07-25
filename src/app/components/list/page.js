import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import SimpleList from '@/components/list/SimpleList'
import AvatarList from '@/components/list/AvatarList'
import ActionList from '@/components/list/ActionList'
import SelectableList from '@/components/list/SelectableList'
import { 
  simpleListTabs, 
  avatarListTabs, 
  actionListTabs, 
  selectableListTabs 
} from './codes'

const headings = [
  { id: 'simple', label: 'Simple List' },
  { id: 'avatar', label: 'Avatar List' },
  { id: 'action', label: 'Action List' },
  { id: 'selectable', label: 'Selectable List' },
]

export default function ListPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>List</h1>
          <p className='text-white/70'>
            Display a collection of items in a structured, minimal and interactive format.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='simple' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Simple List</h2>
            <p className='text-white/70 text-sm'>
              A basic list with icons and hover effects. Perfect for displaying simple data like contacts or menu items.
            </p>
            <PreviewAndCode codeTabs={simpleListTabs}>
              <SimpleList />
            </PreviewAndCode>
          </section>

          <section id='avatar' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Avatar List</h2>
            <p className='text-white/70 text-sm'>
              List with gradient avatars, status indicators, and action buttons. Ideal for team members or user lists.
            </p>
            <PreviewAndCode codeTabs={avatarListTabs}>
              <AvatarList />
            </PreviewAndCode>
          </section>

          <section id='action' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Action List</h2>
            <p className='text-white/70 text-sm'>
              Interactive list with colored icons and hover indicators. Great for navigation menus or file explorers.
            </p>
            <PreviewAndCode codeTabs={actionListTabs}>
              <ActionList />
            </PreviewAndCode>
          </section>

          <section id='selectable' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Selectable List</h2>
            <p className='text-white/70 text-sm'>
              Multi-selection list with checkboxes and batch operations. Perfect for task lists or bulk actions.
            </p>
            <PreviewAndCode codeTabs={selectableListTabs}>
              <SelectableList />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='list' />
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