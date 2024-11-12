// import MergedComponent from '../ContactUsPage/MergedComponent'; 
import QuestionText from "../Components/ContactUsPage/QuestionText";
import Icons from "../Components/ContactUsPage/Icons";
import ContactForm from "../Components/ContactUsPage/ContactForm";
// import MergedComponent from '../ContactUsPage/MergedComponent';
import bgimage from "../assets/image/abstract2.jpg";

const ContactUs = () => {
  return (
    <div>
      <QuestionText />
      <div
        className="bg-cover bg-center bg-no-repeat p-8 "
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <Icons />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
