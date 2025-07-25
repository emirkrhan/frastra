import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import DefaultCheckbox from '@/components/checkbox/DefaultCheckbox'
import CheckboxWithLabel from '@/components/checkbox/CheckboxWithLabel'
import DisabledCheckbox from '@/components/checkbox/DisabledCheckbox'
import IndeterminateCheckbox from '@/components/checkbox/IndeterminateCheckbox'
import { 
  defaultCheckboxTabs, 
  checkboxWithLabelTabs, 
  disabledCheckboxTabs, 
  indeterminateCheckboxTabs 
} from './codes'

const headings = [
  { id: 'default', label: 'Default' },
  { id: 'with-label', label: 'With Label' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'indeterminate', label: 'Indeterminate' },
]

export default function CheckboxPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Checkbox</h1>
          <p className='text-white/70'>
            A control that allows the user to toggle between checked and not checked.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='default' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <PreviewAndCode codeTabs={defaultCheckboxTabs}>
              <DefaultCheckbox />
            </PreviewAndCode>
          </section>

          <section id='with-label' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>With Label</h2>
            <PreviewAndCode codeTabs={checkboxWithLabelTabs}>
              <CheckboxWithLabel />
            </PreviewAndCode>
          </section>

          <section id='disabled' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Disabled</h2>
            <PreviewAndCode codeTabs={disabledCheckboxTabs}>
              <DisabledCheckbox />
            </PreviewAndCode>
          </section>

          <section id='indeterminate' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Indeterminate</h2>
            <PreviewAndCode codeTabs={indeterminateCheckboxTabs}>
              <IndeterminateCheckbox />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='checkbox' />
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