import SkillTemplate from "../data/SkillTemplate";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Skills = () => {
  return (
    <section className="m-5">
      <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
      <hr className="py-5" />

      <div className="relative">
        <div>
          <p className="font-medium text-2xl py-5">DS & Algo</p>
          <div className="progress1">
            <span className="progressbo left-5 right-5 top-5"></span>
          </div>
          <p className="font-medium text-2xl py-5">WEB DEV</p>
          <div className="progress2">
            <span className=""></span>
          </div>
          <p className="font-medium text-2xl py-5">UX / UI</p>
          <div className="progress3">
            <span className=""></span>
          </div>
        </div>
        <div className="absolute progressbox1 bg-gray-400"></div>
        <div className="absolute progressbox2 bg-gray-400"></div>
        <div className="absolute progressbox3 bg-gray-400"></div>
      </div>

      <h2 className="text-2xl font-bold mb-4 py-5 mt-8">MY Stack</h2>
      <hr className="py-5" />

      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 py-10">
        {/* Icons */}
        {SkillTemplate.map((Skill, index) => (
          <motion.div
            key={index}
            className="skill group relative overflow-hidden"
            whileHover={{ scale: 1.1 }} // Add scale effect on hover
            transition={{ type: "spring", stiffness: 300 }} // Optional: Add springy transition
          >
            <img
              src={Skill.srcLink}
              alt={Skill.alt}
              className="w-28 opacity-70 transition-opacity group-hover:opacity-100"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;