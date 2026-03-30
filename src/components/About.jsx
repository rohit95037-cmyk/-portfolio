import React from "react";

const About = () => {
  const stats = [
    { number: "35%", label: "Manual Effort Reduction" },
    { number: "25%", label: "Batch Throughput Improvement" },
    { number: "PyRFC", label: "SAP Integration Expertise" },
    { number: "Celery", label: "Reliable Background Jobs" },
  ];

  const achievements = [
    {
      title: "Engineering Excellence Award (2024)",
      description:
        "Recognized for high-impact partner management features under strict SLAs.",
      icon: "🏆",
    },
    {
      title: "SAP PRM -> JCMS Migration",
      description:
        "Reduced processing time by 30% and eliminated dependency on external SAP UI.",
      icon: "🔄",
    },
    {
      title: "Priority-1 Incident Resolution",
      description:
        "Consistently resolved production incidents under SLA for enterprise partner operations.",
      icon: "⚡",
    },
    {
      title: "6+ Production Deliveries",
      description:
        "Delivered improvements across partner lifecycle, territory management, and operational reporting.",
      icon: "✅",
    },
  ];

  const experiences = [
    {
      company: "Lloyds Metals and Energy",
      period: "Jan 2026 – Present",
      bullets: [
        "Built an enterprise integration platform using Python, Django, MySQL, and SAP RFC (PyRFC) to automate financial transaction processing from banking emails and dispatch-data ingestion into SAP—reducing manual effort by 35%.",
        "Designed scalable multi-source ingestion pipelines (email parsing, DB-driven processing, Excel batch workflows) to ensure reliable SAP posting and automated OBD generation.",
        "Exposed secure REST APIs integrated with React-based UI modules for configuration management, monitoring dashboards, virtual account mapping, and centralized error tracking.",
        "Implemented validation layers, retry mechanisms, background job processing (Celery), and structured logging to improve accuracy and recovery for failed transactions.",
        "Optimized MySQL queries and indexing strategies, improving batch processing throughput by 25%.",
      ],
      tags: ["Python", "Django", "SAP RFC (PyRFC)", "Celery", "MySQL", "React"],
    },
    {
      company: "Jio Platforms Limited",
      period: "Dec 2022 – Dec 2025",
      bullets: [
        "Developed scalable full-stack modules using React.js, Node.js, Express.js, REST APIs, and Material UI—supporting partner onboarding workflows and technician territory assignment systems for thousands of users.",
        "Engineered high-performance frontend architecture using Redux Toolkit, lazy loading, API debouncing, and optimized state management—improving UI performance by 30%.",
        "Implemented micro-frontend architecture to increase modularity, release parallelism, and cross-team delivery velocity across 4+ squads.",
        "Led migration to JCMS (in-house web portal replicating SAP PRM) using React.js and Node.js—reducing processing time by 30% and eliminating dependency on external SAP UI.",
        "Automated CI/CD pipelines using Azure DevOps and containerized applications with Docker and Kubernetes—reducing deployment time by 40% and improving release stability.",
        "Delivered 6+ high-impact features across partner lifecycle management, territory mapping, and operational reporting—recognized for engineering excellence in 2024.",
      ],
      tags: [
        "React.js",
        "Redux Toolkit",
        "Micro-frontends",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Software Development Engineer focused on full-stack integrations,
              CI/CD automation, and SAP-connected enterprise systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div
                    key={exp.company}
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        Software Development Engineer
                      </h4>
                      <p className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                    </div>

                    <div className="space-y-3">
                      {exp.bullets.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
