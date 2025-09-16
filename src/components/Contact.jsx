import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    // For demo purposes, we'll just show a success message
    setFormStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => {
      setFormStatus("");
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "rajput.rohit20001@gmail.com",
      link: "mailto:rajput.rohit20001@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+919503763985",
      link: "tel:+919503763985",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Mumbai, India",
      link: "https://maps.google.com",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/rohit-rajput-9a4471237",
      link: "linkedin.com/in/rohit-rajput-9a4471237",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative
              projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  I'm currently available for freelance work and full-time
                  opportunities. Whether you have a project in mind or just want
                  to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.link.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{info.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Follow Me
                </h4>
                <div className="flex justify-center space-x-6">
                  {[
                    { name: "GitHub", icon: "🔗", url: "https://github.com" },
                    {
                      name: "LinkedIn",
                      icon: "💼",
                      url: "https://linkedin.com",
                    },
                    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
                    {
                      name: "Instagram",
                      icon: "📷",
                      url: "https://instagram.com",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-primary rounded-full shadow-lg flex items-center justify-center text-xl text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                      title={social.name}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              {formStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can bring your ideas to life with modern web
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rajput.rohit20001@gmail.com"
                className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                📧 Email Me Directly
              </a>
              <a
                href="tel:+919503763985"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                📱 Call Me Now
              </a>
              <a
                href="/ROHIT.pdf"
                download="ROHIT_CV.pdf"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-300 transform hover:-translate-y-1">
                📄 Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
