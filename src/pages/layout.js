import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Bantuan } from "../components/Layout/Bantuan"; // Import komponen Bantuan
import { motion, AnimatePresence } from "framer-motion";

export const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <div>
          <Navbar />
          {children}
          <Footer />
          <Bantuan />
        </div>
        <motion.div
          key="slide-in"
          className="slide-in"
          initial={{ scaleY: 0, backgroundColor: "green" }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          key="slide-out"
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
