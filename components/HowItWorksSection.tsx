export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Open Cue Before Your Meeting",
      description:
        "Launch the app and start recording with one tap. Works for in-person, Zoom, or phone conversations.",
      bgColor: "bg-[#e8faf3]",
    },
    {
      number: "2",
      title: "Stay Fully Present",
      description:
        "Participate without distraction. No visible recording indicators to others.",
      bgColor: "bg-[#e9f3ff]",
    },
    {
      number: "3",
      title: "Get Instant Summaries",
      description:
        "Walk out with transcripts (95%+ accuracy), highlights, and action items automatically generated.",
      bgColor: "bg-[#f5eefd]",
    },
  ];

  return (
    <section className="relative w-full bg-white py-36">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Separator */}
        <div className="mb-36 h-px w-full bg-zinc-200" />

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-[966px] text-center md:mb-16">
          <h2 className="text-[36px] font-black leading-[44px] text-zinc-950 sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[48px]">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`${step.bgColor} flex flex-col items-center gap-6 rounded-[20px] p-12 text-center`}
            >
              {/* Number Circle */}
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white">
                <span className="text-[32px] font-bold leading-[48px] text-zinc-950">
                  {step.number}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-bold leading-[24px] text-zinc-950">
                  {step.title}
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-zinc-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
