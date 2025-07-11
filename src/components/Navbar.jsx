import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Mock Maxwrapper component
const Maxwrapper = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Coaching", href: "#coaching" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Maxwrapper>
      <nav
        className={
          "text-white px-6 py-4 fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out"
        }
      >
        <div
          className={`mx-auto flex justify-between items-center transition-all duration-500 ease-in-out ${
            isScrolled
              ? "max-w-4xl bg-[#151414]/50 backdrop-blur-lg rounded-full px-6 py-3  "
              : "max-w-7xl"
          }`}
        >
          {/* Logo */}
          <div className="logo flex items-center">
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
          <div className="md:hidden mt-4 mx-4 p-4 bg-[#151414]/90 backdrop-blur-lg rounded-2xl border border-white/10 space-y-4 text-sm font-medium transition-all duration-300">
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
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32nw0wevXz9FIMLnlWKCs_CuY52pSRgwV_QCIbsMtFa8XWK-VELm70OIy5Z-t5usTZc6Ji0JfL?gv=true"
              target="_blank"
              rel="noopener noreferrer"
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