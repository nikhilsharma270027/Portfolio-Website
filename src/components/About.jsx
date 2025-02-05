import CodingProfile from "../data/CodingProfile";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const About = () => {
  return (
    <div className="m-5 max-h-screen ">
      <div>
        <motion.h2
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: true, amount: 0.1}} 
        className="font-bold text-2xl py-5">ME, MYSELF, I</motion.h2>
        <hr />
        <motion.h2
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: true, amount: 0.1}} 
        className="text-2xl font-normal mb-4 py-8">
          Hi, I'm Nikhil Sharma
        </motion.h2>
        <motion.p 
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: true, amount: 0.1}} 
        className="font-normal text-xl py-1 text-gray-600">
          I am a student at Jain (Deemed-to-be University)
        </motion.p>
        <motion.p 
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: true, amount: 0.1}} 
        className="font-normal text-xl py-1 text-gray-600">
          I'm Up for WebDeveloper Internship and working on interesting Side
          Projects
        </motion.p>
      </div>

      <motion.div
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: true, amount: 0.1}}
      className="py-7">
        <div className="font-medium text-2xl py-2">MY PROFILE KEYPOINTS:</div>
        <p className="px-2 text-xl">-Education: Jain (Deemed-to-be University)</p>
      </motion.div>

      <motion.div
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: false, amount: 0.1}} 
       className="py-7">
        <div className="font-medium text-2xl py-2">INTEREST:</div>
        <p className="px-2 text-lg">
          I have a huge interest in Problem Solving, Data Structure and
          Algorithms, System Design , Front-End Dev, and UX/UI.
          to Develop & Design creative stuff.
        </p>
      </motion.div>

      <motion.div
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: false, amount: 0.1}}
      className="py-7">
        <div className="font-medium text-2xl py-2">HOBBIES:</div>
        <p className="px-2 text-lg">For Fun I Play Games, Play Cricket, Read about Novels.</p>
      </motion.div>

      <hr />

      <motion.div
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: false, amount: 0.1}}
       className="flex py-5 px-5 items-center">
        <div>
          <p className="text-2xl py-5"><span className="font-medium text-2xl">Name:</span> Nikhil Sharma</p>
          <p className="text-2xl py-5"><span className="font-medium text-2xl">Address:</span> Bangalore, India</p>
        </div>
        <div>
          <p className="text-2xl px-5 py-5"><span className="font-medium text-2xl">Date of birth:</span> 19 August 2002</p>
          <p className="text-blue-500 text-2xl px-5 py-5"><span className="font-medium text-2xl">Connect:</span>
            <a className="font-medium text-2xl" href="mailto:nikhilsharmadev27@gmail.com">Email,</a>
            <a className="font-medium text-2xl" href="https://www.linkedin.com/in/nikhil-sharma-496680279/"> LinkedIn,</a>
            <a className="font-medium text-2xl" href="">Facebook,</a>
            <a className="font-medium text-2xl" href="https://www.instagram.com/_.hr.16._/profilecard/?igsh=aWN6ZDR0Y2podDZz">Instagram</a></p>
        </div>
      </motion.div>

      <hr />

      <motion.div
          variants={fadeIn("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: false, amount: 0.1}}
      className="py-7 h-screen">
        <div>
          <h2 className="font-medium text-2xl py-2">CODING PROFILE</h2>
        </div>
        <hr />
        <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}} 
        className="flex items-center justify-center py-5 gap-5 flex-wrap">
          {
            CodingProfile.map((item, index) => (
              <div
              key={index}  className="shadow-xl rounded-lg border border-gray-200 p-2 max-w-[150px]">
                <a href={item.link}>
                    <img
                      className="h-auto w-full object-contain"
                      src={item.image}
                      alt={item.alt}
                    />
                </a>
            </div>
            ))
          }
          
        </motion.div>
      </motion.div>


    </div>
  );
};

export default About;
