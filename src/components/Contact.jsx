import ContactForm from "./ContactForm";
import FadeIn from "../common/AnimatedWrapper";
const Contact = () => {
  return (
    <FadeIn className="m-5">
      <ContactForm />
    </FadeIn>
  );
};

export default Contact;
