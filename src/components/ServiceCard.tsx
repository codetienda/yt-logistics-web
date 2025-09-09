import { type LucideIcon, MoveRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  iconBg = "#FFDBE2",
}: ServiceCardProps) => {
  return (
    <div className="group flex w-full border flex-col md:flex-row text-blue-950 border-blue-950/30 hover:bg-[#011E62] hover:text-white p-4 rounded-xl gap-4 transition">
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-1">
        <span
          className={`rounded-sm p-2 border text-blue-900 border-gray-100`}
          style={{ backgroundColor: iconBg }}
        >
          <Icon size={20} />
        </span>
        <p className="text-xl font-medium tracking-wider">{title}</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-4 flex-1">
        <p className="text-sm font-light tracking-wider">{description}</p>
        <span className="rounded-full bg-blue-950 group-hover:bg-white p-2 border border-gray-100 text-white group-hover:text-blue-950 transition">
          <MoveRight size={12} />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
