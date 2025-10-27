import Image from "next/image";

export default function UseCasesSection() {
  const useCases = [
    {
      image: "/images/cue-why-client-calls.jpg",
      title: "Client Calls",
      description:
        "Stay fully present with clients while capturing every commitment and insight for perfect follow-up.",
    },
    {
      image: "/images/cue-why-research-interviews.jpg",
      title: "Research Interviews",
      description:
        "Focus on your subjects while Cue captures every nuance for qualitative analysis and academic research.",
    },
    {
      image: "/images/cue-why-healthcare.jpg",
      title: "Healthcare Meetings",
      description:
        "Document patient consultations with HIPAA-compliant, on-device storage and 95%+ medical terminology accuracy.",
    },
    {
      image: "/images/cue-why-team-meetings.jpg",
      title: "Team Meetings",
      description:
        "Keep your team aligned with accurate notes and action items from every standup, planning session, and retrospective.",
    },
    {
      image: "/images/cue-why-lectures.jpg",
      title: "Lectures and Training",
      description:
        "Never miss important concepts. Get complete transcripts of lectures and study sessions automatically.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-18">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Separator */}
        <div className="mb-36 h-px w-full bg-zinc-200" />

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-[966px] text-center md:mb-16">
          <h2 className="text-[36px] font-black leading-[44px] text-zinc-950 sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[48px]">
            Why Choose Cue
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="flex flex-col gap-6">
          {/* Top row - 3 cards on desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.slice(0, 3).map((useCase, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-[20px] bg-neutral-50"
              >
                {/* Image */}
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="text-[18px] font-bold leading-[26px] text-zinc-950">
                    {useCase.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-[24px] text-zinc-500">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 cards centered on desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-auto lg:w-[calc(66.666%-8px)] lg:grid-cols-2">
            {useCases.slice(3, 5).map((useCase, index) => (
              <div
                key={index + 3}
                className="flex flex-col overflow-hidden rounded-[20px] bg-neutral-50"
              >
                {/* Image */}
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="text-[18px] font-bold leading-[26px] text-zinc-950">
                    {useCase.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-[24px] text-zinc-500">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center md:mt-24">
          <button className="rounded-[100px] bg-zinc-950 px-8 py-4 text-[18px] font-bold leading-[24px] text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2">
            Try Cue Free Today
          </button>
          <p className="text-[14px] font-normal leading-[20px] text-zinc-500">
            Download on iOS • No credit card needed • Enterprise and educational
            pricing available
          </p>
        </div>
      </div>
    </section>
  );
}
