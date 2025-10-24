"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InsightsCard from "./InsightsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  {
    image: "/images/card-image-1.png",
    title: "Ask Questions About Your Meetings",
    description:
      'Get instant answers from your meeting history. "What did we decide about the Q2 budget?" Cue surfaces exactly what you need.',
    imageAlt: "AI assistant answering questions",
  },
  {
    image: "/images/card-image-2.png",
    title: "Get Meeting Dynamics Feedback",
    description:
      "Analyze speaking patterns and participation balance to run more effective, inclusive meetings.",
    imageAlt: "Meeting dynamics visualization",
  },
  {
    image: "/images/card-image-3.png",
    title: "Improve Your Conversation",
    description:
      "Discover patterns in how you present ideas and engage with stakeholders, with specific suggestions for improvement.",
    imageAlt: "Conversation improvement insights",
  },
  {
    image: "/images/card-image-1.png",
    title: "Track Action Items",
    description:
      "Never lose track of commitments. Cue automatically identifies and organizes action items from every meeting.",
    imageAlt: "Action items tracking interface",
  },
  {
    image: "/images/card-image-2.png",
    title: "Share Key Moments",
    description:
      "Create and share highlights from your meetings. Perfect for stakeholder updates and team alignment.",
    imageAlt: "Sharing meeting highlights",
  },
  {
    image: "/images/card-image-3.png",
    title: "Search Your History",
    description:
      "Find any discussion instantly. Search across all your meetings to surface important context when you need it.",
    imageAlt: "Meeting history search",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function InsightsSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < 2) {
      setPage([newPage, newDirection]);
    }
  };

  // Calculate which cards to show based on page
  const startIndex = page * 3;
  const visibleCards = cardsData.slice(startIndex, startIndex + 3);

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Separator */}
        <div className="mb-16 h-px w-full bg-zinc-200 md:mb-24" />

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-[966px] text-center md:mb-16">
          <h2 className="mb-4 text-[36px] font-black leading-[44px] text-zinc-950 sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[48px]">
            Insights & An AI Assistant
          </h2>
          <p className="text-[16px] font-normal leading-[26px] text-zinc-500 sm:text-[18px] sm:leading-[28px]">
            Cue goes beyond passive recording—it's your intelligent meeting
            partner that helps you understand, improve, and act on every
            conversation.
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 500, damping: 40 },
                opacity: { duration: 0.15 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
              style={{ touchAction: "pan-y" }}
            >
              {visibleCards.map((card, index) => (
                <div key={startIndex + index} className="pointer-events-none">
                  <InsightsCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    imageAlt={card.imageAlt}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {/* Left Button */}
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous cards"
          >
            <ChevronLeft className="h-4 w-4 text-zinc-950" />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-1">
            {[0, 1].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setPage([dotIndex, dotIndex > page ? 1 : -1])}
                className={`h-2 w-2 rounded-full transition-colors ${
                  page === dotIndex ? "bg-zinc-950" : "bg-zinc-200"
                }`}
                aria-label={`Go to page ${dotIndex + 1}`}
              />
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => paginate(1)}
            disabled={page === 1}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next cards"
          >
            <ChevronRight className="h-4 w-4 text-zinc-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
