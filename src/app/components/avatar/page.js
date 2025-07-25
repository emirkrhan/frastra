import ImageAvatar from '@/components/avatar/ImageAvatar'
import FallbackAvatar from '@/components/avatar/FallbackAvatar'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import { imageAvatarTabs, fallbackAvatarTabs } from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'image', label: 'Image' },
  { id: 'fallback', label: 'Fallback' },
]

export default function AvatarPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Avatar</h1>
          <p className='text-white/70'>
            An image element with a fallback for representing a user.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='image' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Image</h2>
            <PreviewAndCode codeTabs={imageAvatarTabs}>
              <ImageAvatar />
            </PreviewAndCode>
          </section>

          <section id='fallback' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Fallback</h2>
            <PreviewAndCode codeTabs={fallbackAvatarTabs}>
              <FallbackAvatar />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='avatar' />
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