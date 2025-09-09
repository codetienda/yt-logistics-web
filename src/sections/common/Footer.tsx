
const Footer = () => {
  return (
    <section className="bg-[#011E62]/95 px-6 py-10 text-primary-dark w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className='colspan-1 md:col-span-2 relative flex flex-col items-center md:items-start'>
          <h1 className="text-5xl uppercase text-white/90 tracking-widest font-black">Plankton</h1>
          <span className="text-gray-400 uppercase tracking-widest font-light text-lg">Logistics with Confidence</span>
        </div>
        <div className="flex items-center">
          <h3 className="text-white/90 font-extralight text-4xl text-center leading-tight">
            Leading the way in the world urban logistics.
          </h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 content-center md:grid-cols-6 gap-10 mb-10">
        <div className="text-white col-span-3">
          <h2 className="text-lg font-normal mb-2">Stay Connected</h2>
          <p className="text-sm text-gray-400 md:pr-32 font-light">
            Join our community of forward-thinkers transforming last-mile delivery. Stay up to date with our latest innovations, updates, and industry insights that are shaping the future of urban logistics.
        </p>
        <div className="relative max-w-md mt-4">
        <input
            type="text"
            placeholder="Enter your email"
            className="w-full px-4 py-2 pr-32 border font-light bg-white border-gray-300 rounded-full text-black focus:outline-none"
        />
        <button className="absolute right-1 text-sm top-1 bottom-1 px-4 text-white bg-[#011E62] rounded-full font-light hover:bg-gray-700">
            Get a Quote
        </button>
        </div>

        </div>
        <div className="text-white/90 col-span-2 md:col-span-1">
          <h2 className="text-lg font-normal mb-2">Company</h2>
          <p className="text-sm text-gray-400 font-light">Blog</p>
          <p className="text-sm text-gray-400 font-light">About us</p>
          <p className="text-sm text-gray-400 font-light">Contact us</p>
          <p className="text-sm text-gray-400 font-light">Career</p>
        </div>
        <div className="text-white/90">
          <h2 className="text-lg font-normal mb-2">Support</h2>
          <p className="text-sm text-gray-400 font-light">FAQ</p>
          <p className="text-sm text-gray-400 font-light">Customer Support</p>
          <p className="text-sm text-gray-400 font-light">Tracking</p>
        </div>
        <div className="text-white/90">
          <h2 className="text-lg font-normal mb-2">Services</h2>
          <p className="text-sm text-gray-400 font-light">Road Fleight</p>
          <p className="text-sm text-gray-400 font-light">Air Fleight</p>
          <p className="text-sm text-gray-400 font-light">Sea Fleight</p>
          <p className="text-sm text-gray-400 font-light">Rails Fleight</p>
        </div>
      </div>

      {/* Bottom Section: Policies and Copyright */}
      <div className="border-t border-gray-400 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between font-light text-gray-400 text-sm gap-4">
        <div className="flex gap-6 justify-center md:justify-start">
          <p className="hover:underline cursor-pointer">Privacy policy</p>
          <p className="hover:underline cursor-pointer">Site map</p>
          <p className="hover:underline cursor-pointer">Terms of use</p>
        </div>
        <div className="text-center md:text-right">
          <p>© 2023 Plankton Logistics. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
