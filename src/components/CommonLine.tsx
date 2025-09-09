import truckRoad from '../assets/cargo-truck-road.png';

const CommonLine = () => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden sm:pr-20">
      {/* Line at bottom */}
      <div
        className="absolute bottom-[39px] rounded-md h-[12px] sm:h-[20px] bg-blue-950"
        style={{
          left: '1rem', // default for mobile
          right: '1rem', // default for mobile
          ...(window.innerWidth >= 640 && { left: '5rem', right: '6rem' }), // adjust on larger screens
        }}
      >
        {/* Ping dot on the line */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
          <span className="relative flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center">
            <span className="absolute h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-blue-950 opacity-50 animate-ping"></span>
            <span className="absolute h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-blue-950 opacity-60 animate-ping"></span>
            <span className="absolute h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-blue-950 opacity-75 animate-ping"></span>
            <span className="relative h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-white z-10"></span>
          </span>
        </div>
      </div>

      {/* Trucks on the line */}
      <img
        src={truckRoad}
        alt="Truck Left"
        className="absolute bottom-0 left-8 sm:left-28 h-28 sm:h-56 object-contain"
      />
      <img
        src={truckRoad}
        alt="Truck Right"
        className="absolute -bottom-5 sm:-bottom-10 right-8 sm:right-24 h-48 sm:h-96 object-contain"
      />
    </section>
  );
};

export default CommonLine;
