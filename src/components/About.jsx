import CodingProfile from "../data/CodingProfile";
import FadeIn from "../common/AnimatedWrapper";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="m-5 max-h-screen">
      {/* Section 1: Introduction */}
      <FadeIn>
        <div>
          <h2 className="font-bold text-2xl py-5">ME, MYSELF, I</h2>
          <hr />
          <h2 className="text-2xl font-normal mb-4 py-8">Hi, I'm Nikhil Sharma</h2>
          <p className="font-normal text-xl py-1 text-gray-600">
            I am a student at Jain (Deemed-to-be University)
          </p>
          <p className="font-normal text-xl py-1 text-gray-600">
            I'm Up for Web Developer Internship and working on interesting Side Projects
          </p>
        </div>
      </FadeIn>

      {/* Section 2: Profile Key Points */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">MY PROFILE KEYPOINTS:</div>
          <p className="px-2 text-xl">- Education: Jain (Deemed-to-be University)</p>
        </div>
      </FadeIn>

      {/* Section 3: Interests */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">INTEREST:</div>
          <p className="px-2 text-lg">
            I have a huge interest in Problem Solving, Data Structure and Algorithms, System Design, Front-End Dev, and UX/UI to Develop & Design creative stuff.
          </p>
        </div>
      </FadeIn>

      {/* Section 4: Hobbies */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">HOBBIES:</div>
          <p className="px-2 text-lg">For Fun I Play Games, Play Cricket, Read Novels.</p>
        </div>
      </FadeIn>

      <hr />

      {/* Section 5: Personal Details */}
      <FadeIn>
        <div className="flex py-5 px-5 items-center">
          <div>
            <p className="text-2xl py-5">
              <span className="font-medium text-2xl">Name:</span> Nikhil Sharma
            </p>
            <p className="text-2xl py-5">
              <span className="font-medium text-2xl">Address:</span> Bangalore, India
            </p>
          </div>
          <div>
            <p className="text-2xl px-5 py-5">
              <span className="font-medium text-2xl">Date of birth:</span> 19 August 2002
            </p>
            <p className="text-blue-500 text-2xl px-5 py-5">
              <span className="font-medium text-2xl">Connect:</span>
              <a className="font-medium text-2xl" href="mailto:nikhilsharmadev27@gmail.com">Email,</a>
              <a className="font-medium text-2xl" href="https://www.linkedin.com/in/nikhil-sharma-496680279/"> LinkedIn,</a>
              <a className="font-medium text-2xl" href="">Facebook,</a>
              <a className="font-medium text-2xl" href="https://www.instagram.com/_.hr.16._/profilecard/?igsh=aWN6ZDR0Y2podDZz">Instagram</a>
            </p>
          </div>
        </div>
      </FadeIn>

      <hr />

      {/* Section 6: Coding Profiles */}
      <FadeIn>
        <div className="py-7 h-screen">
          <div>
            <h2 className="font-medium text-2xl py-2">CODING PROFILE</h2>
          </div>
          <hr />
          <FadeIn>
            <div className="flex items-center justify-center py-5 gap-5 flex-wrap">
              {CodingProfile.map((item, index) => (
                <motion.div
                whileHover={{ scale: 1.1 }} // Add scale effect on hover
            transition={{ type: "spring", stiffness: 300 }} // Optional: Add springy transition
                  key={index}
                  className="shadow-xl rounded-lg border border-gray-200 p-2 max-w-[150px]"
                >
                  <a href={item.link}>
                    <img
                      className="h-auto w-full object-contain"
                      src={item.image}
                      alt={item.alt}
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
