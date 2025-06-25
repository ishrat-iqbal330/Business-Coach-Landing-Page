import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedin , FaYoutube } from "react-icons/fa";


const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#fff9f5] to-[#fef5f0] text-[#3a2e25] py-20 px-6 relative overflow-hidden"
    >
      {/* Subtle glowing background blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#D9783C]/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b85d29]/20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block  text-[#D9783C] px-6 py-2 rounded-full text-xl  font-semibold mb-6">
          CONTACT ME
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#3a2e25]">
          Let’s Connect and Grow Together
        </h2>
        <p className="text-[#5f4e3a] mb-12 max-w-2xl mx-auto text-lg">
          Whether you're curious about coaching, ready to book a session, or just want to say hello. I’d love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:Michael@MichaelHerzCoaching.com"
            className="group flex items-center gap-4 border border-[#e0d3c6] hover:border-[#D9783C] bg-white hover:bg-[#fff2e8] px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="text-[#3498db] w-6 h-6 group-hover:scale-110 transition" />
            <span className="font-medium text-[#3a2e25]">Michael@MichaelHerzCoaching.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/michaelherz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-[#e0d3c6] hover:border-[#D9783C] bg-white hover:bg-[#fff2e8] px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FaLinkedin className="text-[#0e76a8] w-6 h-6 group-hover:scale-110 transition" />
            <span className="font-medium text-[#3a2e25]">LinkedIn Profile</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@MichaelHerzCoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-[#e0d3c6] hover:border-[#D9783C] bg-white hover:bg-[#fff2e8] px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
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

