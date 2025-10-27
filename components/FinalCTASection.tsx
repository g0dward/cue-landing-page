import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-32">
      {/* Background Gradient */}
      <div className="absolute left-1/2 top-0 h-full min-w-[1440px] w-full -translate-x-1/2">
        <Image
          src="/images/background-desktop.png"
          alt=""
          fill
          className="object-cover object-top"
          priority={false}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[966px] flex-col items-center text-center px-4 sm:px-8">
        {/* App Store Badge */}
        <div className="mb-6 h-[32px] w-[78px] overflow-hidden md:mb-8 md:h-[40px] md:w-[98px]">
          <Image
            src="/images/app-store-feature.svg"
            alt="Featured on App Store"
            width={98}
            height={40}
            priority={false}
            className="h-full w-full"
          />
        </div>

        {/* Headline */}
        <h2 className="mb-6 text-[36px] font-black leading-[40px] text-zinc-950 sm:text-[48px] sm:leading-[56px] md:mb-8 md:text-[72px] md:leading-[80px]">
          Ready to Transform Your Meetings?
        </h2>

        {/* Subheading */}
        <p className="mb-8 px-4 text-[16px] font-normal leading-[24px] text-zinc-500 sm:text-[18px] sm:leading-[28px] md:mb-10">
          Join thousands of professionals who trust Cue to capture every important moment.
          <br className="hidden sm:block" />
          Start your free trial today—no credit card required.
        </p>

        {/* CTA Button */}
        <button className="rounded-[100px] bg-zinc-950 px-8 py-4 text-[18px] font-bold leading-[24px] text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2">
          Start Free Trial
        </button>

        {/* Small text */}
        <p className="mt-4 text-[12px] leading-[20px] text-zinc-500">
          No credit card required
        </p>
      </div>
    </section>
  );
}
