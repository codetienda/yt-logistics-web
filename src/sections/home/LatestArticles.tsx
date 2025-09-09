import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";
import truck from "../../assets/truck.png";
import warehouse from "../../assets/truck.png";
import lastMile from "../../assets/truck.png";
import customs from "../../assets/truck.png";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Optimizing Freight Forwarding in 2025",
    description:
      "Discover the top strategies to improve freight forwarding efficiency and reduce shipping delays in a rapidly evolving global market.",
    image: truck,
    category: "Logistics",
    date: "July 29, 2025",
    author: "Jane Doe",
  },
  {
    title: "The Future of Smart Warehousing",
    description:
      "Explore how AI and IoT are transforming warehousing into a smart, adaptive, and efficient system for modern logistics.",
    image: warehouse,
    category: "Warehousing",
    date: "July 27, 2025",
    author: "John Smith",
  },
  {
    title: "Solving Last-Mile Delivery Challenges",
    description:
      "Learn about emerging solutions to address the growing complexity and cost of last-mile delivery in urban environments.",
    image: lastMile,
    category: "Delivery",
    date: "July 25, 2025",
    author: "Emily Clark",
  },
  {
    title: "Navigating Customs in Cross-Border Trade",
    description:
      "A deep dive into customs processes and tips to streamline cross-border shipping with fewer regulatory setbacks.",
    image: customs,
    category: "Customs",
    date: "July 23, 2025",
    author: "Robert King",
  },
];

const LatestArticles = () => {
  return (
    <section className="bg-white flex flex-col px-6 md:px-20 py-16 gap-6 text-gray-900">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-[0.6]">
          <Tagline label="Latest Articles" className="mb-4" />
          <ColoredTitle
            title="Industry Insight and Tips"
            className="text-3xl max-w-xl mb-4"
            highlightWords={["Insight"]}
            highlightColor="text-blue-800"
          />
        </div>
        <div className="flex-[1.4]">
          <p className="text-lg font-light text-gray-700">
            Trusted by global partners for our unwavering reliability, precision, and dedication. We deliver seamless logistics solutions that drive growth, efficiency, and lasting impact.
          </p>
          <div className="flex items-end justify-end w-full px-2 mt-10">
            <button className="border text-sm font-extralight border-blue-950 text-blue-950 rounded-full px-4 py-0.5 flex items-center cursor-pointer hover:bg-blue-950 hover:text-white">View all</button>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 max-w-7xl">
        {articles.map(({ title, description, image, category, date, author }) => (
          <div
            key={title}
            className="relative bg-cover h-96 rounded-md overflow-hidden flex flex-col justify-between text-white"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-[#011E62]/80 z-0"></div>

            {/* Top Bar: Category and Date */}
            <div className="relative z-10 flex justify-between p-4 text-sm font-light">
              <span className="bg-black/20 px-3 py-1 rounded-full">{category}</span>
              <span>{date}</span>
            </div>

            {/* Title and Description Centered */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <p className="text-sm font-light max-w-xs">{description}</p>
            </div>

            {/* Author and Read More */}
            <div className="relative z-10 flex justify-between items-center p-4 text-sm font-light">
              <span className="text-white">{author}</span>
              <button className="border border-white flex gap-1 cursor-pointer items-center rounded-full pl-4 pr-2 py-1 hover:bg-white hover:text-blue-900 transition">
                Read more <ArrowRight size={16} className="border p-1 rounded-full" />
              </button> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
