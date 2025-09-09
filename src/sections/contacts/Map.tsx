import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";
import map from "../../assets/img/google-map.png"
import CommonButton from "../../components/CommonButton";

const Map = () => {
  return (
    <section className="px-6 flex flex-col gap-4 md:flex-row-reverse m-10 rounded-3xl md:px-16 py-16 bg-blue-950 text-gray-900">
      <div className="flex flex-col justify-center items-center w-full">
        <Tagline label="Find us" className="mb-4 text-white/80" />
        <ColoredTitle
          title="Conveniently located for major access to all Logistic Routes "
          className="text-3xl max-w-xl mb-4 text-center text-gray-100"
          highlightWords={["People", "Success"]}
          highlightColor="text-white/50"
        />
        <p className="text-lg text-center font-light text-gray-100/80 max-w-2xl mb-10">
          Find us on the map to plan your visit with ease. Whether you're visiting for business or planning a delivery, our map will guide you effortlessly.
        </p>

        <CommonButton title={"Find the direction"} className="bg-white hover:border md:border-white"/>
      </div>

      {/* Horizontal Timeline */}
      <div className="w-full max-w-6xl mx-auto">
        <div>
            <img src={map} alt="" className="rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Map;
