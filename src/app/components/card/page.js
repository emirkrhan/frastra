'use client'
import React from 'react'
import SimpleCard from '@/components/card/SimpleCard'
import NotificationCard from '@/components/card/NotificationCard'
import UserCard from '@/components/card/UserCard'
import ProjectCard from '@/components/card/ProjectCard'
import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import {
  simpleCardTabs,
  notificationCardTabs,
  userCardTabs,
  projectCardTabs,
} from './codes'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'

const headings = [
  { id: 'simple', label: 'Simple' },
  { id: 'notification', label: 'Notification' },
  { id: 'user', label: 'User' },
  { id: 'project', label: 'Project' },
]

export default function CardPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Card</h1>
          <p className='text-white/70'>
            Cards are used to group related content and actions about a single subject.
          </p>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='simple' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Simple</h2>
            <PreviewAndCode codeTabs={simpleCardTabs}>
              <SimpleCard />
            </PreviewAndCode>
          </section>

          <section id='notification' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Notification</h2>
            <PreviewAndCode codeTabs={notificationCardTabs}>
              <NotificationCard />
            </PreviewAndCode>
          </section>

          <section id='user' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>User</h2>
            <PreviewAndCode codeTabs={userCardTabs}>
              <UserCard />
            </PreviewAndCode>
          </section>

          <section id='project' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Project</h2>
            <PreviewAndCode codeTabs={projectCardTabs}>
              <ProjectCard />
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent='card' />
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