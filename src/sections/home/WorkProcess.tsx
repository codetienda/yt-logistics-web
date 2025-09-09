import { ArrowRight } from 'lucide-react';
import Tagline from '../../components/Tagline';
import ColoredTitle from '../../components/ColoredTitle';
import WorkProcessSlider from '../../components/ProcessSlider';

const WorkProcess = () => {
  return (
    <section className="space-y-2 p-10 m-3 bg-gradient-to-t from-blue-950 via-blue-100 to-blue-100 rounded-xl">
      <div className='flex justify-center w-full'>
        <ColoredTitle 
          title='Revolutionizing Logistics with Innovation, Speed, and Unmatched Efficiency, Empowering a Smarter Tomorrow' 
          className="text-3xl max-w-4xl mb-4 text-center"
          highlightWords={['Revolutionizing','Smarter','Tomorrow']} 
          highlightColor='text-blue-800'
        />
      </div>

      <div className="rounded-md p-10 max-w-5xl flex flex-col border-b-2 border-amber-50 mx-auto lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="relative z-10 max-w-2xl flex-1">
          <p className="text-blue-950 text-base font-light leading-relaxed">
            Transforming the way goods and services move across borders with cutting-edge innovation,
            intelligent routing, and unmatched reliability to ensure speed, safety, and global reach.
          </p>
        </div>

        {/* Right Button */}
        <div className="mt-8 lg:mt-0 z-10">
          <button className="group inline-flex items-center justify-between gap-3 text-lg font-medium border cursor-pointer border-[#011E62] pl-6 pr-3 py-1.5 rounded-full bg-white text-[#011E62] hover:text-white hover:bg-blue-950 transition-all duration-200">
            <span className='text-sm font-light'>Learn more</span>
            <span className="rounded-full p-1 bg-white text-[#011E62] border border-[#011E62] group-hover:bg-[#011E62] group-hover:text-white group-hover:border-white transition-all duration-200">
              <ArrowRight size={10} className="transition-all duration-200" />
            </span>
          </button>
        </div>
      </div>

      {/* Section 2: Work Process Intro */}
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

      {/* Slider Section */}
      <WorkProcessSlider />
    </section>
  );
};

export default WorkProcess;
