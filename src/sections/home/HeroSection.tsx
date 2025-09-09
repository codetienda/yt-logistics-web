import { MapPin, Maximize2, Play } from 'lucide-react';
import bgImage from '../../assets/bgHero.jpg';
import bgimg from '../../assets/img.png';
import ColoredTitle from '../../components/ColoredTitle';
import CommonButton from '../../components/CommonButton';

const HeroSection = () => {
    return (
      <>
      <section
        className="relative hidden bg-cover bg-center min-h-[90vh] m-3 rounded-md md:flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}>
          
        <div className="absolute inset-0 bg-gradient-to-l to-[#011E62]/90 from-blue-200/60 z-0 rounded-md"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl leading-tight mb-6 font-black">
              Delivering more than just a freight, we deliver trust.
            </h1>
            <p className="text-lg md:text-lg text-gray-50 font-light mb-8 -mt-4 max-w-md">
              We prioritize reliability and efficiency in every delivery, ensuring your goods reach their destination safely and on time.
            </p>
            <div className="flex flex-wrap mt-24 gap-4">
                <CommonButton title='Explore Services' size='large'/>
                <CommonButton title='Get a Quote' outlined={true} 
                iconColor='text-white' 
                titleStyle='text-white font-semibold'
                className='bg-[#011E62]border border-gray-300/40   hover:text-[#011E62] transition-all duration-200'
                iconBackground='border border-gray-300/40 text-white bg-transparent'/>
            </div>
          </div>
        </div>
        <div className='absolute flex h-40 w-md p-3 right-3 bottom-3 bg-white/90 rounded-md shadow-lg backdrop-blur-sm items-center justify-center z-10'>
          <div className='flex flex-col justify-center gap-5 items-center w-full h-full text-center p-4'>
          <ColoredTitle
              title="We cover shipments across the globe, from hub to logistic."
              highlightWords={['cover', 'globe']}
              highlightColor="text-blue-600"
              className="text-sm font-light"
            />
            <div className="flex justify-evenly content-evenly w-full">
                <span className="rounded-full bg-[#011E62] p-1 border border-gray-100 text-white">
                  <Play size={16} />
                </span>
                <span className="rounded-full p-1 border border-black/30 text-gray-900">
                  <Maximize2 size={16} />
                </span>
              </div>
          </div>
          <img
            src={bgimg}
            alt="Background"
            className=" w-full h-full object-cover rounded-md"
          />
        </div>

          <div className="absolute bottom-1/2 right-1/3  flex gap-1 items-center text-white z-10">
            <div className="rounded-full p-0.5 border-dotted border border-white justify-center items-center flex">
                <span className='h-2.5 w-2.5 rounded-full bg-white'></span>
              </div>
            <div className="flex flex-col w-36 bg-[#011E62]/60 px-5 py-0.5 border border-amber-50 rounded-full text-xs">
                <span className="text-gray-100 text-xs  font-light">Bound for Dubai</span>
                <span className="text-gray-100 text-xs  font-light">ETA: 2 Weeks</span>
            </div>
          </div>

          <div className="absolute bottom-2/3 right-1/6 flex gap-1 items-center text-white z-10">
            <div className="rounded-full p-0.5 border-dotted border border-white justify-center items-center flex">
                <span className='h-2.5 w-2.5 rounded-full bg-white'></span>
              </div>
            <div className="flex flex-col w-36 bg-[#011E62]/60 px-5 py-0.5 border border-amber-50 rounded-full text-xs">
                <span className="text-gray-100 text-xs font-normal">Bound for India</span>
                <span className="text-gray-100 text-xs font-normal">ETA: 2 Weeks</span>
            </div>
          </div>

          <div className="absolute top-20 right-1/12  flex gap-1 items-center z-10">
            <span className="bg-white rounded-full p-1 border border-black/30 text-gray-900">
                <MapPin size={16} />
              </span>
            <div className="flex w-full bg-white px-5 py-1 border border-amber-50 rounded-full text-xs">
              <span className="text-gray-700 text-xs font-bold">The port of Mombasa</span>
            </div>
          </div>
      </section>


      {/* Mobile-only Hero Section */}
      <section className="block md:hidden px-4 py-8 bg-white">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-black text-[#011E62] leading-snug mb-4">
            Delivering More Than Just Freight
          </h1>
          <p className="text-base text-gray-600 font-light mb-6">
            We prioritize reliability, precision, and strong partnerships in every shipment,
            ensuring a seamless and efficient logistics experience from start to finish.
          </p>

          {/* Buttons stacked on mobile */}
          <div className="flex flex-col items-center gap-3">
            <CommonButton
              title="Get a Free Quote"
              size="large"
              className="bg-[#011E62] text-white rounded-full w-2/3"
            />
            <CommonButton
              title="Learn More"
              outlined
              iconColor="text-[#011E62]"
              titleStyle="text-[#011E62] font-semibold"
              className="border border-[#011E62] rounded-full w-2/3"
              iconBackground="text-[#011E62] bg-transparent"
            />
          </div>
        </div>

        {/* Map-style image with markers */}
        <div className="relative mt-8 w-full min-h-[60vh] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-l to-[#011E62]/90 from-blue-200/60 z-0 rounded-md"></div>
          <div className="absolute top-[20%] left-[8%] flex items-center gap-1">
            <span className="bg-white rounded-full p-1 border border-black/30 text-gray-900">
              <MapPin size={14} />
            </span>
            <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow">
              The Port of Singapore
            </div>

          </div>
          <div className="absolute top-[35%] right-[10%] flex items-center gap-1">
            <div className="rounded-full p-0.5 border border-white border-dotted">
              <span className="h-2 w-2 rounded-full bg-white block"></span>
            </div>
            <div className="bg-[#011E62]/70 px-3 py-0.5 rounded-full text-xs text-white">
              Bound for China — ETA: 1 wk
            </div>
          </div>

          <div className="absolute bottom-[35%] left-[15%] flex items-center gap-1">
            <div className="rounded-full p-0.5 border border-white border-dotted">
              <span className="h-2 w-2 rounded-full bg-white block"></span>
            </div>
            <div className="bg-[#011E62]/70 px-3 py-0.5 rounded-full text-xs text-white">
              Bound for Germany — ETA: 2 wks
            </div>
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 rounded-md shadow-lg backdrop-blur-sm p-3 flex items-center gap-3 w-[90%]">
            <img
              src={bgimg}
              alt="Shipping"
              className="w-16 h-16 object-cover rounded-md"
            />
            <ColoredTitle
              title="We cover shipment around the globe"
              highlightWords={['cover', 'globe']}
              highlightColor="text-blue-600"
              className="text-sm font-light"
            />
            <div className="flex gap-2">
              <span className="rounded-full bg-[#011E62] p-1 border border-gray-100 text-white">
                <Play size={16} />
              </span>
              <span className="rounded-full p-1 border border-black/30 text-gray-900">
                <Maximize2 size={16} />
              </span>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default HeroSection;
  