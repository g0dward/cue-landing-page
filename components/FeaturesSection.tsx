"use client";

import { motion } from "framer-motion";
import TrustmarkCard from "./TrustmarkCard";

const features = [
  {
    icon: "/images/illustration-trustmark-blue.png",
    title: "Full Presence",
    description: "Participate actively in meetings without worrying about capturing details",
    iconAlt: "Full presence icon",
  },
  {
    icon: "/images/illustration-trustmark-red.png",
    title: "Zero Friction",
    description: "No bots to invite, no recording warnings to clients, no awkward setup",
    iconAlt: "Zero friction icon",
  },
  {
    icon: "/images/illustration-trustmark-purple.png",
    title: "Instant Clarity",
    description: "Walk out of every meeting with organized summaries and clear next steps",
    iconAlt: "Instant clarity icon",
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

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-white pb-18 pt-12 md:pt-12">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-[966px] text-center md:mb-[72px]">
          <h2 className="mb-3 text-[20px] font-bold leading-[28px] text-zinc-950 sm:text-[22px] sm:leading-[30px] md:mb-[12px] md:text-[24px] md:leading-[32px]">
            Stop choosing between taking notes and being present
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-zinc-500 sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            Cue runs in the background during any meeting—in person, on Zoom, or on calls—capturing everything with advanced AI that handles multiple speakers effortlessly. Get instant summaries, searchable transcripts, and automatic action items without lifting a finger.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-[24px] lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TrustmarkCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconAlt={feature.iconAlt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
