import Image from "next/image";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
  height: "tall" | "short";
}

export default function FeatureCard({
  image,
  title,
  description,
  imageAlt,
  height,
}: FeatureCardProps) {
  const isTall = height === "tall";

  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-neutral-50 ${
        isTall ? "h-[800px]" : "h-[388px]"
      }`}
    >
      {/* Image */}
      <div
        className={`relative ${
          isTall ? "h-[652px]" : "h-[240px]"
        } w-full`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-[48px] left-[48px] right-[48px]">
        <h3 className="mb-1 text-[16px] font-bold leading-[24px] text-zinc-950">
          {title}
        </h3>
        <p className="text-[16px] font-normal leading-[24px] text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}
