import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#D9783C] py-20 px-6 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag */}
        <span className="inline-block bg-white text-[#D9783C] px-6 py-2 rounded-full text-sm font-semibold mb-6">
          CONTACT ME
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
          Let’s Connect and Grow Together
        </h2>

        {/* Paragraph */}
        <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          Whether you're curious about coaching, ready to book a session, or just want to say hello — I’d love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:Michael@MichaelHerzCoaching.com"
            className="group flex items-center gap-4 border border-white/20 hover:border-white bg-white hover:bg-[#fff4ec] px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="text-[#3498db] w-6 h-6 group-hover:scale-110 transition" />
            <span className="font-medium text-[#3a2e25]">
              Michael@MichaelHerzCoaching.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/michaelherz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-white/20 hover:border-white bg-white hover:bg-[#fff4ec] px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FaLinkedin className="text-[#0e76a8] w-6 h-6 group-hover:scale-110 transition" />
            <span className="font-medium text-[#3a2e25]">LinkedIn Profile</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@MichaelHerzCoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-white/20 hover:border-white bg-white hover:bg-[#fff4ec] px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FaYoutube className="text-[#ff0000] w-6 h-6 group-hover:scale-110 transition" />
            <span className="font-medium text-[#3a2e25]">YouTube Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
