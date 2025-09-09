import {
  BadgeCheck,
  ShieldCheck,
  UserCheck,
  Lightbulb,
  Timer,
  Users,
} from "lucide-react";
import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";

const coreValues = [
  {
    label: "Reliability",
    description:
      "We consistently deliver on our promises, ensuring our clients can depend on us at every step.",
    icon: BadgeCheck,
  },
  {
    label: "Integrity",
    description:
      "We act with honesty, transparency, and strong ethical principles in all business dealings.",
    icon: ShieldCheck,
  },
  {
    label: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. We tailor solutions to meet their needs and exceed expectations.",
    icon: UserCheck,
  },
  {
    label: "Innovation",
    description:
      "We embrace technology and creativity to develop forward-thinking solutions that optimize logistics operations.",
    icon: Lightbulb,
  },
  {
    label: "Efficiency",
    description:
      "We strive to streamline processes and reduce waste, delivering smarter and faster logistics outcomes.",
    icon: Timer,
  },
  {
    label: "Teamwork",
    description:
      "We work collaboratively, leveraging our diverse strengths to deliver unified, exceptional results.",
    icon: Users,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row text-gray-900 px-6 md:px-16 py-16 gap-10">
      {/* Left Section */}
      <div className="flex-1">
        <Tagline label="Our Core Values" className="mb-4" />
        <ColoredTitle
          title="Building Trust, Delivering Excellence"
          className="text-3xl max-w-xl mb-4"
          highlightWords={["Building", "Excellence"]}
          highlightColor="text-blue-800"
        />
        <p className="text-lg font-light text-gray-700 max-w-lg">
          At our core, we believe in fostering trust and delivering exceptional results. These values guide every decision we make and every action we take.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-6">
        {coreValues.map(({ label, description, icon: Icon }, index) => (
          <div
            key={index}
            className="flex flex-col p-4 rounded-lg border hover:border-blue-950 border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="rounded-full bg-gray-300 p-1 border border-gray-100 text-blue-950">
                <Icon size={16} />
              </span>
              <span className="flex items-center justify-center px-4 rounded-full text-center text-xs font-light h-6 bg-[#E0E6F4] text-blue-950">
                {label}
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
