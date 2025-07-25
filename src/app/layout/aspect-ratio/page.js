'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import {
  squareAspectTabs,
  videoAspectTabs,
  customAspectTabs,
} from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'square-aspect', label: 'Square Ratio' },
  { id: 'video-aspect', label: 'Video Ratio' },
  { id: 'custom-aspect', label: 'Custom Ratio' },
]

export default function AspectRatioPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Aspect Ratio</h1>
          <p className='text-white/70'>
            A component for maintaining consistent aspect ratios, perfect for images, videos, and responsive containers.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='square-aspect' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Square Ratio</h2>
            <p className='text-sm text-white/60'>
              A perfect 1:1 square ratio, ideal for profile pictures, icons, and square cards.
            </p>
            <PreviewAndCode codeTabs={squareAspectTabs}>
              <div className="aspect-square w-full max-w-64 bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">1:1 Square</span>
              </div>
            </PreviewAndCode>
          </section>

          <section id='video-aspect' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Video Ratio</h2>
            <p className='text-sm text-white/60'>
              A standard 16:9 video aspect ratio, perfect for video players, hero banners, and media content.
            </p>
            <PreviewAndCode codeTabs={videoAspectTabs}>
              <div className="aspect-video w-full bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">16:9 Video</span>
              </div>
            </PreviewAndCode>
          </section>

          <section id='custom-aspect' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Custom Ratio</h2>
            <p className='text-sm text-white/60'>
              Use custom aspect ratios with the aspect-[w/h] syntax for any specific proportions you need.
            </p>
            <PreviewAndCode codeTabs={customAspectTabs}>
              <div className="aspect-[4/3] w-full max-w-80 bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">4:3 Custom</span>
              </div>
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='aspect-ratio' />
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