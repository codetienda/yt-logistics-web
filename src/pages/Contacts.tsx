import PageHeading from "../sections/common/PageHeading"
import headingbg from '../assets/airplane.png'
import ContactInfo from "../sections/contacts/ContactInfo"
import GetQuoteSection from "../components/GetQuoteSection"
import FAQs from "../sections/contacts/FAQs"
import Map from "../sections/contacts/Map"

const Contactus = () => {
    return (
      <>
      <PageHeading
        pageTitle="Get in Touch"
        pageDescription="We offer a wide range of logistics services tailored to meet your needs, ensuring efficient and reliable delivery of your goods."
        slogan="Comprehensive. Reliable. Tailored."
        backgroundImage={headingbg}
      />
      <ContactInfo/>
      <Map/>
      <FAQs/>
      <GetQuoteSection/>
      </>
    )
  }
  export default Contactus
  