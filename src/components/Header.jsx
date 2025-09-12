import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient cursor-pointer">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Experience", "Skills", "Projects", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item === "Experience" ? "about" : item.toLowerCase()
                    )
                  }
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                  {item}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-3" : ""
                }`}></span>
              <span
                className={`absolute top-2 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}></span>
              <span
                className={`absolute top-4 left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 top-3" : ""
                }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}>
          <div className="py-4 space-y-4">
            {["Home", "Experience", "Skills", "Projects", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item === "Experience" ? "about" : item.toLowerCase()
                    )
                  }
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2">
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
