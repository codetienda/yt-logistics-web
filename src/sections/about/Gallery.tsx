import { Swiper, SwiperSlide } from "swiper/react";


import target1 from '../../assets/bgHero.jpg';
import target2 from '../../assets/truck.png';
import target3 from '../../assets/img.png';
import target4 from '../../assets/airplane.png';
import target5 from '../../assets/truck.png';

import Tagline from '../../components/Tagline';
import ColoredTitle from '../../components/ColoredTitle';

const galleryImages = [
    target1,
    target2,
    target3,
    target4,
    target5
  ];


const Gallery = () => {
  return (
    <section className="px-10 py-2">
      {/* Header Section */}
      <div className="p-10 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex-[0.6]">
          <Tagline label="Visual Glimpse" className="mb-4" />
          <ColoredTitle
            title="We simplify logistics across land, air, and sea. Explore our work through imagery."
            className="text-3xl max-w-xl mb-4"
            highlightWords={["simplify", "imagery"]}
            highlightColor="text-blue-800"
          />
        </div>
        <div className="flex-[1.4]">
          <p className="text-lg font-light text-gray-700">
          From origin to destination, we streamline every step of the supply chain. Our innovative approach ensures faster, more efficient, and hassle-free logistics — so you can focus on what matters most: growing your business
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {galleryImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow rounded-xl grid overflow-hidden">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default Gallery;
