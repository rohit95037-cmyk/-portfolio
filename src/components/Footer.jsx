import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🔗", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Email", icon: "📧", url: "mailto:your.email@example.com" },
  ];

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                <span className="text-gradient">Rohit Rajput</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Passionate full-stack developer creating beautiful, functional,
                and user-centered digital experiences. Always learning, always
                building.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.url.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-primary transition-all duration-300 transform hover:-translate-y-1"
                    title={social.name}>
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleScrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400">📧</span>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200">
                    rajput.rohit20001@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400">📱</span>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-400 hover:text-white transition-colors duration-200">
                    9503763985
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400">📍</span>
                  <span className="text-gray-400">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Get notified about my latest projects and blog posts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; {currentYear} Your Name. All rights reserved.</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gradient-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
        title="Back to top">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
