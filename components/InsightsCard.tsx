import Image from "next/image";

interface InsightsCardProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

export default function InsightsCard({
  image,
  title,
  description,
  imageAlt,
}: InsightsCardProps) {
  return (
    <div className="flex w-full flex-col gap-8">
      {/* Rotated Image Container */}
      <div className="relative h-[416px] w-full overflow-hidden rounded-[20px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[16px] font-bold leading-[24px] text-zinc-950">
          {title}
        </h3>
        <p className="text-[16px] font-normal leading-[24px] text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}
