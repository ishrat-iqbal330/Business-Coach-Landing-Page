import React from "react";
import { Users, Brain, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Stress & Mindset",
      icon: <Brain className="w-6 h-6 text-[#D9783C]" />,
      desc: "SIMA Method to manage stress, beat imposter syndrome, and boost confidence."
    },
    {
      title: "Strategic Networking",
      icon: <Users className="w-6 h-6 text-[#D9783C]" />,
      desc: "Build authentic relationships and connect with mentors or clients."
    },
    {
      title: "Pro Communication",
      icon: <MessageSquare className="w-6 h-6 text-[#D9783C]" />,
      desc: "Master communication with clear frameworks and trusted strategies."
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 px-6 bg-[#fdf8f4] "
    >
      <div className="max-w-5xl mx-auto text-center space-y-14">
        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D9783C]">
            What Truly Sets Us Apart
          </h2>
          <p className="text-[#1a1a1a] mt-2">We help you grow with clarity, not chaos.</p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#f2e6df] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#fdf1ea] rounded-md mb-4">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-700">{service.desc}</p>
              <button className="mt-4 text-[#D9783C] font-semibold text-sm hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <a
            href="#book"
            className="mt-12 inline-block bg-[#D9783C] hover:bg-[#b85d29] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
