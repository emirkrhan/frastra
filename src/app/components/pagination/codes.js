export const paginationTabs = [
  {
    label: 'Component',
    code: `'use client'

import { useState, useMemo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const DOTS = '...'

const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export default function Pagination({ 
  totalPages = 20, 
  initialPage = 1, 
  siblingCount = 1,
  onPageChange,
  ...props 
}) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    onPageChange?.(page)
  }

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages,
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPages

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)
      return [...leftRange, DOTS, totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(
        totalPages - rightItemCount + 1,
        totalPages,
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalPages, siblingCount, currentPage])

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    const nextPage = currentPage + 1
    handlePageChange(nextPage)
  }

  const onPrevious = () => {
    const prevPage = currentPage - 1
    handlePageChange(prevPage)
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  const buttonClasses =
    'flex items-center justify-center h-9 w-9 rounded-md text-sm transition-colors cursor-pointer'
  const activeClasses = 'bg-white text-black font-medium'
  const inactiveClasses = 'text-white/60 hover:bg-white/10 hover:text-white'
  const disabledClasses = 'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white/60'

  return (
    <nav aria-label='Page navigation' {...props}>
      <ul className='flex items-center gap-1'>
        <li>
          <button
            onClick={onPrevious}
            disabled={currentPage === 1}
            className={\`\${buttonClasses} \${inactiveClasses} \${disabledClasses}\`}
          >
            <span className='sr-only'>Previous</span>
            <ChevronLeftIcon className='h-4 w-4' />
          </button>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={index}
                className='flex items-center justify-center h-9 w-9 text-white/60'
              >
                &#8230;
              </li>
            )
          }

          const isActive = currentPage === pageNumber
          return (
            <li key={index}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={\`\${buttonClasses} \${
                  isActive ? activeClasses : inactiveClasses
                }\`}
              >
                {pageNumber}
              </button>
            </li>
          )
        })}
        <li>
          <button
            onClick={onNext}
            disabled={currentPage === lastPage}
            className={\`\${buttonClasses} \${inactiveClasses} \${disabledClasses}\`}
          >
            <span className='sr-only'>Next</span>
            <ChevronRightIcon className='h-4 w-4' />
          </button>
        </li>
      </ul>
    </nav>
  )
}`
  },
  {
    label: 'Usage',
    code: `// Basic usage
<Pagination 
  totalPages={100} 
  initialPage={1}
  onPageChange={(page) => console.log('Page changed to:', page)}
/>

// With custom sibling count
<Pagination 
  totalPages={50} 
  initialPage={10}
  siblingCount={2}
  onPageChange={(page) => {
    // Handle page change (e.g., fetch data, update URL)
    fetchData(page)
    updateURL(page)
  }}
/>

// Real-world example with data fetching
const [currentPage, setCurrentPage] = useState(1)
const [data, setData] = useState([])

const handlePageChange = async (page) => {
  setCurrentPage(page)
  const result = await fetch(\`/api/data?page=\${page}\`)
  const newData = await result.json()
  setData(newData)
}

<Pagination 
  totalPages={totalPageCount} 
  initialPage={currentPage}
  onPageChange={handlePageChange}
/>`
  }
] 