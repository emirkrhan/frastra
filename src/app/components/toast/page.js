'use client'

import PreviewAndCode from '@/components/PreviewAndCode'
import ComponentFooter from '@/components/ComponentFooter'
import TableOfContents from '@/components/TableOfContents'
import Footer from '@/components/Footer'
import { useToast } from '@/components/toast/ToastProvider'
import {
  installationTabs,
  toastComponentTabs,
  providerComponentTabs,
  layoutSetupTabs,
  usageExampleTabs,
  customDurationTabs,
} from './codes'

const headings = [
  { id: 'installation', label: '1. Installation' },
  { id: 'component-setup', label: '2. Component Setup' },
  { id: 'provider-setup', label: '3. Provider Setup' },
  { id: 'usage', label: '4. Usage & Examples' },
  { id: 'custom-duration', label: '5. Custom Duration' },
]

export default function ToastPage() {
  const { addToast } = useToast()

  const handleShowDefault = () =>
    addToast('default', 'Event has been created', 'Anyone with a link can view this event.')
  const handleShowSuccess = () =>
    addToast('success', 'Success!', 'Your changes have been saved successfully.')
  const handleShowError = () =>
    addToast('error', 'Error!', 'Could not save your changes. Please try again.')
  const handleShowInfo = () =>
    addToast('info', 'Update Available', 'A new version of the software is ready to be installed.')
  const handleShowWarning = () =>
    addToast('warning', 'Session Expiring', 'Your session will end in 5 minutes due to inactivity.')
  
  // Özel süre örnekleri
  const handleQuickToast = () =>
    addToast('success', 'Quick Message', 'This disappears quickly!', 2000)
  const handleLongToast = () =>
    addToast('info', 'Important Notice', 'This message will stay visible for 10 seconds. Please read carefully.', 10000)

  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Toast</h1>
          <p className='text-white/70'>
            Display brief, temporary notifications to provide feedback to the user.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='installation' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>1. Installation</h2>
            <p className='text-white/70 text-sm'>
              The Toast component uses framer-motion for animations and uuid to generate unique IDs. Run the command below to add them to your project.
            </p>
            <PreviewAndCode preview={false} codeTabs={installationTabs} />
          </section>

          <section id='component-setup' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>2. Component Setup</h2>
            <p className='text-white/70 text-sm'>
              You will need to create two new components in your project: Toast.js and ToastProvider.js. These form the foundation of the notification system.
            </p>
            
            <div className='space-y-8'>
              <div>
                <h3 className='text-lg font-medium text-white mb-3'>Toast.js</h3>
                <p className='text-white/70 text-sm mb-4'>
                  This component manages the appearance and behavior of a single toast notification.
                </p>
                <PreviewAndCode preview={false} codeTabs={toastComponentTabs} />
              </div>
              
              <div>
                <h3 className='text-lg font-medium text-white mb-3'>ToastProvider.js</h3>
                <p className='text-white/70 text-sm mb-4'>
                  This provider manages the toast state and exposes a hook (useToast) to display toasts from anywhere in your application.
                </p>
                <PreviewAndCode preview={false} codeTabs={providerComponentTabs} />
              </div>
            </div>
          </section>

          <section id='provider-setup' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>3. Provider Setup</h2>
            <p className='text-white/70 text-sm'>
              To enable the toast system in your application, wrap your root layout (layout.js) with the ToastProvider. This ensures that the useToast hook works everywhere in your app.
            </p>
            <PreviewAndCode preview={false} codeTabs={layoutSetupTabs} />
          </section>

          <section id='usage' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>4. Usage & Examples</h2>
            <p className='text-white/70 text-sm'>
              You can trigger toast notifications from any client component by calling the useToast hook. The addToast function accepts four arguments: <code className='text-xs font-medium text-white/80 bg-white/10 px-1 py-0.5 rounded'>type</code>, <code className='text-xs font-medium text-white/80 bg-white/10 px-1 py-0.5 rounded'>title</code>, <code className='text-xs font-medium text-white/80 bg-white/10 px-1 py-0.5 rounded'>description</code>, and optional <code className='text-xs font-medium text-white/80 bg-white/10 px-1 py-0.5 rounded'>duration</code>. Duration can be customized in milliseconds (default: 4000ms).
            </p>
            
            <PreviewAndCode codeTabs={usageExampleTabs}>
              <div className='flex flex-wrap gap-3'>
                <button 
                  onClick={handleShowDefault}
                  className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-md hover:bg-neutral-600 transition-colors"
                >
                  Default Toast
                </button>
                <button 
                  onClick={handleShowSuccess}
                  className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                >
                  Success Toast
                </button>
                <button 
                  onClick={handleShowError}
                  className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                >
                  Error Toast
                </button>
                <button 
                  onClick={handleShowInfo}
                  className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                >
                  Info Toast
                </button>
                <button 
                  onClick={handleShowWarning}
                  className="px-4 py-2 bg-yellow-500 text-black text-sm rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Warning Toast
                </button>
              </div>
            </PreviewAndCode>
          </section>

          <section id='custom-duration' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>5. Custom Duration</h2>
            <p className='text-white/70 text-sm'>
              You can customize how long toast notifications stay visible by passing a duration parameter in milliseconds. This is useful for important messages that need more reading time or quick confirmations that can disappear faster.
            </p>
            <PreviewAndCode codeTabs={customDurationTabs}>
              <div className='flex gap-3'>
                <button 
                  onClick={handleQuickToast}
                  className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                >
                  Quick Toast
                </button>
                <button 
                  onClick={handleLongToast}
                  className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                >
                  Long Toast
                </button>
              </div>
            </PreviewAndCode>
          </section>
        </div>
        
        <ComponentFooter currentComponent='toast' />
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