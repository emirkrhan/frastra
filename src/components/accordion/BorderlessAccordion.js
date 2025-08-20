import { useState } from "react";
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
        const contentId = `accordion-content-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div key={index} className="bg-secondary rounded-md p-4">
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-paragraph-size font-paragraph text-paragraph">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4 text-descriptive" />
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
                    <p className="text-descriptive-size font-descriptive text-descriptive">{item.answer}</p>
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
