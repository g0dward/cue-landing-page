"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Cue record my meetings?",
    answer:
      "Cue uses advanced audio capture technology to record meetings directly on your device. It works seamlessly with in-person conversations, Zoom calls, and phone conversations without requiring any bot to join your meetings.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes, your data is completely secure. All recordings are stored locally on your device with end-to-end encryption. You have full control over what gets shared and with whom. We never access your recordings without your explicit permission.",
  },
  {
    question: "What makes Cue different from other meeting tools?",
    answer:
      "Unlike traditional meeting tools that use visible bots, Cue runs invisibly in the background. This means no awkward bot joining notifications, no recording warnings to clients, and no interruptions to the natural flow of conversation.",
  },
  {
    question: "How accurate are the transcriptions?",
    answer:
      "Cue delivers 95%+ transcription accuracy across various contexts including healthcare, legal, and academic settings. Our AI is specifically trained to handle multiple speakers, technical terminology, and different accents with high precision.",
  },
  {
    question: "Can I use Cue for in-person meetings?",
    answer:
      "Absolutely! Cue works perfectly for in-person meetings, phone calls, and video conferences. Simply open the app before your meeting starts, and it will capture everything with crystal-clear audio quality.",
  },
  {
    question: "What pricing plans are available?",
    answer:
      "We offer flexible pricing for individuals, teams, and enterprises. Start with our free trial to test all features. We also provide special pricing for educational institutions and non-profit organizations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Separator */}
        <div className="mb-16 h-px w-full bg-zinc-200 md:mb-24" />

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-[966px] text-center md:mb-16">
          <h2 className="text-[36px] font-black leading-[44px] text-zinc-950 sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[48px]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-[856px]">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[16px] border border-zinc-200 bg-white"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-neutral-50"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[18px] font-bold leading-[26px] text-zinc-950">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-6 w-6 text-zinc-950" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-zinc-200 px-6 pb-6 pt-4">
                        <p className="text-[16px] font-normal leading-[24px] text-zinc-500">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
