
import {
  Mail,
} from "lucide-react";
import { FaLinkedin , FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg--[#3a2e25] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand / Mission */}
        <div className="col-span-2 space-y-4">
          <h3 className="text-2xl font-bold text-[#D9783C]">Michael Herz Coaching</h3>
          <p className=" text-sm">
            Helping early-career professionals show up with confidence, communicate with clarity, and grow without burnout. It’s not about faking it—it’s about learning to lead authentically.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#D9783C]">Quick Links</h4>
          <ul className="space-y-2 text-sm ">
            <li><a href="#about" className="hover:text-[#D9783C]">About</a></li>
            <li><a href="#coaching" className="hover:text-[#D9783C]">Coaching</a></li>
            <li><a href="#services" className="hover:text-[#D9783C]">Services</a></li>
            <li><a href="#contact" className="hover:text-[#D9783C]">Contact</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#D9783C]">Connect</h4>
          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/michaelherzpmp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-[#0077B5]" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@MichaelHerzCoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6 text-[#FF0000]" />
            </a>

            {/* Email */}
            <a
              href="mailto:michael@herzcoaching.com"
              className="hover:scale-110 transition"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-[#D9783C]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm ">
        © {new Date().getFullYear()} Michael Herz Coaching. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
