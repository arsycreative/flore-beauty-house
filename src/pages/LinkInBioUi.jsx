import React, { useState, useRef, useEffect } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaArrowRight,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import toast, { Toaster } from "react-hot-toast";

const LinkInBioUI = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isOverflowing, setIsOverflowing] = useState(false);
  const tabsRef = useRef(null);

  const tabs = [
    "About",
    "Fun Hobbies",
    "Career Path",
    "Personal Blog",
    // "Adventures and Tips",
  ];

  const content = {
    About: [
      { title: "Arsy", link: "/vision" },
      { title: "Rumus cinta Al-Khawarizmi", link: "/alkhawarizmi" },
    ],
    "Fun Hobbies": [
      { title: "Photography Adventures and Tips (soon)", link: "#" },
      { title: "Basketball and Sports (soon)", link: "#" },
      { title: "Travel Memories and Stories (soon)", link: "#" },
      { title: "Books I Recommend (soon)", link: "#" },
      { title: "Art and Sketches Portfolio (soon)", link: "#" },
    ],
    "Career Path": [
      { title: "How I Became a Software Engineer (soon)", link: "#" },
      { title: "Tech Skills You Should Learn (soon)", link: "#" },
    ],
    "Personal Blog": [],
    // "Adventures and Tips": [
    //   { title: "Solo Travel Tips", link: "/solo-travel" },
    //   {
    //     title: "Best Travel Destinations",
    //     link: "https://travelblog.com/best-destinations",
    //   },
    //   { title: "How to Plan a Trip", link: "/trip-planning" },
    // ],
  };

  // Iterate through each category
  // for (const category in content) {
  //   if (content.hasOwnProperty(category)) {
  //     // Iterate through each item in the category
  //     content[category].forEach((item) => {
  //       item.link = "#"; // Change the link to "#"
  //     });
  //   }
  // }

  useEffect(() => {
    const checkOverflow = () => {
      if (tabsRef.current) {
        const { scrollWidth, clientWidth } = tabsRef.current;
        setIsOverflowing(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const showCustomToast = (title) => {
    toast(
      <div className="flex items-center space-x-2">
        <span className="text-yellow-300">⚠️</span>
        <span>Konten nya masih di tulis, sabar yaa!!</span>
      </div>,
      {
        style: {
          background: "#000000",
          color: "#E0E0E0",
          border: "1px solid #30363D",
          borderRadius: "8px",
          padding: "12px",
        },
        icon: null,
      }
    );
  };

  const handleClick = (title, link, e) => {
    if (link === "#") {
      e.preventDefault();
      showCustomToast(title);
    }
  };

  return (
    // Main Container
    <div className="link-in-bio-ui flex flex-col items-center justify-start min-h-screen  text-[#C9D1D9] font-satoshi p-4">
      {/* Toaster */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-4 mb-6 mt-6">
        <div className="w-[100px] h-[100px] rounded-full bg-[#30363D] flex items-center justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover object-center rounded-full  transition-transform duration-300"
            style={{ objectPosition: "50% 10%" }}
          />
        </div>
        <h1 className="text-lg font-bold text-[#C9D1D9] satoshi-bold text-shadow drop-shadow-md mb-1.5">
          A. Angga Ihza Sya
        </h1>
        <p className="text-sm text-center text-[#C9D1D9] max-w-xs text-shadow drop-shadow-md mb-3">
          Software Engineer from Bandung, IDN.
        </p>
        <p className="text-sm text-center text-[#C9D1D9] max-w-xs text-shadow drop-shadow-md">
          Passionate about building scalable and efficient systems with a focus
          on clean code and robust architecture.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="w-full max-w-md  bg-[#21262D] border border-[#30363D] rounded-lg p-1 relative overflow-hidden">
        <div
          ref={tabsRef}
          className="flex overflow-x-auto rounded-md scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabs?.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#30363D] text-white font-bold"
                  : "text-[#737C86]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gradient overlay for overflowing tabs */}
        {isOverflowing && (
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#21262D] via-[#21262D]/40 to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-[8px] w-full max-w-md">
        {content[activeTab]?.map((item, index) => (
          <div key={index} className="mb-[8px]">
            {item.link.startsWith("http") ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[13px] justify-between bg-[#30363D] border border-opacity-10 rounded-md px-4 py-3 hover:bg-[#3A3F4A]"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                {item.title}
                <FaArrowUpRightFromSquare />
              </a>
            ) : (
              <Link
                to={item.link}
                onClick={(e) => handleClick(item.title, item.link, e)}
                className="flex w-full items-center justify-between bg-[#30363D] border border-opacity-10 rounded-md px-4 py-3 hover:bg-[#3A3F4A]"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                {item.title}
                <FaArrowRightLong />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="fixed bottom-3 left-0 right-0 flex justify-center space-x-4 p-4 ">
        {/* <a href="#" className="text-[#737C86] hover:text-[#C9D1D9]">
          <FaTiktok size={24} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/asep-angga/"
          className="text-[#737C86]  hover:text-[#C9D1D9]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/anggaihza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#737C86] hover:text-[#C9D1D9]"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.youtube.com/@anggaarrsy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#737C86] hover:text-[#C9D1D9]"
        >
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
  );
};

export default LinkInBioUI;
