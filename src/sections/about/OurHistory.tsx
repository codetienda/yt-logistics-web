import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";

const milestones = [
  { year: "2018", description: "Founded with a vision to simplify logistics." },
  { year: "2019", description: "Expanded operations regionally." },
  { year: "2020", description: "Launched AI route optimization." },
  { year: "2022", description: "Recognized globally for excellence." },
  { year: "2024", description: "Introduced green logistics initiative." },
];

const OurHistory = () => {
  return (
    <section className="px-6 m-10 rounded-3xl md:px-16 py-16 bg-blue-950 text-gray-900">
      <div className="flex flex-col justify-center items-center w-full">
        <Tagline label="Milestone" className="mb-4 text-white/80" />
        <ColoredTitle
          title="Our Journey of People and Success"
          className="text-3xl max-w-xl mb-4 text-center text-blue-600/90"
          highlightWords={["People", "Success"]}
          highlightColor="text-white/50"
        />
        <p className="text-lg text-center font-light text-gray-100/80 max-w-2xl mb-10">
        From humble beginnings to transformative innovations, our history is defined by milestones that shaped who we are — a team united by purpose, progress, and passion in the logistics industry.
        </p>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Line */}
        <div className="absolute bottom-1/2 left-0 w-full h-1.5 rounded-2xl bg-blue-200 z-0" />
        {/* Dots & Labels */}
        <div className="flex justify-between items-start relative z-10">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center w-1/5 text-center">
                {/* Year */}
              <div className="mt-4 text-xl font-extrabold text-white/90">{milestone.year}</div>
              {/* Dot */}
              <div className="w-4 h-4 bg-blue-950 rounded-full border-4 border-white z-10" />
              
              {/* Description */}
              <p className="text-sm text-gray-200/90 font-light mt-2 px-2">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
