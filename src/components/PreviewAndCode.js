'use client'
import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'

export default function PreviewAndCode({
  preview = true,
  children,
  codeTabs = [],
}) {
  const [isCopied, setIsCopied] = useState(false)
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const activeTab = codeTabs[activeTabIndex]
  const activeCode = activeTab?.code || ''
  const activeLanguage = activeTab?.language || 'jsx'

  const handleCopy = () => {
    if (!activeCode) return
    navigator.clipboard.writeText(activeCode).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className='w-full space-y-3'>
      {preview && (
        <div className='w-full border border-white/10 rounded-xl py-16 px-6 flex items-center justify-center'>
          {children}
        </div>
      )}
      <div className='w-full max-w-full min-w-0 relative rounded-xl bg-neutral-900 border border-white/10'>
        {codeTabs.length > 0 && (
          <div className="flex items-center justify-between border-b border-white/10 pr-2">
            <div className="flex">
              {codeTabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTabIndex(index)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTabIndex === index
                      ? 'text-white bg-neutral-800'
                      : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {activeCode && (
              <button
                onClick={handleCopy}
                className='p-1.5 rounded-md text-white transition z-10 cursor-pointer'
                aria-label='Copy code to clipboard'
              >
                {isCopied ? (
                  <CheckIcon className='size-4 text-green-400' />
                ) : (
                  <ClipboardIcon className='size-4' />
                )}
              </button>
            )}
          </div>
        )}
        <Highlight theme={themes.vsDark} code={activeCode} language={activeLanguage}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} block w-full p-4 text-sm overflow-x-auto`}
              style={{ ...style, margin: 0, maxWidth: '100%' }}
            >
              {tokens.map((line, i) => {
                const { key, ...lineProps } = getLineProps({ line, key: i })
                return (
                  <div key={key} {...lineProps}>
                    {line.map((token, j) => {
                      const { key: tokenKey, ...tokenProps } = getTokenProps({
                        token,
                        key: j,
                      })
                      return (
                        <span key={tokenKey} {...tokenProps}>
                          {token.content}
                        </span>
                      )
                    })}
                  </div>
                )
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}