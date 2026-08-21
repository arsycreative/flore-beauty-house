import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import "./OliviaTemplateUi.css";
import olivia from "../assets/olivia.jpeg";

const OliviaTemplateUi = () => {
  return (
    <div className="olivia-cover min-h-screen flex items-center justify-center py-8 px-4">
      <div className="bg-pink-200/10 backdrop-blur-xs shadow rounded-3xl px-6 py-8 max-w-md w-full text-center">
        {/* Profile Picture */}
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-white mx-auto"
          src={olivia}
          alt="Profile"
        />
        {/* Name & Tagline */}
        <h1 className="mt-4 text-3xl text-white drop-shadow-xl">
          Olivia Aishleem
        </h1>
        <h4 className=" text-4xl text-white whistle drop-shadow-xl">
          Content Creator
        </h4>
        <p className="mt-4 text-white drop-shadow-xl">
          Welcome to my world of creativity and inspiration!
        </p>
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-white hover:text-[#a55457] transition duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-white hover:text-[#a55457] transition duration-300" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-2xl text-white hover:text-[#a55457] transition duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-2xl text-white hover:text-[#a55457] transition duration-300" />
          </a>
        </div>
        {/* Buttons/Links */}
        <div className="mt-8 space-y-6">
          <a
            href="https://example.com/portfolio"
            className="block bg-white hover:bg-pink-50 text-[#b76568] py-4 px-4 rounded-2xl transition duration-300"
          >
            MY PORTFOLIO
          </a>

          <a
            href="https://example.com/blog"
            className="block bg-[#b76568] hover:bg-[#a55457] text-white py-4 px-4 rounded-2xl transition duration-300"
          >
            BLOG
          </a>
          <a
            href="https://example.com/blog"
            className="block bg-white hover:bg-pink-50 text-[#b76568] py-4 px-4 rounded-2xl transition duration-300"
          >
            JOURNAL
          </a>
          <a
            href="https://example.com/contact"
            className="block bg-[#b76568] hover:bg-[#a55457] text-white py-4 px-4 rounded-2xl transition duration-300"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </div>
  );
};

export default OliviaTemplateUi;
