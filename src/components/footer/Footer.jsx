import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#0d0f10] text-white py-8 px-6 mt-15 -mb-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 ">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-justify ml-15">Al Memar Trading & Cont Co</h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-justify ml-15">
            Established in 1975, Al Memar Group is a trusted leader in
            construction, specializing in  residential villas, commercial
             buildings, and rental equipment solutions.
            Established in 1975, Al MemarGroup is a trusted leader in
            construction, specializing in residential villas, commercial buildings, and rental equipment solutions.
          </p>

          <div className="space-y-3 text-gray-300 text-justify ml-15">
            <div className="flex items-center gap-3">
              <FaEnvelope /> support@almemargroup.com
            </div>
            <div className="flex items-center gap-3">
              <FaPhone /> Cr No : 1094 | Doha Qatar
            </div>
            <div className="flex items-center gap-3">
              <FaPhone /> PO Box Tel/Fax +974 4442 1891
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt /> Zone 56, Street 995, Building 207, Office Bu Hamour
            </div>
          </div>

          <div className="flex items-center gap-5 mt-6 text-2xl text-justify ml-15">
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 */}
        <div >
          <h2 className="text-2xl font-bold mb-4">CEO & Contractor</h2>
          <h3 className="text-xl">Engr. Essa Khan</h3>

          <div className="space-y-3 mt-4 text-gray-300 text-justify ml-18">
            <div className="flex items-center gap-3">
              <FaPhone /> +924 8855 7138
            </div>

            <div className="flex items-center gap-3 text-green-500">
              <FaWhatsapp /> Chat on WhatsApp
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt /> Doha, Qatar
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sales & Purchase Manager</h2>
          <h3 className="text-xl">Engr. Muhammad Qasim</h3>

          <div className="space-y-3 mt-4 text-gray-300 text-justify ml-15">
            <div className="flex items-center gap-3">
              <FaPhone /> +924 5666 2141 | +974 5582 8609
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope /> qasim@almemargroup.com
            </div>

            <div className="flex items-center gap-3 text-green-500">
              <FaWhatsapp /> Chat on WhatsApp
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt /> Doha, Qatar
            </div>
          </div>

          <div className="flex items-center gap-5 mt-6 text-2xl text-justify ml-15">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
