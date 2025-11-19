// import HeroImage from "../../assets/hero.png";
// import { useRef, useEffect, useState } from 'react';

// export default function Hero() {
//   const imgRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);        // ← Visible → animation on
//           } else {
//             setIsVisible(false);       // ← Chala gaya screen se → wapas hide ho jayegi taake dobara aaye to phir animation chale
//           }
//         });
//       },
//       {
//         threshold: 0.3,
//         rootMargin: "0px 0px -100px 0px"
//       }
//     );

//     if (imgRef.current) {
//       observer.observe(imgRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="w-full max-w-7xl mx-auto pr-6 pl-0 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-15">

//       {/* Left Text */}
//       <div className="space-y-2 ml-13 mt-4">
//         <p className="text-yellow-600 font-bold leading-tight text-left text-lg md:text-xl -mt-2">
//           Effortless
//         </p>
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight text-left -mt-2">
//           Powering
//           <br />
//           Industries
//         </h1>
//         <div className="pt-4">
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3 rounded-md shadow-sm">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Right Image - Har baar scroll pe animation */}
//       <div className="flex justify-center md:justify-end mb-7">
//         <img
//           ref={imgRef}
//           src={HeroImage}
//           alt="Construction crane truck"
//           className={`
//             mr-25 sm:scale-125 relative -z-10 max-h-[400px] 
//             drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]
//             transition-all duration-1000 ease-out
//             ${isVisible 
//               ? 'translate-x-0 opacity-100' 
//               : 'translate-x-full opacity-0'
//             }
//           `}
//         />
//       </div>

//     </section>
//   );
// }



import HeroImage from "../../assets/hero.png";
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-5 
                        grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start mt-30">

      {/* Left Text - Fully Responsive */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-yellow-600 font-bold text-xl sm:text-2xl lg:text-3xl leading-tight">
          Effortless
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2">
          Powering
          <br className="block sm:hidden" /> {/* Mobile pe line break yahin */}
          <span className="block sm:inline"> Industries</span>
        </h1>

        {/* Get Started Button - Mobile pe center + thoda neeche */}
        <div className="mt-8 sm:mt-10 lg:mt-12 w-full flex justify-center md:justify-start">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold 
                               px-8 py-4 rounded-md shadow-lg text-lg sm:text-xl 
                               transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          ref={imgRef}
          src={HeroImage}
          alt="Construction crane truck"
          className={`
            w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-none
            mr-0 md:mr-25
            scale-100 sm:scale-110 md:scale-125
            relative -z-10
            max-h-[300px] sm:max-h-[380px] md:max-h-[400px]
            object-contain drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]
            transition-all duration-1000 ease-out
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        />
      </div>
    </section>
  );
}