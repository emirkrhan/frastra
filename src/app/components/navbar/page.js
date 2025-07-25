import DefaultNavbar from '@/components/navbar/DefaultNavbar'
import PreviewAndCode from '@/components/PreviewAndCode'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import { defaultNavbarTabs } from './codes'
import TableOfContents from '@/components/TableOfContents'

const headings = [{ id: 'default', label: 'Default' }]

export default function NavbarPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Navbar</h1>
          <p className='text-white/70'>
            A responsive navigation header that includes a logo, navigation links, and a call-to-action button.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultNavbarTabs}>
              <DefaultNavbar />
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='navbar' />
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