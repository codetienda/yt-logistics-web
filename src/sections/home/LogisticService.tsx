import {
  Truck,
  Boxes,
  Plane,
  Ship,
  Warehouse,
  Globe2,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";
import ServiceCard from "../../components/ServiceCard";

const services = [
  {
    title: "Custom Brokerage",
    description: "Navigating customs with ease",
    icon: Boxes,
    iconBg: "#E0E6F4",
  },
  {
    title: "Freight Forwarding",
    description: "Efficiently moving goods globally",
    icon: Plane,
    iconBg: "#E0E6F4",
  },
  {
    title: "Warehousing",
    description: "Secure and scalable storage",
    icon: Warehouse,
    iconBg: "#E0E6F4",
  },
  {
    title: "International Shipping",
    description: "Sea, air and land shipping solutions",
    icon: Ship,
    iconBg: "#E0E6F4",
  },
  {
    title: "Supply Chain Management",
    description: "Streamlining operations end-to-end",
    icon: Globe2,
    iconBg: "#E0E6F4",
  },
  {
    title: "Last Mile Delivery",
    description: "Reaching your customers' doors",
    icon: Truck,
    iconBg: "#E0E6F4",
  },
  {
    title: "Cargo Insurance",
    description: "Protecting your goods in transit",
    icon: ShieldCheck,
    iconBg: "#E0E6F4",
  },
  {
    title: "Inventory Management",
    description: "Tracking goods with precision",
    icon: PackageCheck,
    iconBg: "#E0E6F4",
  },
];

const LogisticServices = () => {
  return (
    <section className="bg-white flex flex-col items-center text-gray-900 md:mt-10 p-6 md:py-8 md:px-16">
      <Tagline label="Our Logistic Services" className="mb-4" />
      <ColoredTitle
        title="A wide range of logistic services, From expertly managing supply chains to forwarding goods efficiently"
        className="text-3xl max-w-4xl text-center mb-8"
        highlightWords={["wide", "range", "forwarding", "goods"]}
        highlightColor="text-blue-800"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full my-6 md:max-w-6xl">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default LogisticServices;
