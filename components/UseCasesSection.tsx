import Image from "next/image";

export default function UseCasesSection() {
  const useCases = [
    {
      image: "/images/cue-why-team-meetings.jpg",
      title: "Team Meetings",
      description:
        "Keep your team aligned with accurate notes and action items from every standup, planning session, and retrospective.",
    },
    {
      image: "/images/cue-why-client-calls.jpg",
      title: "Client Calls",
      description:
        "Stay fully present with clients while capturing every commitment and insight for perfect follow-up.",
    },
    {
      image: "/images/cue-why-healthcare.jpg",
      title: "Healthcare",
      description:
        "Document patient consultations with HIPAA-compliant, on-device storage and 95%+ medical terminology accuracy.",
    },
    {
      image: "/images/cue-why-research-interviews.jpg",
      title: "Research Interviews",
      description:
        "Focus on your subjects while Cue captures every nuance for qualitative analysis and academic research.",
    },
    {
      image: "/images/cue-why-lectures.jpg",
      title: "Lectures & Education",
      description:
        "Never miss important concepts. Get complete transcripts of lectures and study sessions automatically.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-8 md:px-[72px]">
        {/* Section Separator */}
        <div className="mb-16 h-px w-full bg-zinc-200 md:mb-24" />

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-[966px] text-center md:mb-16">
          <h2 className="mb-4 text-[36px] font-black leading-[44px] text-zinc-950 sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[48px]">
            Perfect For Every Conversation
          </h2>
          <p className="text-[16px] font-normal leading-[26px] text-zinc-500 sm:text-[18px] sm:leading-[28px]">
            From boardrooms to classrooms, Cue adapts to your needs
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
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
      </div>
    </section>
  );
}
