import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // import useLocation

import backgroundImg4 from "../asset/woman-with-scuba-gear-swimming-ocean.jpg";

const Hero = ({ header, text, style, button, showButton }) => {
  // tambahkan prop showButton

  return (
    <div
      className="hero-container relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(https://leora.co.id/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-14-at-11.22.31-1536x1152.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white mx-5 md:mx-20">
          <h1 className={`${style} mt-10 md:mt-20 font-manrope`}>{header}</h1>
          <p className="text-[20px] md:text-[60px] font-black mt-10 font-manrope">
            {text}
          </p>
          {/* Tampilkan tombol hanya jika prop showButton bernilai true */}
          {showButton && (
            <Link to="/">
              {" "}
              {/* Ganti link dengan sesuai rute home Anda */}
              <button className=" bg-blue-500 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-full transition-colors mt-16">
                {button}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
