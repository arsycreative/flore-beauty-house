import React from "react";
import brixHeader from "../assets/brix-header.png";
import "./BrixTemplateUi.css";
import { HiArrowUpRight } from "react-icons/hi2";
import FacebookIcon from "../assets/icon/FacebookIcon";
import TwitterIcon from "../assets/icon/TwitterIcon";
import InstagramIcon from "../assets/icon/InstagramIcon";
import LinkedInIcon from "../assets/icon/LinkedInIcon";
import YoutubeIcon from "../assets/icon/YoutubeIcon";

import dummy1 from "../assets/dummy1.png";
import ArrowTopRight from "../assets/icon/ArrowTopRight";

const BrixTempleteUi = () => {
  return (
    <div className="min-h-screen flex items-start justify-center brix-container">
      <div className="max-w-screen w-full overflow-hidden relative">
        {/* Header Background */}
        <div
          className="relative w-full h-[142px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${brixHeader})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute"></div>
        </div>

        {/* Profile Section */}
        <div className="text-center max-w-xl relative -mt-[70px] m-auto">
          <img
            src={dummy1}
            alt="Profile"
            className="w-36 h-36 mx-auto rounded-full border-4 border-white "
          />
          <h2 className="mt-4 text-[24px] font-extrabold text-black">
            John Carter
          </h2>
          <p className="mt-2 text-[#5C6779] text-sm px-4">
            Aliquam ut vitae vitae enim viverra luctus sollicitudin aliquam itae
            pulvinar vestibulum dict at ipsum.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <YoutubeIcon />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4 p-6 max-w-xl m-auto">
          {[
            {
              text: "Visit my portfolio",
              icon: "\ud83e\uddd1\u200d\ud83c\udf93",
              dark: true,
            },
            { text: "Read my articles", icon: "\ud83d\udcdd" },
            { text: "Listen my podcast", icon: "\ud83c\udfa7" },
            { text: "Visit my store", icon: "\ud83d\udecd" },
            { text: "Subscribe to my channel", icon: "\ud83c\udfa5" },
          ].map(({ text, icon, dark }, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between px-2 py-2 rounded-full shadow-sm transition duration-300 
                ${
                  dark
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <span className="flex items-center space-x-3.5">
                <span className="text-lg ml-2">{icon}</span>
                <span className="text-sm font-medium">{text}</span>
              </span>
              <div
                className={`w-11 h-11 flex items-center justify-center rounded-full 
      ${dark ? "bg-white text-gray-900" : "text-gray-700"}`}
              >
                <ArrowTopRight className="text-lg" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrixTempleteUi;
