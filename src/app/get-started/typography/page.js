import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import { headingsTabs, bodyTextTabs, listTabs } from './codes'

const headings = [
  { id: 'headings', label: 'Headings' },
  { id: 'body-text', label: 'Body Text' },
  { id: 'lists', label: 'Lists' },
]

export default function TypographyPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Typography</h1>
          <p className='text-white/70'>
            Styles for headings, paragraphs, lists, and other text elements.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='headings' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Headings</h2>
            <PreviewAndCode codeTabs={headingsTabs}>
              <div className='space-y-4'>
                <h1 className='text-3xl font-bold'>Heading 1: The Quick Brown Fox</h1>
                <h2 className='text-2xl font-semibold'>Heading 2: The Quick Brown Fox</h2>
                <h3 className='text-xl font-medium'>Heading 3: The Quick Brown Fox</h3>
                <h4 className='text-lg font-medium'>Heading 4: The Quick Brown Fox</h4>
              </div>
            </PreviewAndCode>
          </section>

          <section id='body-text' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Body Text</h2>
            <PreviewAndCode codeTabs={bodyTextTabs}>
              <div className='space-y-4'>
                <p className='text-white/70'>
                  The quick brown fox jumps over the lazy dog. This is a sample paragraph that demonstrates the default body text style. It&apos;s designed to be clean, readable, and well-spaced, providing a comfortable reading experience for users.
                </p>
                <p className='text-sm text-white/50'>
                  This is a smaller, secondary text style, perfect for captions, footers, or less important information that still needs to be legible.
                </p>
              </div>
            </PreviewAndCode>
          </section>

          <section id='lists' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Lists</h2>
            <PreviewAndCode codeTabs={listTabs}>
              <div className='space-y-6'>
                <div>
                  <h4 className='text-lg font-medium mb-2'>Unordered List</h4>
                  <ul className='list-disc list-inside space-y-1 text-white/70'>
                    <li>List item one</li>
                    <li>List item two</li>
                    <li>List item three</li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-lg font-medium mb-2'>Ordered List</h4>
                  <ol className='list-decimal list-inside space-y-1 text-white/70'>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                  </ol>
                </div>
              </div>
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='typography' />
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