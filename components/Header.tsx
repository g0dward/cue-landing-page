import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 h-[80px] md:h-[120px]">
      <div className="mx-auto flex h-full max-w-[1296px] items-center justify-between px-4 sm:px-8 md:px-[72px]">
        {/* Logo */}
        <div className="h-[24px] w-[78px] md:h-[32px] md:w-[104px]">
          <Image
            src="/images/logo-color.svg"
            alt="Cue"
            width={104}
            height={32}
            priority
            className="h-full w-full"
          />
        </div>

        {/* CTA Button */}
        <button
          className="h-[44px] w-[150px] rounded-[100px] bg-zinc-950 text-center text-[16px] font-bold leading-[24px] text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 md:h-[56px] md:w-[194px] md:text-[18px]"
          aria-label="Start free trial"
        >
          Start Free Trial
        </button>
      </div>
    </header>
  );
}
