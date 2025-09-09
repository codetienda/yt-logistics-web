import { type LucideIcon, MoveRight } from "lucide-react";

interface ServicesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg?: string;
}

const ServicesCard = ({
  icon: Icon,
  title,
  description,
  iconBg = "#FFDBE2",
}: ServicesCardProps) => {
  return (
    <div className="group flex w-full border flex-col text-blue-950 border-blue-950/30 hover:bg-[#011E62] hover:text-white p-6 rounded-xl gap-4 transition relative">
      
      {/* Icon */}
      <span
        className={`rounded-md w-13 p-3 border text-blue-900 border-gray-100`}
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={24} />
      </span>

      {/* Title */}
      <p className="text-lg font-semibold tracking-wide mt-2">{title}</p>

      {/* Description */}
      <p className="text-sm font-light leading-relaxed flex-1">
        {description}
      </p>

      {/* Bottom-right Arrow Button */}
      <span className="absolute bottom-4 right-4 rounded-full bg-blue-950 group-hover:bg-white p-2 border border-gray-100 text-white group-hover:text-blue-950 transition">
        <MoveRight size={16} />
      </span>
    </div>
  );
};

export default ServicesCard;
