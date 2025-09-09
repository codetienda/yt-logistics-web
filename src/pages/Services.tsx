import PageHeading from "../sections/common/PageHeading"
import headingbg from '../assets/truck.png'
import Community from "../sections/services/Community"
import ServicesSection from "../sections/services/Services"
import GetQuoteSection from "../components/GetQuoteSection"
import Process from "../sections/services/Process"

const Services = () => {
    return (
      <>
      <PageHeading
        pageTitle="Logistic services"
        pageDescription="We offer a wide range of logistics services tailored to meet your needs, ensuring efficient and reliable delivery of your goods."
        slogan="Comprehensive. Reliable. Tailored."
        backgroundImage={headingbg}
      />
       <Community/>
       <ServicesSection/>
       <Process/>
       <GetQuoteSection/>
      </>
     
    )
  }
  export default Services
  