"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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

export default function InsightsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      const container = containerRef.current;
      if (container) {
        const cardWidth = container.scrollWidth / cardsData.length;
        const newX = -newIndex * (cardWidth + 24); // 24px gap
        animate(x, newX, {
          type: "spring",
          stiffness: 300,
          damping: 30,
        });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < cardsData.length - 3) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const container = containerRef.current;
      if (container) {
        const cardWidth = container.scrollWidth / cardsData.length;
        const newX = -newIndex * (cardWidth + 24); // 24px gap
        animate(x, newX, {
          type: "spring",
          stiffness: 300,
          damping: 30,
        });
      }
    }
  };

  return (
    <section className="relative w-full bg-white py-18">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Separator */}
        <div className="mb-36 h-px w-full bg-zinc-200" />

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
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -(cardsData.length - 3) * 450,
              right: 0,
            }}
            dragElastic={0.1}
            onDragEnd={(e, { offset, velocity }) => {
              const container = containerRef.current;
              if (!container) return;

              const cardWidth = 426; // approximate card width + gap
              const swipeThreshold = 50;

              if (offset.x < -swipeThreshold && currentIndex < cardsData.length - 3) {
                handleNext();
              } else if (offset.x > swipeThreshold && currentIndex > 0) {
                handlePrevious();
              } else {
                // Snap back to current position
                const cardWidthWithGap = cardWidth + 24;
                const currentX = -currentIndex * cardWidthWithGap;
                animate(x, currentX, {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                });
              }
            }}
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="min-w-[340px] sm:min-w-[380px] lg:min-w-[426px]"
              >
                <InsightsCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  imageAlt={card.imageAlt}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {/* Left Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-4 w-4 text-zinc-950" />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-1">
            {cardsData.slice(0, cardsData.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  const cardWidthWithGap = 450;
                  const newX = -index * cardWidthWithGap;
                  animate(x, newX, {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  });
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-zinc-950" : "bg-zinc-200"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === cardsData.length - 3}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next card"
          >
            <ChevronRight className="h-4 w-4 text-zinc-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
