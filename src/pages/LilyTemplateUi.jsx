import React from "react";
import {
  FaWhatsapp,
  FaTiktok,
  FaLink,
  FaRegHeart,
  FaYoutube,
} from "react-icons/fa";
import "./LilyTemplateUi.css";

const LilyTemplateUi = () => {
  const links = [
    { id: 1, title: "Shop Collection", url: "#", icon: <FaLink /> },
    { id: 2, title: "New Arrivals", url: "#", icon: <FaLink /> },
    { id: 3, title: "Summer Sale", url: "#", icon: <FaLink /> },
    { id: 4, title: "Contact Us", url: "#", icon: <FaLink /> },
  ];

  return (
    <div className="min-h-screen bg-[url('./assets/lily.jpg')] bg-cover bg-center flex flex-col items-center justify-center relative font-sans">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-lg w-full justify-center items-center px-4 py-4 relative z-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-white hover:border-[#dba27a] transition duration-300 mb-4 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1536814294574-df49a3cc97bd?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-cursive text-white mb-2 drop-shadow-md sacramento">
            Lily Aishleem
          </h1>
          <p className="text-center text-white text-sm max-w-xs drop-shadow-md">
            ✨ Fashion Enthusiast | Lifestyle Blogger ✨ Discover my world of
            style and beauty
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="flex items-center justify-center bg-[#e2a67b] backdrop-blur-sm text-white py-4 rounded-lg 
              transform transition-all duration-300 hover:scale-105 hover:bg-[#c79068]"
            >
              <span className="mr-3 text-xl">{link.icon}</span>
              {link.title}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-white hover:text-[#dba27a] transition-colors"
          >
            <FaYoutube className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#dba27a] transition-colors"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#dba27a] transition-colors"
          >
            <FaTiktok className="text-2xl" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white flex items-center justify-center">
            Made with <FaRegHeart className="mx-1" /> by Lily
          </p>
        </div>
      </div>
    </div>
  );
};

export default LilyTemplateUi;
