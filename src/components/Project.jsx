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

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ProjectTemplate.map((project, index) => (
            <FadeIn key={index}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 shadow-lg">
                
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback for missing images */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="text-sm">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Project type badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      project.type === "Serious Project" 
                        ? "bg-red-50 text-red-600 border-red-200" 
                        : "bg-yellow-50 text-yellow-600 border-yellow-200"
                    }`}>
                      {project.type === "Serious Project" ? "⚡ Serious Project" : "✨ Fun Project"}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-green-600 font-semibold mb-2 flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start text-xs text-gray-600">
                          <span className="text-green-600 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  {project.tech && (
                    <div>
                      <h4 className="text-blue-600 font-semibold mb-2 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View Project Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <a
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group-hover:scale-105 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Project</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-2xl"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Projects;