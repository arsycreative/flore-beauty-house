import React from "react";
import "./RasylTemplateUi.css";
import { FaGlobe, FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

const RasylTemplateUi = () => {
  return (
    <div className="bg-[#F4EEE9]">
      <div className=" min-h-screen w-full max-w-lg mx-auto rasyl-cover">
        {/* Top section */}
        <div className="py-5 text-center">
          <h1 className="text-5xl font-bold text-[#433426] mb-2">
            rachel <br /> aishleem
          </h1>
          <p className="text-sm font-medium text-[#a9a199] uppercase tracking-wide">
            traveller • lifestyle blogger
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <a href="#" aria-label="Website">
              <FaGlobe className="text-lg text-[#96775A] hover:text-[#82664b]" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-lg text-[#96775A] hover:text-[#82664b]" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-lg text-[#96775A] hover:text-[#82664b]" />
            </a>
            <a href="#" aria-label="Email">
              <FaEnvelope className="text-lg text-[#96775A] hover:text-[#82664b]" />
            </a>
          </div>
        </div>

        <Slice
          text="about me"
          imageUrl="https://images.unsplash.com/photo-1628646435405-09fd8f4be99d?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Slice
          text="blog"
          imageUrl="https://images.unsplash.com/photo-1523906639004-7dd5e8d4ec02?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Slice
          text="merch"
          imageUrl="https://images.unsplash.com/photo-1521478706270-f2e33c203d95?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Slice
          text="collabs"
          imageUrl="https://images.unsplash.com/photo-1498721409281-998093cc905b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Slice
          text="itinerary"
          imageUrl="https://images.unsplash.com/photo-1519128225713-47c7ff9d1dc5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

function Slice({ text, imageUrl }) {
  return (
    <div className="group relative h-[120px] m-1 overflow-hidden">
      {/* Background image with hover scale animation */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Dark overlay so text is more visible */}
      <div className="absolute inset-0 bg-amber-700/20" />
      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative z-10 text-white text-lg font-semibold tracking-wide drop-shadow-lg">
          {text}
        </span>
      </div>
    </div>
  );
}

export default RasylTemplateUi;
