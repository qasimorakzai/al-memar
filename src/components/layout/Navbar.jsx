// import Logo from "../../assets/memar.PNG"
// export default function Navbar() {
//     return (
//       <nav className="w-full flex items-center justify-between py-4 px-6">
//         <div className="flex items-center ">
//           <img src={Logo} alt="AL-MEMAR" className="h-17 w-auto mt-3 ml-20" />
//         </div>

//         <div className="flex items-center gap-6 mt-3 mr-26 ">
//           <ul className="flex items-center gap-8 font-semibold tracking-wide">
//             <li className="uppercase hover:text-blue-600 cursor-pointer">HOME</li>
//             <li className="uppercase hover:text-blue-600 cursor-pointer">ABOUT</li>
//             <li className="uppercase hover:text-blue-600 cursor-pointer">BOOKINGS</li>
//             <li className="text-yellow-500 cursor-pointer">عربي</li>
//           </ul>
//           <button type="button" aria-label="Toggle theme" className="text-2xl leading-none">
//             {/* Simple moon icon using emoji for now */}
//             <span role="img" aria-hidden>🌙</span>
//           </button>
//         </div>
//       </nav>
//     )
//   }
  


import React, { useState } from "react";
import Logo from "../../assets/memar.PNG";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="AL-MEMAR" className="h-14 md:h-16 w-auto" />
        </div>

        {/* Desktop Menu - Arabic + Moon bhi yahin */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-semibold tracking-wide">
            <li className="uppercase hover:text-blue-600 cursor-pointer transition">Home</li>
            <li className="uppercase hover:text-blue-600 cursor-pointer transition">About</li>
            <li className="uppercase hover:text-blue-600 cursor-pointer transition">Bookings</li>
          </ul>

          <div className="flex items-center gap-6 border-l pl-8 border-gray-300">
            <span className="text-yellow-500 font-bold text-lg cursor-pointer">عربي</span>
            <button
              type="button"
              aria-label="Toggle theme"
              className="text-2xl hover:scale-110 transition"
            >
              🌙
            </button>
          </div>
        </div>

        {/* Mobile - Sirf Hamburger dikhega */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Yahan Arabic aur Moon bhi andar hain! */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-6 space-y-6 font-semibold text-lg">
            <li className="uppercase hover:text-blue-600 cursor-pointer transition">Home</li>
            <li className="uppercase hover:text-blue-600 cursor-pointer transition">About</li>
            <li className="uppercase hover:text-blue-600 cursor-pointer transition">Bookings</li>
            
            {/* Arabic aur Moon mobile menu ke andar */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-300 w-full justify-center">
              <span className="text-yellow-500 font-bold text-xl cursor-pointericks-pointer">عربي</span>
              <button
                type="button"
                aria-label="Toggle theme"
                className="text-3xl"
              >
                🌙
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}