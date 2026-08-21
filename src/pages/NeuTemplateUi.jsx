import React from "react";
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const NeuTemplateUi = () => {
  return (
    <div className="bg-[#FFE12A] min-h-screen w-full flex flex-col items-center justify-center p-8 text-black">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-black mb-3">
          {/* Ganti URL ini dengan foto profil kamu (bisa dari Unsplash) */}
          <img
            src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold flex items-center gap-1">
          Neu Aishleem
          <span className="text-blue-600">✔</span>
        </h1>
        <p className="text-sm">playing around figma 🤓🖌️</p>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mb-8">
        <a
          href="#"
          className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors 
                     shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="#"
          className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors 
                     shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors 
                     shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
        >
          <FaTiktok size={20} />
        </a>
        <a
          href="#"
          className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors 
                     shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
        >
          <FaYoutube size={20} />
        </a>
      </div>

      {/* Link Buttons */}
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <a
          href="#"
          className="relative border-4 border-black px-4 py-3 text-center font-semibold 
                     bg-[#FF8888] shadow-[5px_5px_0_0_rgba(0,0,0,1)] transition-transform
                     hover:-translate-x-1 hover:-translate-y-1"
        >
          Buy Me A Coffee ☕
        </a>
        <a
          href="#"
          className="relative border-4 border-black px-4 py-3 text-center font-semibold 
                     bg-[#72FF72] shadow-[5px_5px_0_0_rgba(0,0,0,1)] transition-transform
                     hover:-translate-x-1 hover:-translate-y-1"
        >
          Join My Newsletter 📰
        </a>
        <a
          href="#"
          className="relative border-4 border-black px-4 py-3 text-center font-semibold 
                     bg-[#71DAFF] shadow-[5px_5px_0_0_rgba(0,0,0,1)] transition-transform
                     hover:-translate-x-1 hover:-translate-y-1"
        >
          Learn Figma 🖌️
        </a>
        <a
          href="#"
          className="relative border-4 border-black px-4 py-3 text-center font-semibold 
                     bg-[#FFA500] shadow-[5px_5px_0_0_rgba(0,0,0,1)] transition-transform
                     hover:-translate-x-1 hover:-translate-y-1"
        >
          New Designs OUT! 🚀
        </a>
        <a
          href="#"
          className="relative border-4 border-black px-4 py-3 text-center font-semibold 
                     bg-[#F3A1FF] shadow-[5px_5px_0_0_rgba(0,0,0,1)] transition-transform
                     hover:-translate-x-1 hover:-translate-y-1"
        >
          Book 1-on-1 w/ me! 💬
        </a>
      </div>
    </div>
  );
};

export default NeuTemplateUi;
