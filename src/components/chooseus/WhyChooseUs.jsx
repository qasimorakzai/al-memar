import React from "react";

const services = [
  {
    title: "Construction Division",
    desc: "Construction Division specializes in delivering comprehensive construction solutions, from project planning and design to execution and management. With a focus on quality, safety, and efficiency, we ensure each project is built to the highest standards.",
    icon: "🛠️",
  },
  {
    title: "Procurement Division",
    desc: "Procurement Division streamlines the sourcing and acquisition of materials and equipment, ensuring timely and cost-effective support for all construction projects. Our team maintains high standards and budget control at every step.",
    icon: "📄",
  },
  {
    title: "Excavation Work",
    desc: "Almemar Group provides specialized excavation services with precision and safety, ensuring efficient site preparation for foundations, utilities, and structural work.",
    icon: "🚜",
  },
  {
    title: "Material Supply",
    desc: "We offer high-quality construction materials including aggregates, sand, gravel, and cement, ensuring reliable and timely delivery for all project needs.",
    icon: "📦",
  },
  {
    title: "Heavy Equipment Rental",
    desc: "We provide modern and well-maintained heavy machinery for rent, ensuring efficient operations for construction and excavation projects.",
    icon: "🏗️",
  },
  {
    title: "Technical Consulting",
    desc: "Our expert team provides technical consulting for construction planning, design, and execution, ensuring optimized project outcomes.",
    icon: "📊",
  },
];



const WhyChooseUs = () => {
  return (
    <div className="w-full py-14 bg-white">
      <h2 className="text-center text-4xl font-bold mb-10">Why Choose Us</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#0f0f0f] text-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center 
                       transition-all duration-500 ease-in-out 
                       hover:bg-yellow-500 hover:text-black overflow-hidden"
          >
            {/* Icon */}
            <div className="text-yellow-400 text-5xl mb-4 group-hover:text-black transition-colors duration-500">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-black transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-black/80 transition-colors">
              {item.desc}
            </p>

            {/* Learn more button */}
            <button className="text-yellow-400 font-medium group-hover:text-black transition-colors duration-500">
              Learn more →
            </button>

            {/* Optional: Ek yellow shine effect hover pe (bohot mast lagta hai) */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;