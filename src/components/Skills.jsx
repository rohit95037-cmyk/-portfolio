import React from "react";

const Skills = () => {
  // All skills as simple tags
  const allSkills = [
    "JavaScript (ES6+)",
    "React.js",
    "Redux-Saga",
    "Redux Toolkit",
    "HTML5",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Node.js",
    "Express.js",
    "RESTful API Development",
    "Full Stack Development",
    "Docker",
    "Kubernetes",
    "Azure DevOps",
    "Git/GitHub",
    "CI/CD",
    "Agile/Scrum",
    "Oracle SQL Developer",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}></div>
        <div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to create amazing digital
              experiences.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {allSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-700 bg-opacity-80 backdrop-blur-sm text-white rounded-full text-lg font-medium hover:bg-opacity-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-600">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
