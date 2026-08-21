import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import avrinaProfile from "../assets/avrina-crocet.jpeg";
import avrinaBg from "../assets/avrina-crocet-bg.jpeg";

const AmarilysTemplateUi = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${avrinaBg})` }}
    >
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={avrinaProfile}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-white shadow-md"
          />
          <h1 className="mt-4 text-center text-3xl font-semibold text-white">
            Avrina <br />
            Crochet
          </h1>
          <p className="mt-1 text-base italic text-gray-200 text-center">
            "Ubah benang jadi karya cantik bersama Avrina Crochet teman belajar
            merajutmu."
          </p>
        </div>

        {/* Link Buttons */}
        <div className="w-full max-w-md space-y-4">
          <a
            href="https://wa.me/message/PSUASNWZ3MJ3D1"
            className="block py-3 px-6 rounded-full bg-white text-gray-800 text-center font-medium hover:bg-gray-200 transition"
          >
            Contact WA
          </a>
          <a
            href="https://s.shopee.co.id/7VATjZQtsL"
            className="block py-3 px-6 rounded-full bg-white text-gray-800 text-center font-medium hover:bg-gray-200 transition"
          >
            Toko Shopee
          </a>
          <a
            href="https://s.shopee.co.id/4LDRyrvy3b"
            className="block py-3 px-6 rounded-full bg-white text-gray-800 text-center font-medium hover:bg-gray-200 transition"
          >
            Starter Kit Merajut
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-8">
          <a
            href="https://www.facebook.com/share/1Nd9siEene/"
            className="text-white hover:text-gray-300 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/avrinaerawati?igsh=bWNkemN3ZnNwOWVx"
            className="text-white hover:text-gray-300 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@avrinacrochet?_r=1&_t=ZS-93QEa9f4wOC"
            className="text-white hover:text-gray-300 transition"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>

      <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Avrina Crochet. All rights reserved.
      </p>
    </div>
  );
};

export default AmarilysTemplateUi;
