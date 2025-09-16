import React from "react";
import resumePDF from "../assets/ROHIT.pdf";

const Hero = () => {
  const downloadCV = () => {
    // Open PDF in new window/tab
    window.open(resumePDF, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-primary rounded-full p-1">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-6xl text-gray-500">👤</span>
                </div>
              </div>
              {/* Add floating animation */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse-slow"></div>
              <div
                className="absolute -bottom-2 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-gradient">Rohit Rajput</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Full Stack Developer & UI/UX Designer
            </p>

            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional, and user-centered digital
              experiences. Passionate about coding and solving problems through
              innovative design and technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                View My Work
              </button>

              <button
                onClick={downloadCV}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-300 transform hover:-translate-y-1">
                View My CV
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex justify-center space-x-6">
              {[
                { name: "GitHub", icon: "🔗", url: "https://github.com" },
                {
                  name: "LinkedIn",
                  icon: "💼",
                  url: "linkedin.com/in/rohit-rajput-9a4471237",
                },

                {
                  name: "Email",
                  icon: "📧",
                  url: "mailto:rajput.rohit20001@gmail.com",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  title={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
