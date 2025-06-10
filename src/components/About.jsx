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
          <p className="text-xl text-blue-600 font-semibold italic py-2">
            Passionate Full-Stack Developer who turns coffee into code ☕
          </p>
          <p className="font-normal text-xl py-1 text-gray-600">
            I am a student at Jain (Deemed-to-be University)
          </p>
          <p className="font-normal text-xl py-1 text-gray-600">
            I'm looking for a Web Developer Internship and working on interesting side projects.
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
          <div className="font-medium text-2xl py-2">INTERESTS:</div>
          <p className="px-2 text-lg text-gray-600">
            I have a huge interest in Problem Solving, Data Structures and Algorithms, System Design,
            Front-End Development, and UX/UI. I love building and designing creative web experiences.
          </p>
        </div>
      </FadeIn>

      {/* Section 4: What I'm Exploring */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">CURRENTLY EXPLORING:</div>
          <p className="px-2 text-lg text-gray-600">
            🚀 Building full-stack apps with Next.js and AI APIs<br />
            🧠 Solving DSA problems on LeetCode and GeeksforGeeks<br />
            🎨 Experimenting with animation libraries like Framer Motion
          </p>
        </div>
      </FadeIn>

      {/* Section 5: My Tech Stack */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">MY TECH STACK:</div>
          <div className="flex flex-wrap gap-4 px-2 text-sm text-white">
            {["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "MongoDB", "Firebase", "Node.js", "Framer Motion", "Express", "Redux"].map((tech, index) => (
              <span key={index} className="bg-gray-700 px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Section 6: Hobbies */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">HOBBIES:</div>
          <p className="px-2 text-lg text-gray-600">For fun, I play games, cricket, and read novels.</p>
        </div>
      </FadeIn>

      {/* Section 7: Achievements */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">ACHIEVEMENTS & CERTIFICATIONS:</div>
          <ul className="list-disc px-5 text-lg text-gray-600">
            <li>🏆 Top 25 Finalist – CodeVerse Hackathon 2024</li>
            <li>📜 The Complete 2024 Web Development Bootcamp – Udemy</li>
            <li>📘 Solved 100+ DSA problems on LeetCode</li>
          </ul>
        </div>
      </FadeIn>

      {/* Section 8: Personal Mantra */}
      <FadeIn>
        <div className="py-7">
          <div className="font-medium text-2xl py-2">MY MANTRA:</div>
          <p className="px-2 italic text-lg text-gray-500">
            “First, solve the problem. Then, write the code.” – John Johnson
          </p>
        </div>
      </FadeIn>

      <hr />

      {/* Section 9: Personal Details */}
      <FadeIn>
        <div className="flex flex-wrap py-5 px-5 items-start gap-8">
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
              <span className="font-medium text-2xl">Connect: {" "}</span>
              <a className="font-medium text-2xl" href="mailto:nikhilsharmadev27@gmail.com">Email,</a>
              <a className="font-medium text-2xl" href="https://www.linkedin.com/in/nikhil-sharma-496680279/"> LinkedIn,</a>
              <a className="font-medium text-2xl" href="">Facebook,</a>
              <a className="font-medium text-2xl" href="https://www.instagram.com/_.hr.16._/profilecard/?igsh=aWN6ZDR0Y2podDZz">Instagram</a>
            </p>
          </div>
        </div>
      </FadeIn>

      <hr />

      {/* Section 10: Coding Profiles */}
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
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
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
