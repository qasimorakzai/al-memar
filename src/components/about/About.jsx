
// import React from "react";
// import Excavator from "../../assets/aa.png"

// const About = () => {
//   return (
//     <div className="w-full bg-[#eef2f5] py-8 ">
//       <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-15 items-center px-6">
        
//         {/* Left Image Section */}
//         <div className="flex justify-center md:justify-start">
//           <img 
//             src={Excavator} 
//             alt="Excavator" 
//             className="w-[450px] md:w-[530px] object-contain"
//           />
//         </div>

//         {/* Right Text Section */}
//         <div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-4 mr-100">
//             About us
//           </h2>

//           <p className="text-gray-700 leading-relaxed text-lg text-justify">
//             Al Memar Trading and Contracting Co, excels in the realm of 
//             excavators and deep excavations, showcasing unparalleled expertise 
//             and innovation. Our commitment to precision and safety in deep 
//             excavation projects sets us apart, ensuring efficient and reliable 
//             results every time. We harness advanced technology and skilled 
//             professionals to tackle even the most challenging projects, 
//             reflecting our dedication to excellence and client satisfaction. 
//             Trust us to deliver outstanding performance and value in every 
//             excavation endeavor.
//           </p>
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition mt-5 mr-105">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React, { useRef, useEffect, useState } from "react";
import Excavator from "../../assets/aa.png";

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) setImageVisible(true);
            if (entry.target === textRef.current) setTextVisible(true);
          } else {
            // Doobara animation ke liye hide kar do jab section se bahar jaye
            if (entry.target === imageRef.current) setImageVisible(false);
            if (entry.target === textRef.current) setTextVisible(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#eef2f5] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

        {/* Left Image - Left se slide (ab bilkul gayab nahi hogi) */}
        <div ref={imageRef} className="flex justify-center md:justify-start overflow-hidden">
          <img
            src={Excavator}
            alt="Excavator"
            className={`
              w-[450px] md:w-[530px] object-contain
              transition-all duration-1000 ease-out
              ${imageVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-48 opacity-0'   /* ← YEH CHANGE KIYA, ab sirf thodi door se aayegi */
              }
            `}
          />
        </div>

        {/* Right Text - Neeche se upar */}
        <div
          ref={textRef}
          className={`
            transition-all duration-1000 ease-out
            ${textVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-32 opacity-0'
            }
          `}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About us
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg text-justify mb-8">
            Al Memar Trading and Contracting Co, excels in the realm of 
            excavators and deep excavations, showcasing unparalleled expertise 
            and innovation. Our commitment to precision and safety in deep 
            excavation projects sets us apart, ensuring efficient and reliable 
            results every time. We harness advanced technology and skilled 
            professionals to tackle even the most challenging projects, 
            reflecting our dedication to excellence and client satisfaction. 
            Trust us to deliver outstanding performance and value in every 
            excavation endeavor.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-md shadow-lg transition">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;