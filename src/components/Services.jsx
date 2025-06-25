import React from "react";
import {
  Eye,
  Handshake,
  ArrowUp,
  UserCheck,
  Users2,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const services = [
    { title: "Clarity Before You Even Walk In", icon: Eye },
    { title: "Build Your Internal Support System", icon: Handshake, featured: true },
    { title: "Confidence Through Action", icon: ArrowUp },
    { title: "Handle Imposter Syndrome", icon: UserCheck },
    { title: "Communicate with Confidence", icon: Users2 },
    { title: "Grow Without Burnout", icon: BarChart3 },
  ];

  return (
    <section className="relative py-16 px-6 bg-gray-50" id="services">
      {/* Light background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#D9783C] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#D9783C] rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-[#D9783C] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-[#D9783C] text-sm font-semibold uppercase tracking-wide">
            Coaching Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]/90 leading-tight">
            A Roadmap for Early Career Confidence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No more guessing your way through a new role. My coaching helps you
            gain clarity, build presence, and grow professionally—without faking it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`bg-white group rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-[#D9783C] rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white`}
                >
                  <Icon className="w-8 h-8 text-white group-hover:text-[#D9783C] transition-colors duration-300" />
                </div>

                {/* Text */}
                <div className="transition-all duration-300 group-hover:text-white">
                  <h3 className="text-xl font-bold text-[#1a1a1a]/90 mb-4 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-gray-600 group-hover:text-white">
                    {getDescription(service.title)}
                  </p>

                  {/* Index */}
                  <div className="flex justify-end">
                    <span className="text-2xl font-bold text-[#D9783C] text-opacity-30 group-hover:text-white group-hover:text-opacity-50 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Hover BG */}
                <div className="absolute inset-0 group-hover:bg-[#D9783C] transition-all duration-300 rounded-2xl z-[-1]" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.linkedin.com/in/michaelherzpmp/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D9783C] hover:bg-[#bd5f2b] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow"
          >
            Start Your Career With Confidence
          </a>
        </div>
      </div>
    </section>
  );
};

// Descriptions for each service card
function getDescription(title) {
  switch (title) {
    case "Clarity Before You Even Walk In":
      return "Know what to ask, how to introduce yourself, and how to earn trust early in your role.";
    case "Build Your Internal Support System":
      return "Learn how to network within your team so you're not doing it all alone—and actually feel supported.";
    case "Confidence Through Action":
      return "Practical tools to manage stress, show initiative, and communicate with professionalism—without faking it.";
    case "Handle Imposter Syndrome":
      return "Recognize the signs, reframe the story, and take grounded action—without spiraling into self-doubt.";
    case "Communicate with Confidence":
      return "Learn what to say (and not say) when networking, updating your manager, or contributing in meetings.";
    case "Grow Without Burnout":
      return "Success doesn't require pretending. Build your presence and career with purpose, not pressure.";
    default:
      return "";
  }
}

export default Services;
