'use client'

import { useState, useEffect, useRef } from 'react'
import DeployCard from './DeployCard'

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('')
  const observer = useRef(null)

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const firstIntersecting = entries.find(entry => entry.isIntersecting);
        if (firstIntersecting) {
            setActiveId(firstIntersecting.target.id);
        }
      },
      { rootMargin: '0px 0px -75% 0px' }
    )

    const elements = headings.map(heading => document.getElementById(heading.id)).filter(Boolean);
    elements.forEach((el) => observer.current.observe(el));

    return () => {
        if (observer.current) {
            observer.current.disconnect();
        }
    }
  }, [headings])

  return (
    <>
      <div className='space-y-4'>
        <p className='font-semibold text-sm text-white'>On This Page</p>
        <ul className='space-y-2 text-sm text-white/70'>
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`text-xs transition-colors ${
                  activeId === heading.id
                    ? 'text-white font-medium'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {heading.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <DeployCard />
    </>
  )
} 