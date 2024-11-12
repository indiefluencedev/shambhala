import Banner from "../Components/Banner";
import AboutText from "../Components/AboutUsPage/AboutText";
import OurValues from "../Components/AboutUsPage/OurValues";
import Meditation from "../Components/AboutUsPage/Meditation";
import TeamLead from "../Components/AboutUsPage/TeamLead";
import OurValuesMobile from "../Components/AboutUsPage/OurValuesMobile";

const AboutUs = () => {
  return (
    <div>
      <Banner title="ABOUT US" />
      <AboutText />
      
      {/* Responsive Values Section */}
      <div className="hidden md:block"> {/* Show OurValues on medium and larger screens */}
        <OurValues />
      </div>
      <div className="block md:hidden"> {/* Show OurValuesMobile on small screens */}
        <OurValuesMobile />
      </div>
      
      <Meditation />
      <TeamLead />
    </div>
  );
};

export default AboutUs;
