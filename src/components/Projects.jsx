import React, { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    // Add your own projects here
    // Example project structure:
    // {
    //   id: 1,
    //   title: "Your Project Name",
    //   description: "Your project description",
    //   image: "your-image-url",
    //   technologies: ["React", "JavaScript", "CSS"],
    //   category: "frontend", // or "fullstack", "backend"
    //   liveDemo: "your-live-demo-url",
    //   github: "your-github-repo-url",
    //   featured: true,
    // },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in web development.
            </p>
          </div>

          {/* Projects Content */}
          {projects.length > 0 ? (
            <>
              {/* Featured Projects */}
              {featuredProjects.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Featured Projects
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.slice(0, 3).map((project) => (
                      <div
                        key={project.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute top-4 right-4">
                            <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          <div className="flex gap-4">
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-gradient-primary text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300">
                              Live Demo
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center font-medium hover:border-primary-500 hover:text-primary-600 transition-all duration-300">
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Projects Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  I'm currently working on some exciting projects. Check back soon to see my latest work!
                </p>
                <a
                  href="https://github.com/rohit95037-cmyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  <span>View GitHub Profile</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          )}

          {/* Filter Buttons - Only show when there are projects */}
          {projects.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-gradient-primary text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-primary-500 hover:text-primary-600"
                  }`}>
                  {filter.label}
                </button>
              ))}
            </div>
          )}

          {/* All Projects Grid - Only show when there are projects */}
          {projects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-primary text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300">
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center font-medium hover:border-primary-500 hover:text-primary-600 transition-all duration-300">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action - Only show when there are projects */}
          {projects.length > 0 && (
            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 mb-6">
                Want to see more of my work?
              </p>
              <a
                href="https://github.com/rohit95037-cmyk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <span>View All on GitHub</span>
                <span>→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
