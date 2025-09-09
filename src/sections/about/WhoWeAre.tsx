import ColoredTitle from "../../components/ColoredTitle";
import aboutuspic from "../../assets/hero1.jpg";
import Tagline from "../../components/Tagline";
import { METRICS } from "../../constants";


const WhoWeAre = () => {
  return (
    <section className="bg-white text-gray-900 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-10">
        <div className="flex-1 flex flex-col">
          <Tagline label="Who we are" />

          <ColoredTitle
            title="We specialize in delivering logistics and supply chain solutions"
            highlightWords={["specialize", "streamline", "solutions"]}
            highlightColor="text-blue-800"
            className="text-2xl sm:text-3xl mt-2 mb-6"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
                Our main aim is to reduce costs, and ensure timely delivery. From
                warehousing and distribution to last-mile delivery and freight
                forwarding, our expertise spans every link of the supply chain
                to help businesses move smarter and grow faster.
              </p>
            </div>
            <span className="bg-blue-100 p-3 border-b-4 border-blue-900 rounded-sm">
              We simplify logistics by offering end-to-end, tech-driven solutions
              that remove complexity from the supply chain. Through smart
              planning, real-time visibility, and seamless execution, we empower
            </span>
          </div>
        </div>

        <div className="flex-1 w-full">
          <img
            src={aboutuspic}
            alt="Truck"
            className="w-full h-96 object-cover rounded-md"
          />
        </div>
      </div>

      <div className="grid p-10 gap-4 grid-cols-2 md:grid-cols-4">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col border p-6 rounded-lg border-gray-200/50 gap-2 justify-center items-center"
          >
            <h3 className="text-4xl font-extrabold">{metric.value}</h3>
            <p className="text-sm font-light text-center">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
