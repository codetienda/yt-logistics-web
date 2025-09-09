import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import target1 from '../assets/target1.png';
import target2 from '../assets/target2.png';
import target3 from '../assets/target1.png';
import target4 from '../assets/target2.png';
import target5 from '../assets/target1.png';

const processSteps = [
  {
    title: 'In-Depth Consultation',
    description:
      'We begin with a thorough understanding of your supply chain needs, challenges, and business goals to tailor the most effective logistics strategy.',
    image: target1,
  },
  {
    title: 'Efficient Execution',
    description:
      'From warehousing to transportation, we deploy fast, reliable, and precision-driven operations to ensure timely deliveries across borders.',
    image: target2,
  },
  {
    title: 'Smart Planning',
    description:
      'Leveraging data, route optimization, and inventory analytics, we create scalable logistics solutions that reduce costs and boost efficiency.',
    image: target3,
  },
  {
    title: 'Transparent Tracking',
    description:
      'Stay in control with real-time shipment visibility, proactive notifications, and a dedicated support team to handle updates or disruptions.',
    image: target4,
  },
  {
    title: 'Continuous Improvement',
    description:
      'We regularly audit performance and implement enhancements, ensuring your logistics operations evolve with your growing business demands.',
    image: target5,
  },
];

const WorkProcessSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 mt-6"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`h-3 w-3 rounded-full p-1 cursor-pointer ${
          i === activeIndex ? 'w-5 bg-gray-300' : 'bg-blue-950'
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="px-4">
      <Slider {...settings}>
        {processSteps.map((step, index) => (
          <div key={index} className="px-3 py-4">
            <div className="bg-transparent rounded-xl border border-gray-300/30 flex flex-col justify-between p-6 h-[300px]">
              <div>
                <h3 className="text-blue-900 font-black text-3xl mb-1">{`0${index + 1}`}</h3>
                <h3 className="text-xl text-blue-950 font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-100 text-sm">{step.description}</p>
              </div>
              <div className='flex items-center justify-center mt-4'>
                {/* <img src={step.image} alt={step.title} className='h-28 w-28 object-contain' /> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default WorkProcessSlider;
