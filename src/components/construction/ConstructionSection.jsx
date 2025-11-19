import React from "react";
import img1 from "../../assets/const1.jpg";  
import img2 from "../../assets/const2.jpg";  
import img3 from "../../assets/const3.jpg";  

const ConstructionSection = () => {
  const items = [
    { img: img1, title: "Under Construction" },
    { img: img2, title: "Front View" },
    { img: img3, title: "Internal View" },
  ];

  return (
    <div className="w-full py-16 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-3">Construction</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Our experienced team delivers a full range of construction services, 
        handling projects from site preparation to building completion with 
        unmatched precision and expertise.
      </p>

      {/* 3 Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 text-center border border-gray-200"
          >
            <img
              src={item.img}
              className="rounded-xl w-full h-[240px] object-cover mb-4"
              alt={item.title}
            />

            <h3 className="text-lg font-semibold text-yellow-500">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionSection;
