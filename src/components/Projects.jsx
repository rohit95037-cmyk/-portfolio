import React, { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "JCMS — Internal SAP PRM Replacement Portal",
      description:
        "Built an in-house web utility to fully replace SAP PRM for partner relationship management, reducing per-transaction processing time by 30% and eliminating third-party licensing costs.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=500&q=60",
      technologies: ["React.js", "Node.js", "Express.js", "Oracle SQL", "Docker"],
      category: "fullstack",
      github: "https://github.com/rohit95037-cmyk",
      liveDemo: null,
    },
    {
      id: 2,
      title: "Banking Email-to-SAP Integration Engine",
      description:
        "Automated parsing of structured banking emails to extract financial transactions and post them directly to SAP via RFC calls—removing 35% of manual finance team effort in daily reconciliation workflows.",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=500&q=60",
      technologies: ["Python", "Django", "MySQL", "SAP RFC (PyRFC)", "Celery"],
      category: "backend",
      github: "https://github.com/rohit95037-cmyk",
      liveDemo: null,
    },
    {
      id: 3,
      title: "Technician Territory Assignment System",
      description:
        "Designed and built a geo-based territory mapping tool for assigning field technicians to service zones, integrated with partner onboarding workflows and live status dashboards.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60",
      technologies: ["React.js", "Redux Toolkit", "Node.js", "Oracle SQL"],
      category: "fullstack",
      github: "https://github.com/rohit95037-cmyk",
      liveDemo: null,
    },
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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Projects aligned with the work described in my resume.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 transform hover:-translate-y-1 ${
                  activeFilter === filter.key
                    ? "bg-gradient-primary text-white border-transparent shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary-500 hover:text-primary-600"
                }`}>
                {filter.label}
              </button>
            ))}
          </div>

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
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-primary text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300">
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex-1" />
                    )}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center font-medium hover:border-primary-500 hover:text-primary-600 transition-all duration-300">
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default Projects;
