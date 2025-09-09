
  import ColoredTitle from "../../components/ColoredTitle";
import CommonButton from "../../components/CommonButton";
  import Tagline from "../../components/Tagline";
  import { METRICS } from "../../constants";
  import partne1 from "../../assets/img/logoipsum-375.svg"
  import partne2 from "../../assets/img/logoipsum-382.svg"
  import partne3 from "../../assets/img/logoipsum-385.svg"
  
  
  const Community = () => {
    return (
      <section className="bg-white flex flex-col lg:flex-row text-gray-900 px-6 md:px-16 py-16 gap-10">
        <div className="flex-1">
          <Tagline label="Our Communit" className="mb-4" />
          <ColoredTitle
            title="Join our growing Community of cutomers, and Logistic partners"
            className="text-3xl max-w-xl mb-4"
            highlightWords={["growing", "partners"]}
            highlightColor="text-blue-800"
          />
          <p className="text-lg font-light text-gray-700 max-w-lg">
            Join a dynamic community of businesses, where collaboration and innovation drive success in logistics and beyond.
          </p>
          <div className="mt-12">
            <CommonButton title={"Join us"} outlined size="small"/>
          </div>

        <div className="mt-10 flex items-center gap-6 flex-wrap">
          <img src={partne1} alt="Partner 1" className="h-8 w-auto border border-gray-200 p-2 rounded-md" />
          <img src={partne2} alt="Partner 1" className="h-8 w-auto border border-gray-200 p-2 rounded-md" />
          <img src={partne3} alt="Partner 1" className="h-8 w-auto border border-gray-200 p-2 rounded-md" />
        </div>
        </div>
        <div className="grid md:p-10 gap-4 grid-cols-2 md:grid-cols-2">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col border p-6 rounded-lg border-gray-200/50 gap-2 justify-center items-center"
          >
            <h3 className="text-4xl font-light">{metric.value}</h3>
            <p className="text-sm font-light text-center">{metric.label}</p>
          </div>
        ))}
      </div>
      </section>
    );
  };
  
  export default Community;
  