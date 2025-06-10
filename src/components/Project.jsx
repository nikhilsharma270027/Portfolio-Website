import ProjectTemplate from "../data/ProjectTemplate";
import FadeIn from "../common/AnimatedWrapper";
import { SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
  return (
    <FadeIn>
      <div className="m-5">
        <h2 className="text-2xl font-bold mb-4 mt-12">Projects & works</h2>
        <hr className="py-5" />

        <p className="text-gray-600 text-lg font-normal py-4 pr-5">
          Take a look at a few recent projects I’ve been working on—this is just a glimpse of the full collection.
        </p>

        <p className="text-gray-600 text-lg font-normal py-4">Interested to see some more? Visit my GitHub page.</p>

        <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 max-lg:grid-col gap-y-8 gap-x-4 overflow-hidden">
          {ProjectTemplate.map((project, index) => (
            <FadeIn key={index}>
              <li className="bg-gray-900 text-white rounded-xl p-5 shadow-lg   relative overflow-hidden border border-transparent hover:border-neon-blue shadow-neon">
                {/* Neon glow effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 -z-10 neon-glow"></div>

                <p className="text-sm text-yellow-400 mb-1">
                  {index !== 0 && project.type === "Serious Project" ? "⚡ Serious Project" : "✨ Fun Project"}
                </p>
                <h3 className="text-xl font-semibold mb-1 text-yellow-400 hover:text-shadow-neon-pink-hover">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>

                <p className="font-medium mb-1 text-green-400">Features:</p>
                <ul className="list-disc list-inside text-sm text-gray-200 mb-3">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {project.tech && (
                  <>
                    <p className="font-medium mb-1 text-blue-400">Tech Stack:</p>
                    <p className="text-sm text-gray-300 mb-3">{project.tech.join(", ")}</p>
                  </>
                )}

                <a
                  href={project.link}
                  className="text-sm text-blue-500 hover:text-neon-blue hover:underline text-shadow-neon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ↗
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