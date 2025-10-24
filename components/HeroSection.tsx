"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white pt-[80px] md:pt-[120px]">
      {/* Background Image */}
      <div className="absolute left-1/2 top-0 h-[800px] w-full min-w-[1440px] -translate-x-1/2 md:h-[1200px]">
        <Image
          src="/images/background-desktop.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8">
        {/* Hero Text Content */}
        <motion.div
          className="mx-auto flex max-w-[966px] flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* App Store Badge */}
          <div className="mb-4 h-[32px] w-[78px] overflow-hidden md:mb-[24px] md:h-[40px] md:w-[98px]">
            <Image
              src="/images/app-store-feature.svg"
              alt="Featured on App Store"
              width={98}
              height={40}
              priority
              className="h-full w-full"
            />
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-[36px] font-black leading-[40px] text-zinc-950 sm:text-[48px] sm:leading-[56px] md:mb-[24px] md:text-[72px] md:leading-[80px]">
            Stay in the conversation.
            <br />
            Never miss a detail.
          </h1>

          {/* Subheading */}
          <p className="mb-6 px-4 text-[16px] font-normal leading-[24px] text-zinc-500 sm:text-[18px] sm:leading-[28px] md:mb-[32px]">
            AI meeting notes that capture every word while you stay fully engaged. No bot interruptions.
            <br className="hidden sm:block" />
            No manual note-taking. Just accurate summaries delivered automatically.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col items-center gap-3 md:gap-[16px]">
            <button
              className="rounded-[100px] bg-zinc-950 px-6 py-3 text-[16px] font-bold leading-[24px] text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-[18px]"
              aria-label="Start free trial"
            >
              Start Free Trial
            </button>
            <p className="text-[12px] leading-[20px] text-zinc-500">
              No credit card required
            </p>
          </div>
        </motion.div>

        {/* Hero Image Section */}
        <div className="relative mx-auto mt-8 h-[240px] w-full overflow-hidden sm:h-[320px] md:mt-[48px] md:h-[480px] md:max-w-[1440px]">
          <Image
            src="/images/hero-temporary.png"
            alt="Cue app interface showing meeting notes"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
