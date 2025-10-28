"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Working at a healthcare network, security is non-negotiable. Cue's privacy-first approach with on-device storage gave us the confidence to use it for operational meetings. The 95% accuracy claim is real—we've tested it extensively.",
    name: "James Chen",
    title: "VP of Operations",
    profileImage: "/images/profile-james-chen.png",
  },
  {
    quote:
      "Our research relies on accurate transcription. Cue delivers 95%+ accuracy on academic interviews with psychology terms and multiple speakers. It's saved our lab over $15,000 a year in transcription costs while staying fully IRB compliant.",
    name: "Dr. Sarah Martinez",
    title: "Associate Professor",
    profileImage: "/images/profile-sarah-martinez.png",
  },
  {
    quote:
      "Cue changed how I run client calls. I used to miss details while trying to jot down notes. Now I'm 100% present and still have perfect records of what was discussed. It saves me 30 minutes per call.",
    name: "Amanda Chen",
    title: "Sales Director",
    profileImage: "/images/profile-amanda-chen.png",
  },
  {
    quote:
      "The 'no bot joining' feature is great. My clients don't see a recording notice, so the conversation feels natural. I still get the notes I need without the awkwardness.",
    name: "Sarah Kim",
    title: "Consultant",
    profileImage: "/images/profile-sarah-kim.png",
  },
  {
    quote:
      "As a Product Manager with 6–8 meetings daily, Cue is my lifeline. Automatic action items ensure nothing falls through the cracks. I can share insights with my team instantly.",
    name: "Marcus Rodriguez",
    title: "Senior Product Manager",
    profileImage: "/images/profile-marcus-rodriguez.png",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Get the total width of content
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;

      // Reset when we've scrolled past half the content (since we duplicated it)
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full overflow-hidden bg-white py-9 md:py-18">
      {/* Section Separator - Full Width */}
      <div className="mb-18 px-4 sm:px-8 md:mb-36 md:px-[72px]">
        <div className="h-px w-full bg-zinc-200" />
      </div>

      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-[966px] text-center md:mb-16">
          <h2 className="mb-4 text-[36px] font-black leading-[44px] text-zinc-950 sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[48px]">
            What Users Are Saying
          </h2>
          <p className="text-[16px] font-normal leading-[26px] text-zinc-500 sm:text-[18px] sm:leading-[28px]">
            Cue helps teams in business, legal and healthcare save 6+ hours a
            week
          </p>
        </div>
      </div>

      {/* Scrolling Testimonials - Full Width */}
      <div className="relative w-full py-4" style={{ overflowX: "hidden", overflowY: "visible" }}>
        <div
          ref={scrollRef}
          className="flex gap-6 px-4 sm:px-8 md:px-[72px]"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              profileImage={testimonial.profileImage}
            />
          ))}
        </div>

        {/* Fade gradients on edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
