import WhoWeAre from "../sections/about/WhoWeAre"
import PageHeading from "../sections/common/PageHeading"
import aboutbg from "../assets/cargo-truck-road.png"
import Gallery from "../sections/about/Gallery"
import OurTeam from "../sections/about/OurTeam"
import OurHistory from "../sections/about/OurHistory"
import GetQuoteSection from "../components/GetQuoteSection"

const About = () => {
    return (
    <>
    <PageHeading
        pageTitle="About us"
        pageDescription="We are committed to providing top-notch logistics solutions, ensuring your goods are delivered safely and on time."
        slogan="Reliable. Efficient. On Time."
        backgroundImage={aboutbg}
    />
    <WhoWeAre/>
    <Gallery/>
    <OurHistory/>
    <OurTeam/>
    <GetQuoteSection/>
    </>
    )
  }
  export default About
  