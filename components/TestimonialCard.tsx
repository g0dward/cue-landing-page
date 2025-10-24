import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  profileImage: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  profileImage,
}: TestimonialCardProps) {
  return (
    <div className="flex h-[288px] w-[416px] shrink-0 flex-col gap-8 rounded-[20px] border border-zinc-200 bg-white p-8">
      {/* Quote */}
      <p className="flex-1 text-[16px] font-normal leading-[24px] text-zinc-500">
        {quote}
      </p>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[16px] border border-zinc-200">
          <Image
            src={profileImage}
            alt={name}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-bold leading-[20px] text-zinc-950">
            {name}
          </p>
          <p className="text-[14px] font-normal leading-[20px] text-zinc-500">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
