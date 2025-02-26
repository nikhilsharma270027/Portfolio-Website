// import ProjectTemplate from "../data/ProjectTemplate";
// import { motion } from "framer-motion";
// import { fadeIn } from "../lib/variants";

// const Projects = () => {
//   return (
//     <div className="m-5">
//       <h2 className="text-2xl font-bold mb-4 mt-12">Projects & works</h2>
//       <hr className="py-5" />

//       <p className="text-gray-600 text-lg font-normal py-4 pr-5">
//         Take a look at a few recent projects I’ve been working on—this is just a
//         glimpse of the full collection.
//       </p>

//       <p className="text-gray-600 text-lg font-normal py-4">
//         Interested to see some more? Visit my GitHub page.
//       </p>

//       <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
//         {ProjectTemplate.map((template, index) => (
//           <li key={index}>
//             <a href={template.link}>
//               <motion.img
//               variants={fadeIn("left", 0.1)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{once: false, amount: 0.2}}
//               whileHover={{ scale: 1.05 }} // Add scale effect on hover
//                 transition={{ type: "spring", stiffness: 300 }} // Optional: Add a springy transition
//                 alt="portfolio"
//                 className="w-96 h-64 rounded-lg shadow-lg "
//                 src={template.image}
//               />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Projects;
import ProjectTemplate from "../data/ProjectTemplate";
import FadeIn from "../common/AnimatedWrapper";

const Projects = () => {
  return (
    <FadeIn>
      <div className="m-5">
        <h2 className="text-2xl font-bold mb-4 mt-12">Projects & works</h2>
        <hr className="py-5" />

        <p className="text-gray-600 text-lg font-normal py-4 pr-5">
          Take a look at a few recent projects I’ve been working on—this is just
          a glimpse of the full collection.
        </p>

        <p className="text-gray-600 text-lg font-normal py-4">
          Interested to see some more? Visit my GitHub page.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 max-lg:grid-col gap-y-8 gap-x-4 overflow-hidden">
          {ProjectTemplate.map((template, index) => (
            <FadeIn key={index} >
              <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <a href={template.link}>
                  <img
                    alt="portfolio"
                    className="w-96 h-64 rounded-lg shadow-lg "
                    src={template.image}
                  />
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
};

export default Projects;