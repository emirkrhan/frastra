// 1. Component Source Code
const defaultAccordionComponentCode = `'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export function DefaultAccordion({ items = [], allowMultiple = true }) {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      const isOpen = newSet.has(index)

      if (allowMultiple) {
        isOpen ? newSet.delete(index) : newSet.add(index)
      } else {
        newSet.clear()
        if (!isOpen) newSet.add(index)
      }

      return newSet
    })
  }

  return (
    <div className='w-full max-w-md'>
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const contentId = \`accordion-content-\${index}\`
        const buttonId = \`accordion-button-\${index}\`

        return (
          <div key={index} className='border-b border-white/10 last:border-b-0'>
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
              className='w-full flex items-center justify-between py-4 text-left'
            >
              <span className='text-sm font-medium text-white'>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className='w-4 h-4 text-white/70' />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='overflow-hidden'
                >
                  <div className='pb-4'>
                    <p className='text-sm text-white/70'>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}`;

// 2. Usage Example
const defaultAccordionUsage = `const accordionItems = [
  {
    question: 'What is Frastra?',
    answer: 'Frastra is a collection of beautifully designed, accessible, and customizable components that you can copy and paste into your projects.',
  },
  {
    question: 'How do I use the components?',
    answer: 'Simply find the component you want to use, copy the code from the "Component" tab, and paste it into your project.',
  },
  {
    question: 'Is it a component library?',
    answer: 'No, it is not a component library. It is a collection of components that you can use to build your own component library.',
  },
]

<DefaultAccordion items={accordionItems} />`;

// --- Single Accordion ---

const singleAccordionComponentCode = `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function SingleAccordion({ items = [] }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-md">
      {items.map((item, index) => {
        const isOpen = openItem === index;
        const contentId = \`accordion-content-\${index}\`;
        const buttonId = \`accordion-button-\${index}\`;

        return (
          <div key={index} className="border-b border-white/10 last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-medium text-white">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4 text-white/70" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4">
                    <p className="text-sm text-white/70">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}`;

const singleAccordionUsage = `const accordionItems = [
  {
    question: 'What is Frastra?',
    answer: 'Frastra is a collection of beautifully designed, accessible, and customizable components that you can copy and paste into your projects.',
  },
  {
    question: 'How do I use the components?',
    answer: 'Simply find the component you want to use, copy the code from the "Component" tab, and paste it into your project.',
  },
  {
    question: 'Is it a component library?',
    answer: 'No, it is not a component library. It is a collection of components that you can use to build your own component library.',
  },
]

<SingleAccordion items={accordionItems} />`;

// --- Borderless Accordion ---

const borderlessAccordionComponentCode = `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function BorderlessAccordion({ items = [], allowMultiple = true }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      const isOpen = newSet.has(index);

      if (allowMultiple) {
        isOpen ? newSet.delete(index) : newSet.add(index);
      } else {
        newSet.clear();
        if (!isOpen) newSet.add(index);
      }

      return newSet;
    });
  };

  return (
    <div className="w-full max-w-md space-y-2">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        const contentId = \`accordion-content-\${index}\`;
        const buttonId = \`accordion-button-\${index}\`;

        return (
          <div key={index} className="bg-white/5 rounded-md p-4">
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-sm font-medium text-white">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4 text-white/70" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3">
                    <p className="text-sm text-white/70">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
`;

const borderlessAccordionUsage = `const accordionItems = [
  {
    question: 'What is Frastra?',
    answer: 'Frastra is a collection of beautifully designed, accessible, and customizable components that you can copy and paste into your projects.',
  },
  {
    question: 'How do I use the components?',
    answer: 'Simply find the component you want to use, copy the code from the "Component" tab, and paste it into your project.',
  },
  {
    question: 'Is it a component library?',
    answer: 'No, it is not a component library. It is a collection of components that you can use to build your own component library.',
  },
]

<BorderlessAccordion items={accordionItems} />`;

// 3. Combined exports
export const defaultAccordionTabs = [
  { label: "Component", code: defaultAccordionComponentCode },
  { label: "Usage", code: defaultAccordionUsage },
];

export const singleAccordionTabs = [
  { label: "Component", code: singleAccordionComponentCode },
  { label: "Usage", code: singleAccordionUsage },
];

export const borderlessAccordionTabs = [
  { label: "Component", code: borderlessAccordionComponentCode },
  { label: "Usage", code: borderlessAccordionUsage },
];
