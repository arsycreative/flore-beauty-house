import React from "react";
import dummy1 from "../assets/dummy1.png";
import londonBackground from "../assets/london-background2.jpg";

// Import icons from react-icons
import { FaTools, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const LondonTemplateUI = () => {
  const buttonText = [
    "Marketing Tools",
    "Digital Marketing",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  // Mapping each button text to its corresponding icon
  const iconMapping = {
    "Marketing Tools": <FaTools className="w-5 h-5" />,
    "Digital Marketing": <SiFrontendmentor className="w-5 h-5" />,
    LinkedIn: <FaLinkedin className="w-5 h-5" />,
    Twitter: <FaTwitter className="w-5 h-5" />,
    Instagram: <FaInstagram className="w-5 h-5" />,
  };

  function Button({ text }) {
    return (
      <button className="transition-all duration-300 hover:bg-gray-100 border bg-white/10 backdrop-blur-xl border-white/30 rounded-full h-12 w-full text-gray-95\00 font-medium flex items-center justify-center space-x-2">
        {iconMapping[text]}
        <span>{text}</span>
      </button>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${londonBackground})` }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Glassmorphism card */}
      <div className="relative mx-4 z-10 p-10 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg max-w-md w-full text-center">
        <img
          src={dummy1}
          alt="Jessica Randall"
          className="w-24 h-24 rounded-full mx-auto border-4 border-white/50 shadow-md"
        />

        <div className="mt-6">
          <h1 className="text-2xl font-bold text-white drop-shadow-sm">
            Jessica Randall
          </h1>
          <p className="mt-1 text-sm text-[#c5f82b] uppercase tracking-wider">
            Jakarta, Indonesia
          </p>
        </div>

        <p className="mt-4 text-base text-gray-200">
          "Empowering brands with creative marketing strategies."
        </p>

        <div className="mt-6 space-y-4">
          {buttonText.map((text, index) => (
            <Button key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LondonTemplateUI;
