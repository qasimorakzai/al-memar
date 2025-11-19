import React from 'react';
import image from "../../assets/qasim.png";

const TeamMember = () => {
  return (
    <div className="w-full bg-gray-100 py-10 ">
      
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src={image}
              alt="Engr. Muhammad Qasim"
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
            <h3 className="text-xl font-semibold mt-4">Engr. Muhammad Qasim</h3>
            <p className="text-md text-gray-600 mt-2">Sales & Purchase Manager</p>
            <p className="text-sm text-gray-500 mt-2">
              Engr. muhammad Qasim is a highly skilled & results-driven Purchasing Manager with extensive experience in procurement and supply chain management. With a sharp focus on cost optimization and operational efficiency, he excels in sourcing high-quality materials, equipment's, & services while ensuring timely delivery and adherence to budgetary constraints.
            </p>
          </div>
        </div>
      
    </div>
  );
};

export default TeamMember;
