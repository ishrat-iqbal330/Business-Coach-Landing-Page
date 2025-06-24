import { useState } from "react";
import { Menu, X } from "lucide-react";
import Maxwrapper from "./Maxwrapper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Coaching", href: "#coaching" },
    { name: "Testimonials", href: "#testimonials" },

    { name: "Contact", href: "#contact" },
  ];

  return (
    <Maxwrapper>
      <nav className="bg-[#151414] text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className=" logo flex items-center">
            <img src="./logo.webp" alt="Logo" className="md:w-14 w-8" />
            <span className="text-white md:text-lg text-sm font-semibold">
              Michael Herz Coaching
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#D9783C] transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32nw0wevXz9FIMLnlWKCs_CuY52pSRgwV_QCIbsMtFa8XWK-VELm70OIy5Z-t5usTZc6Ji0JfL?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-gradient-to-r from-[#D9783C] to-[#b85d29] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-[#D9783C]/50 focus:outline-none"
          >
            Book Now
          </a>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 hover:text-[#D9783C] transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="block px-6 py-2 bg-gradient-to-r from-[#D9783C] to-[#b85d29] text-white rounded-full text-start font-semibold tracking-wide shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-[#D9783C]/50 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </Maxwrapper>
  );
};

export default Navbar;
