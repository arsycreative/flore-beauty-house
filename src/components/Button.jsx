import React from "react";

function button({ text }) {
  return (
    <button className="transition-colors transition-transform  duration-500 hover:scale-110 bg-neutral-grey rounded-lg h-10 text-white hover:bg-primary-green hover:text-black ">
      {text}
    </button>
  );
}

export default button;
