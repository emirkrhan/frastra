'use client'

import { useState, useEffect } from 'react'
import Grid from '@/components/layout/Grid'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import {
  basicGridTabs,
  threeColGridTabs,
  responsiveGridTabs,
} from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'basic-grid', label: 'Basic Grid' },
  { id: 'three-col-grid', label: 'Three Columns' },
  { id: 'responsive-grid', label: 'Responsive Grid' },
]

export default function GridPage() {
  // Container width'e göre responsive column sayısı hesaplama
  const getGridCols = (containerRef) => {
    if (!containerRef) return 'grid-cols-4'
    const width = containerRef.offsetWidth
    if (width < 400) return 'grid-cols-1'
    if (width < 600) return 'grid-cols-2'
    if (width < 900) return 'grid-cols-3'
    return 'grid-cols-4'
  }

  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Grid</h1>
          <p className='text-white/70'>
            A powerful layout component using CSS Grid for creating complex, responsive layouts with precise control.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='basic-grid' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Basic Grid</h2>
            <p className='text-sm text-white/60'>
              A simple 2-column grid layout with equal spacing between items.
            </p>
            <PreviewAndCode codeTabs={basicGridTabs}>
              <Grid className="grid grid-cols-2 gap-4 p-4 bg-neutral-800 border border-white/10 rounded-lg">
                <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 1</div>
                <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 2</div>
                <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 3</div>
                <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 4</div>
              </Grid>
            </PreviewAndCode>
          </section>

          <section id='three-col-grid' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Three Columns</h2>
            <p className='text-sm text-white/60'>
              A 3-column grid perfect for product listings, feature cards, or dashboard widgets.
            </p>
            <PreviewAndCode codeTabs={threeColGridTabs}>
              <Grid className="grid grid-cols-3 gap-4 p-4 bg-neutral-800 border border-white/10 rounded-lg">
                <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 1</div>
                <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 2</div>
                <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 3</div>
              </Grid>
            </PreviewAndCode>
          </section>

          <section id='responsive-grid' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Responsive Grid</h2>
            <p className='text-sm text-white/60'>
              A responsive grid that adapts to its container size. Drag the resize handle to see the grid respond.
            </p>
            
            {/* Açıklayıcı bilgi */}
            <div className='p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg'>
              <div className='flex items-start gap-2'>
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className='text-xs text-blue-200'>
                  <strong>Live preview:</strong> Drag the resize handle on the right edge to see real-time responsive behavior.
                </p>
              </div>
            </div>

            <PreviewAndCode codeTabs={responsiveGridTabs}>
              <ResponsiveGridDemo />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='grid' />
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

// Responsive Grid Demo Component
function ResponsiveGridDemo() {
  const [containerRef, setContainerRef] = useState(null)
  const [cols, setCols] = useState('grid-cols-4')
  const [isDragging, setIsDragging] = useState(false)
  const maxWidth = 727 // Sabit maximum genişlik

  const updateGridCols = (containerWidth) => {
    let newCols = 'grid-cols-4'
    
    // Inner content width kullanıyoruz
    if (containerWidth < 400) newCols = 'grid-cols-1'
    else if (containerWidth < 500) newCols = 'grid-cols-2' 
    else if (containerWidth < 600) newCols = 'grid-cols-3'
    else newCols = 'grid-cols-4' 
    
    setCols(newCols)
  }

  // ResizeObserver sadece initial load için kullan
  useEffect(() => {
    if (!containerRef || isDragging) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const innerWidth = entry.contentRect.width
        updateGridCols(innerWidth)
      }
    })

    resizeObserver.observe(containerRef)
    
    return () => {
      resizeObserver.disconnect()
    }
  }, [containerRef, isDragging])

  // Custom drag functionality - tamamen instant
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    
    const startX = e.clientX
    const startOuterWidth = containerRef.offsetWidth

    const handleMouseMove = (e) => {
      const diffX = e.clientX - startX
      const newOuterWidth = Math.min(
        Math.max(startOuterWidth + diffX, 308), // Min outer width
        maxWidth // Max outer width
      )
      
      if (containerRef) {
        // Direkt width set et, hiçbir delay yok
        containerRef.style.width = newOuterWidth + 'px'
        
        // Inner width hesapla ve direkt update et
        const innerWidth = newOuterWidth - 8 // 4px padding x 2
        updateGridCols(innerWidth)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className="space-y-3">
      <div className="text-sm">
        <span className="text-white/70">
          Current layout: <span className="text-white font-medium">{cols.replace('grid-cols-', '')} columns</span>
        </span>
      </div>
      
      <div className="relative">
        <div
          ref={setContainerRef}
          className="overflow-hidden relative"
          style={{ 
            border: '2px dashed rgb(75 85 99)',
            borderRadius: '8px',
            padding: '4px',
            width: maxWidth + 'px', // Maximum width ile başla
            minWidth: '308px', 
            maxWidth: maxWidth + 'px'
          }}
        >
          <Grid className={`grid ${cols} gap-4 p-4 bg-neutral-800 border border-white/10 rounded-lg ${
            isDragging ? '' : 'transition-all duration-150'
          }`}>
            <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 1</div>
            <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 2</div>
            <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 3</div>
            <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 4</div>
          </Grid>
          
          {/* Ultra minimal resize handle */}
          <div 
            className="absolute right-[-3px] top-1/2 transform -translate-y-1/2 cursor-ew-resize"
            onMouseDown={handleMouseDown}
          >
            <div 
              className={`w-1.5 h-8 rounded-md transition-all duration-200 border ${
                isDragging 
                  ? 'bg-white border-gray-200 opacity-100 shadow-md' 
                  : 'bg-white border-gray-300 opacity-80 hover:opacity-100 hover:shadow-sm'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 