import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";

const teamMembers = [
  {
    name: "Grace Umutoni",
    position: "Chief Executive Officer",
    bio: "Grace leads the vision and strategy with a focus on innovation and customer satisfaction.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/11.jpg",
  },
  {
    name: "Eric Mugisha",
    position: "Operations Manager",
    bio: "Eric ensures seamless execution of logistics operations with top-tier efficiency.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg",
  },
  {
    name: "Diane Irakoze",
    position: "Customer Relations Lead",
    bio: "Diane builds lasting client relationships through excellent support and communication.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/34.jpg",
  },
  {
    name: "Patrick Nshimiyimana",
    position: "Logistics Specialist",
    bio: "Patrick coordinates delivery schedules and supply chain efficiency with precision.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16 text-gray-900">
        <div className="flex flex-col justify-center items-center w-full">
        <Tagline label="Meet Our Team" className="mb-4" />
        <ColoredTitle
            title="The People Behind Our Success"
            className="text-3xl max-w-xl mb-4"
            highlightWords={["People", "Success"]}
            highlightColor="text-blue-800"
        />
        <p className="text-lg text-center font-light text-gray-700 max-w-2xl mb-10">
        Our team is made up of passionate professionals committed to redefining the logistics experience for every client.
        </p>
        </div>

       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 shadow-sm overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-950">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{member.position}</p>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
