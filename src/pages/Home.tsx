import HeroSection from '../sections/home/HeroSection';
import FreightSolutions from '../sections/home/FreightSolutions';
import VisionMission from '../sections/home/Vision';
import CoreValues from '../sections/home/CoreValues';
import LogisticServices from '../sections/home/LogisticService';
import Testimonials from '../sections/home/Testimonials';
import LatestArticles from '../sections/home/LatestArticles';
import GetQuoteSection from '../components/GetQuoteSection';
import CommonLine from '../components/CommonLine';
import WorkProcess from '../sections/home/WorkProcess';
const Home = () => {
    return (
      <>
      <HeroSection />
      <VisionMission />
      <FreightSolutions />
      <CoreValues />
      <WorkProcess/>
      <LogisticServices />
      <Testimonials />
      <LatestArticles />
      <CommonLine/>
      <GetQuoteSection/>
      </>
    );
  };
  
  export default Home;
  