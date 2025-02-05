import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
const Contact = () => {
    return (
      <motion.div 
      variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.1}}
      className="m-5">
        
        <ContactForm />
      </motion.div>
    );
  };
  
  export default Contact;
  