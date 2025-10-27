import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-zinc-950 py-24">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div className="h-[32px] w-[104px]">
              <Image
                src="/images/logo-color.svg"
                alt="Cue"
                width={104}
                height={32}
                className="h-full w-full brightness-0 invert"
              />
            </div>

            {/* Copyright Text */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-normal leading-[20px] text-zinc-400">
                © 2025 Cue - Smart AI Meeting Notes by 44pixels. All rights reserved.
              </p>
              <p className="text-[14px] font-normal leading-[20px] text-zinc-400">
                iOS 16.6 or later required.{" "}
                <a
                  href="https://apps.apple.com"
                  className="underline transition-colors hover:text-white"
                >
                  Download on the App Store
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right Side - QR Code */}
          <div className="flex flex-col items-center gap-3">
            {/* QR Code Container */}
            <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[16px] bg-white p-3">
              <Image
                src="/images/qr-code.png"
                alt="Download Cue QR Code"
                width={96}
                height={96}
                className="h-full w-full"
              />
            </div>
            <p className="text-[14px] font-normal leading-[20px] text-zinc-400">
              Try for free
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
