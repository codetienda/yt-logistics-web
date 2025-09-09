import ColoredTitle from "../../components/ColoredTitle";
import truck from "../../assets/truck.png";
import Tagline from "../../components/Tagline";

const VisionMission = () => {
  return (
    <section className="bg-white text-gray-900 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-10">
        <div className="flex-1 flex flex-col">
          <Tagline label="Vision & Mission" />
          
          <ColoredTitle
            title="We aim to revolutionize logistics with innovative solutions and a customer-centric approach."
            highlightWords={['revolutionize', '-', 'customer', 'centric']}
            highlightColor="text-blue-800"
            className="text-2xl sm:text-3xl mt-2 mb-6"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex text-lg flex-row gap-1 font-bold text-blue-900 items-center min-w-[70px] sm:items-start md:flex-col">
                <h5>01.</h5>
                <h5>Vision</h5>
              </div>
              <p className="text-gray-700 text-base sm:text-sm font-light leading-relaxed">
                To revolutionize the logistics industry by becoming the most agile, tech-driven, and customer-focused provider in the world.
                We envision a future where every shipment is faster, smarter, and more transparent—empowered by real-time data and automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex text-lg flex-row gap-1 font-bold text-blue-900 md:flex-col items-center min-w-[70px] sm:items-start">
                <h5>02.</h5>
                <h5>Mission</h5>
              </div>
              <p className="text-gray-700 text-base sm:text-sm font-light leading-relaxed">
                To provide reliable, efficient, and scalable logistics solutions that adapt to the dynamic needs of global supply chains.
                We leverage cutting-edge technology to streamline operations, reduce transit times, and enhance visibility across every delivery touchpoint.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 border border-gray-200/50 mt-4 rounded-xl w-full">
          <img
            src={truck}
            alt="Truck"
            className="w-full h-80 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
