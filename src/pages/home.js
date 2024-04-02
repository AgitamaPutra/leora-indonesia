import React from "react";
import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Hero";
import { Beyond } from "../components/Home/Beyond";
import Onthefield from "../components/Home/Onthefield";
import { OurProject } from "../components/Home/OurProject";
import { AboutUs } from "../components/Home/AboutUs";
import OurProducts from "../components/Home/OurProduct";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Navbar />
      <Hero
        header={"LEORA INDONESIA"}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
        text={"Beyond Construction, Life's Connection"}
      />
      <AboutUs />
      <OurProducts />
      <Onthefield />
      <OurProject />
      {/* Video YouTube */}
      <div className="px-4 md:px-10 py-6 md:py-10">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/n__j_bF9O4w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};
