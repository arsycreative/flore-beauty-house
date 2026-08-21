import React from "react";
import "./ClaireTemplateUi.css";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import floreLogo from "../assets/flore-logo.png";

const ClaireTemplateUi = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-start justify-start bg-[#f9f2ec]  bg-[url('https://www.transparenttextures.com/patterns/flowers.png')]
        bg-repeat"
    >
      {/* Wrapper with max-width to resemble a mobile-friendly layout */}
      <div className="relative w-full ">
        {/* TOP SECTION with background */}
        <div className="h-44 w-full bg-[#7b765d] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white sacramento">
            Welcome To My Site
          </h1>
          <p className="mt-1 text-sm text-white tracking-wider">
            Wisdom &amp; Happinesss
          </p>
        </div>

        {/* PROFILE IMAGE overlapping top and bottom */}
        <div className="absolute top-32 left-1/2 flex -translate-x-1/2">
          <div className="h-28 w-28 overflow-hidden rounded-full border-8 border-[#f9f2ec]">
            {/* Logo Flore Beauty House */}
            <img
              src={floreLogo}
              alt="Flore Beauty House"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM SECTION (White area) */}
        <div className="mt-20 flex flex-col items-center  px-6 pb-8">
          {/* Name and Role */}
          <h2 className="text-3xl font-bold text-[#313028]">Flore Beauty House</h2>
          <p className="mt-1 text-sm uppercase tracking-wider text-[#827e61]">
            Where Beauty Feels Personal
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col space-y-4">
            <a
              href="https://drive.google.com/drive/folders/1Mei-dlWkWFzmypBsoVZ7_zPnPDrN7rCO"
              target="_blank"
              rel="noopener noreferrer"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              Face Treatment
            </a>
            <a
              href="https://drive.google.com/drive/folders/187MUilTHyuy_-iFPTrUHEpirZTyL27py"
              target="_blank"
              rel="noopener noreferrer"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              Hair Treatment
            </a>
            <a
              href="https://drive.google.com/drive/folders/1o-viajleD-yTI6CNNtbpkG3rQYuNTgLa"
              target="_blank"
              rel="noopener noreferrer"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              Price List
            </a>
            <a
              href="https://goo.gl/maps/WNyFeVUTwa52"
              target="_blank"
              rel="noopener noreferrer"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              📍 Pabrik Reznez Gallery — Saketi, Pandeglang
            </a>
            <a
              href="https://wa.me/6285121942958?text=Halo%20kak%2C%20saya%20mau%20tanya-tanya%20%F0%9F%98%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              💬 Chat via WhatsApp
            </a>
          </div>

          {/* Horizontal line */}
          <hr className="mb-4 mt-7 w-full border-t border-[#7b765d]/40" />

          {/* Social Media Icons */}
          <div className="mt-2 flex space-x-5 text-[#7b765d]">
            <a
              href="https://wa.me/6285121942958?text=Halo%20kak%2C%20saya%20mau%20tanya-tanya%20%F0%9F%98%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#726e59]"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://goo.gl/maps/WNyFeVUTwa52"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#726e59]"
            >
              <FaMapMarkerAlt size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaireTemplateUi;
