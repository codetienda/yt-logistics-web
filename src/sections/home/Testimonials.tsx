import { Facebook, InstagramIcon, TwitterIcon } from "lucide-react";
import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";

const testimonials = [
  {
    name: "Carmel Rander",
    position: "Managing Director",
    location: "New York",
    title: "Reliable and Consistent",
    message:
      "Their commitment to delivering on time, every time, is unmatched. We've streamlined our operations thanks to their dependable freight forwarding.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
  },
  {
    name: "Elena Cruz",
    position: "Logistics Manager",
    location: "Madrid",
    title: "Truly Global Partner",
    message:
      "Working with them has been a game-changer. They understand global logistics better than anyone we've worked with.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/34.jpg",
  },
  {
    name: "Yusuf Kamara",
    position: "Operations Head",
    location: "Nairobi",
    title: "Professional and Efficient",
    message:
      "Their team goes above and beyond. Communication is clear, delivery is prompt, and the service is world-class.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/20.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white flex flex-col px-6 md:px-20 py-16 gap-6 text-gray-900">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-[0.6]">
          <Tagline label="Testimonials" className="mb-4" />
          <ColoredTitle
            title="Trusted by Worldwide"
            className="text-3xl max-w-xl mb-4"
            highlightWords={["Trusted"]}
            highlightColor="text-blue-800"
          />
        </div>
        <div className="flex-[1.4]">
          <p className="text-lg font-light text-gray-700">
            Trusted by global partners for our unwavering reliability, precision, and dedication. We deliver seamless logistics solutions that drive growth, efficiency, and lasting impact.
          </p>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5 flex justify-between flex-col gap-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">
                  {t.position} – {t.location}
                </p>
              </div>
            </div>
            <h3 className="text-base font-semibold text-blue-900">{t.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{t.message}</p>

            <div className="flex gap-2 mt-2">
              <span className="rounded-full bg-blue-950 p-2 border border-gray-100 text-white hover:bg-white hover:text-blue-950 transition">
                <Facebook size={12} />
              </span>
              <span className="rounded-full bg-blue-400 p-2 border border-gray-100 text-white hover:bg-white hover:text-blue-950 transition">
                <TwitterIcon size={12} />
              </span>
              <span className="rounded-full bg-gradient-to-tr from-pink-600 to-purple-500 p-2 border border-gray-100 text-white hover:bg-white hover:text-blue-950 transition">
                <InstagramIcon size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex gap-2 mt-2 justify-center">
        <span className="w-3 h-3 rounded-full bg-blue-950 transition"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300 transition"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300 transition"></span>
      </div>
    </section>
  );
};

export default Testimonials;
