import React from "react";
import img1 from "../images/img1.jpg";

const Card = () => {
  return (
    <div className="flex aspect-[2/1] w-full max-w-5xl overflow-hidden shadow-2xl">
      {/* LEFT CONTENT PANEL */}
      <div className="w-1/2 bg-[#0f0f0f] text-white items-center justify-center flex flex-col px-12 gap-5">
        {/* Icon */}
        <div className="flex justify-start">
          <div className="border-2 border-red-600 p-3 rounded-md">
            <span className="text-red-600 text-3xl">🥋</span>
          </div>
        </div>

        <h2 className="text-3xl font-semibold tracking-wide">
          Mixed Martial Arts
        </h2>

        <p className="text-gray-400 max-w-sm leading-relaxed">
          Learn the world’s best combat sport with our award winning MMA classes
        </p>

        <button className="text-white bg-dangerRed px-4 py-2 rounded-md flex items-center gap-2 font-semibold tracking-widest hover:gap-4 transition-all">
          READ MORE <span>→</span>
        </button>
      </div>

      {/* RIGHT IMAGE PANEL */}
      <div className="w-1/2">
        <img
          src={img1}
          alt="MMA Training"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Card;
