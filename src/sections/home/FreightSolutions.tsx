import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";
import truck from "../../assets/truck.png";
import warehouse from "../../assets/truck.png";
import lastMile from "../../assets/truck.png";
import customs from "../../assets/truck.png";

const services = [
  {
    title: "Freight Forwarding",
    description:
      "Fast and reliable freight forwarding services tailored to your needs. We handle everything from documentation to customs clearance, ensuring your goods reach their destination on time.",
    image: truck,
  },
  {
    title: "Warehouse Solutions",
    description:
      "Secure and efficient warehouse solutions with real-time inventory tracking to keep your supply chain organized and flexible.",
    image: warehouse,
  },
  {
    title: "Last Mile Delivery",
    description:
      "Timely last-mile delivery services designed for accuracy and customer satisfaction, covering urban and rural areas seamlessly.",
    image: lastMile,
  },
  {
    title: "Customs Brokerage",
    description:
      "Expert customs brokerage to navigate complex regulations and expedite clearance processes, minimizing delays and costs.",
    image: customs,
  },
];

const FreightSolutions = () => {
  return (
    <section className="bg-white items-center flex-col flex text-gray-900 p-6">
      <Tagline label="Our Freight Solutions" className="mb-4" />

      <ColoredTitle
        title="Expertly managing every step of your logistics journey, from freight forwarding to last-mile delivery."
        className="text-3xl md:w-2xl px-6 text-center mb-4"
        highlightWords={["Expertly", "managing", "forwarding"]}
        highlightColor="text-blue-800"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-4 max-w-7xl">
        {services.map(({ title, description, image }) => (
          <div
            key={title}
            className="relative bg-cover h-96 rounded-md overflow-hidden flex flex-col justify-center items-center text-white"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-[#011E62]/80 z-0"></div>

            <div className="absolute top-4 left-4 z-10 bg-black/15 w-44 rounded-full text-center">
              <h2 className="text-sm px-4 py-1 font-light">{title}</h2>
            </div>

            <div className="relative z-10 px-6 text-center max-w-sm">
              <p className="text-base font-light">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreightSolutions;
