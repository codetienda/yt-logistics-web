import { ArrowRight } from "lucide-react";
import getQuote from "../assets/img.png";

const GetQuoteSection = () => {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-between mx-5 mb-5 px-10 py-16 rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${getQuote})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-black/10 z-0 rounded-3xl" />

      {/* Left Content */}
      <div className="relative z-10 max-w-2xl">
        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        Optimize Your Logistics with Confidence!
        </h3>
        <p className="text-white text-base font-light leading-relaxed">
        Join global partners who trust us for reliable, precise, and dedicated logistics solutions. We ensure seamless operations that boost efficiency, foster growth, and create lasting value.
        </p>
      </div>

      {/* Button */}
      <div className="absolute bottom-6 right-10 z-10">
        <button className="group inline-flex items-center justify-between gap-3 text-sm font-normal border cursor-pointer border-[#011E62] pl-6 pr-3 py-1.5 rounded-full bg-white text-[#011E62] hover:text-white hover:bg-blue-950 transition-all duration-200">
            <span>Get a Quote</span>
            <span className="rounded-full p-1 bg-white text-[#011E62] border border-[#011E62] group-hover:bg-[#011E62] group-hover:text-white group-hover:border-white transition-all duration-200">
            <ArrowRight size={12} className="transition-all duration-200" />
        </span>
  </button>
</div>
    </section>
  );
};

export default GetQuoteSection;
