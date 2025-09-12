import React from "react";

const About = () => {
  const stats = [
    { number: "30%", label: "Performance Improvement" },
    { number: "40%", label: "Deployment Cycle Reduction" },
    { number: "React.js", label: "Frontend Expertise" },
    { number: "Jio", label: "Current Company" },
  ];

  const achievements = [
    {
      title: "Computer Science Graduate",
      description:
        "Bachelor's degree in Computer Science with focus on software development and algorithms.",
      icon: "🎓",
    },
    {
      title: "Full Stack Developer",
      description:
        "Experienced in both frontend and backend development with modern technologies.",
      icon: "💻",
    },
    {
      title: "Problem Solver",
      description:
        "Passionate about solving complex problems and creating efficient solutions.",
      icon: "🧩",
    },
    {
      title: "Team Player",
      description:
        "Strong collaboration skills and experience working in agile development teams.",
      icon: "🤝",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Software Development Engineer with expertise in React.js,Node.js
              performance optimization, and modern development practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content - Experience */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Experience
              </h3>

              {/* Experience Item */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Software Development Engineer
                  </h4>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    Jio Platforms Limited
                  </p>
                  <p className="text-gray-500 text-sm">Present</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Built and maintained a fully responsive CRM using
                      React.js, TypeScript, and Material UI.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Improved frontend performance by ~30% via API debouncing,
                      lazy loading, client-side pagination, and Redux
                      optimizations.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Architected micro-frontend modules to decompose a
                      monolithic UI for scalability and maintainability.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Automated CI/CD with Azure DevOps; reduced deployment
                      cycles by ~40% with integrated tests and linting.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Containerized apps with Docker for consistent local dev
                      and deployments across environments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  React.js Expert
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Performance Optimization
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Micro-frontends
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  DevOps
                </span>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4 text-center">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
