import HeroImage from "../../assets/hero.png";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const imgRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Jab view me aaye → animation ON
            setAnimate(true);

            // Animation end hone ke 1 second baad reset taake next time phir animate ho
            setTimeout(() => setAnimate(false), 1200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-5 
                        grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start mt-30">

      {/* Left Content */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-yellow-600 font-bold text-xl sm:text-2xl lg:text-3xl leading-tight">
          Effortless
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2">
          Powering <br className="block sm:hidden" />
          <span className="block sm:inline"> Industries</span>
        </h1>

        <div className="mt-8 sm:mt-10 lg:mt-12 w-full flex justify-center md:justify-start">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold 
                             px-8 py-4 rounded-md shadow-lg text-lg sm:text-xl 
                             transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

     {/* Right Image */}
<div className="flex justify-center">
  <img
    ref={imgRef}
    src={HeroImage}
    alt="hero"
    className={`
      w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-none
      scale-100 sm:scale-110 md:scale-125
      relative -z-10
      max-h-[300px] sm:max-h-[380px] md:max-h-[400px]
      object-contain drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]
      transition-all duration-1000 ease-out

      ${animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-100"}
    `}
  />
</div>

    </section>
  );
}
