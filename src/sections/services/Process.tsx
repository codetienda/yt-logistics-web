import Tagline from '../../components/Tagline';
import ColoredTitle from '../../components/ColoredTitle';
import WorkProcessSlider from '../../components/ProcessSlider';

const Process = () => {
  return (
    <section className="space-y-2 p-6 md:p-10 m-3 bg-gradient-to-t from-blue-950 via-blue-100 to-blue-100 rounded-xl">
      <div className="p-10 mt-10 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-[0.6]">
          <Tagline label="Work Process" className="mb-4" />
          <ColoredTitle
            title="A Seamless Journey from Pickup to Delivery"
            className="text-3xl max-w-xl mb-4"
            highlightWords={["Seamless", "Pickup"]}
            highlightColor="text-blue-800"
          />
        </div>
        <div className="flex-[1.4]">
          <p className="text-lg font-light text-gray-700">
            Our logistics process is designed for efficiency, transparency, and precision at every step. From the moment your order is placed, we ensure a smooth flow through the following key stages:
          </p>
        </div>
      </div>
      <WorkProcessSlider />
    </section>
  );
};

export default Process;
