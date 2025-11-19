// import React from "react";

// const ContactSection = () => {
//   return (
//     <div className="w-full  text-white rounded-lg shadow-lg mt-15 ">
//       <div className="max-w-7xl bg-gray-600 rounded-lg shadow-2xl py-8 px-6  mx-auto grid md:grid-cols-2 gap-10 ">

//         {/* Left Text Section */}
//         <div>
//           <h1 className="text-4xl sm-text-5x1-font-bold text-white">
//             Let's collaborate on your upcoming AI Memar Group venture
//           </h1>

//           <p className="text-gray-300 mt-4">
//             Please provide your details and services you need. Our team will contact
//             you soon.
//           </p>
//         </div>

//         {/* Right Form Section */}
//         <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
//           <form className="flex flex-col space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-3 rounded-lg bg-white text-black outline-none"
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-3 rounded-lg bg-white text-black outline-none"
//             />

//             <textarea
//               placeholder="Services you need"
//               rows="4"
//               className="p-3 rounded-lg bg-white text-black outline-none"
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
//             >
//               SEND
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ContactSection;




import React, { useRef, useEffect, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // har baar animation ke liye
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full text-white rounded-lg shadow-lg mt-15">
      {/* Ye pura container zoom hoga */}
      <div
        ref={sectionRef}
        className={`
          max-w-7xl bg-gray-600 rounded-lg shadow-2xl py-8 px-6 mx-auto 
          grid md:grid-cols-2 gap-10
          transition-all duration-1000 ease-out
          ${isVisible 
            ? 'scale-100 opacity-100' 
            : 'scale-90 opacity-30'
          }
        `}
      >
        {/* Left Text Section - bilkul waisa hi */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Let's collaborate on your upcoming AI Memar Group venture
          </h1>

          <p className="text-gray-300 mt-4">
            Please provide your details and services you need. Our team will contact
            you soon.
          </p>
        </div>

        {/* Right Form Section - bilkul waisa hi */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white text-black outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white text-black outline-none"
            />

            <textarea
              placeholder="Services you need"
              rows="4"
              className="p-3 rounded-lg bg-white text-black outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;