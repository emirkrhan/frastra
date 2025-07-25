import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import DefaultDropdown from '@/components/dropdown-menu/DefaultDropdown'
import NotificationDropdown from '@/components/dropdown-menu/NotificationDropdown'
import { defaultDropdownTabs, notificationDropdownTabs } from './codes'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'notifications', label: 'Notifications' },
]

export default function DropdownMenuPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Dropdown Menu</h1>
          <p className='text-white/70'>
            Displays a menu to the user — such as a set of actions or functions — triggered by a button.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <p className='text-white/70 text-sm'>
              A standard dropdown menu with action items and icons.
            </p>
            <PreviewAndCode codeTabs={defaultDropdownTabs}>
              <DefaultDropdown />
            </PreviewAndCode>
          </section>

          <section id='notifications' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Notifications</h2>
            <p className='text-white/70 text-sm'>
              An interactive notification center with unread count, status indicators, and action buttons.
            </p>
            <PreviewAndCode codeTabs={notificationDropdownTabs}>
              <NotificationDropdown />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='dropdown-menu' />
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