"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    image: "/images/feature-hero.png",
    title: "Instant Summaries & Actions",
    description:
      "Receive summaries and action items in seconds. Search, share, and connect seamlessly with your tools.",
    imageAlt: "Meeting summary interface",
    height: "tall" as const,
    gridPosition: "row-span-2",
  },
  {
    image: "/images/feature-record.png",
    title: "Invisible Background Recording",
    description:
      "Capture calls silently on your device. No bots, no alerts, only natural conversations every time.",
    imageAlt: "Background recording interface",
    height: "short" as const,
    gridPosition: "",
  },
  {
    image: "/images/feature-transcribe.png",
    title: "Never Miss a Word",
    description:
      "Get transcripts with 95%+ accuracy across speakers and contexts in healthcare, legal, and academia.",
    imageAlt: "Transcription interface",
    height: "short" as const,
    gridPosition: "",
  },
  {
    image: "/images/feature-language.png",
    title: "Multilingual & Organized",
    description:
      "Record in multiple languages with calendar integration that keeps meetings clear, simple, and on track.",
    imageAlt: "Multilingual features",
    height: "short" as const,
    gridPosition: "",
  },
  {
    image: "/images/feature-privacy.png",
    title: "Privacy-First & Secure",
    description:
      "Your recordings stay encrypted on your device. You decide what to share and keep full control of access.",
    imageAlt: "Privacy and security features",
    height: "short" as const,
    gridPosition: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function GetStartedSection() {
  return (
    <section className="relative w-full bg-white py-9 md:py-18">
      {/* Section Separator - Full Width */}
      <div className="mb-18 px-4 sm:px-8 md:mb-36 md:px-[72px]">
        <div className="h-px w-full bg-zinc-200" />
      </div>

      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-[36px] font-black leading-[44px] text-zinc-950 sm:text-[42px] sm:leading-[48px] md:mb-24 md:text-[48px] md:leading-[48px]">
          Get started in seconds
        </h2>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* First card - tall, takes 2 rows on desktop */}
          <motion.div
            className="lg:row-span-2"
            variants={itemVariants}
          >
            <FeatureCard
              image={features[0].image}
              title={features[0].title}
              description={features[0].description}
              imageAlt={features[0].imageAlt}
              height={features[0].height}
            />
          </motion.div>

          {/* Remaining cards - short */}
          {features.slice(1).map((feature, index) => (
            <motion.div key={index + 1} variants={itemVariants}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
                imageAlt={feature.imageAlt}
                height={feature.height}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
