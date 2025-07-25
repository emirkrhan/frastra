'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import { DefaultSelect } from '@/components/select/DefaultSelect'
import { MultiSelect } from '@/components/select/MultiSelect'
import { SearchableSelect } from '@/components/select/SearchableSelect'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import { 
  selectComponentTabs,
  defaultSelectTabs, 
  multiSelectTabs, 
  searchableSelectTabs 
} from './codes'

const headings = [
  { id: "component", label: "Component Code" },
  { id: "default", label: "Default" },
  { id: "multi", label: "Multi Select" },
  { id: "searchable", label: "Searchable" },
]

export default function SelectPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Select</h1>
          <p className='text-white/70'>
            Özelleştirilebilir dropdown select bileşenleri. Tek seçim, çoklu seçim ve arama özellikli varyantlar.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id="component" className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Component Code</h2>
            <p className='text-white/70 text-sm'>
              Ana Select bileşeninin kaynak kodu. Tüm varyantların temelini oluşturur.
            </p>
            <PreviewAndCode codeTabs={selectComponentTabs} preview={false} />
          </section>

          <section id="default" className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Default</h2>
            <p className='text-white/70 text-sm'>
              Temel select bileşeni. Kullanıcılar listeden tek bir seçenek seçebilir.
            </p>
            <PreviewAndCode codeTabs={defaultSelectTabs}>
              <DefaultSelect />
            </PreviewAndCode>
          </section>

          <section id="multi" className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Multi Select</h2>
            <p className='text-white/70 text-sm'>
              Çoklu seçim yapılabilen select bileşeni. Seçilen öğeler chip olarak gösterilir ve X butonuyla kaldırılabilir.
            </p>
            <PreviewAndCode codeTabs={multiSelectTabs}>
              <MultiSelect />
            </PreviewAndCode>
          </section>

          <section id="searchable" className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Searchable</h2>
            <p className='text-white/70 text-sm'>
              Arama özellikli select bileşeni. Kullanıcılar yazarak seçenekleri filtreleyebilir.
            </p>
            <PreviewAndCode codeTabs={searchableSelectTabs}>
              <SearchableSelect />
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='select' />
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