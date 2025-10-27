import Image from "next/image";

interface TrustmarkCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

export default function TrustmarkCard({
  icon,
  title,
  description,
  iconAlt,
}: TrustmarkCardProps) {
  return (
    <div
      className="flex min-h-[200px] w-full flex-col rounded-[20px] border border-zinc-200 bg-white p-6 sm:min-h-[220px] sm:p-8 md:min-h-[232px] md:p-[48px]"
      style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.08)' }}
    >
      {/* Icon */}
      <div className="mb-3 h-[40px] w-[40px] md:mb-[16px]">
        <Image
          src={icon}
          alt={iconAlt}
          width={40}
          height={40}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 md:gap-[4px]">
        <h3 className="text-[16px] font-bold leading-[24px] text-zinc-950">
          {title}
        </h3>
        <p className="text-[15px] font-normal leading-[22px] text-zinc-500 sm:text-[16px] sm:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}
