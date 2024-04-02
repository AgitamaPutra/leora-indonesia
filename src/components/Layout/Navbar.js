import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../asset/logo.png";
import { motion, useIsPresent, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const isPresent = useIsPresent();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgColor = scroll ? "bg-neutral-900" : "bg-transparent";
  const textColor = scroll ? "text-white" : "text-white";
  const shadowClass = scroll ? "shadow-lg" : "";

  const menuItems = [
    { title: "HOME", link: "/" },
    { title: "PROJECT", link: "/project" },
    { title: "ARTIKEL", link: "/artikel" },
    { title: "KONTAK KAMI", link: "/kontak-kami" },
  ];

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close mobile menu when a menu item is clicked
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 z-50 transition duration-300  ${bgColor} ${shadowClass}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`font-bold text-xl ${textColor}`}>
          <img src={Logo} alt="Logo Leora" width={125} height={125} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          {menuItems.map((menuItem, index) => (
            <Link
              key={index}
              to={menuItem.link}
              className={`mx-4 transition-colors duration-300 hover:bg-customGreen hover:text-white px-4 py-2 rounded font-bold font-manrope ${textColor} ${
                location.pathname === menuItem.link ? "bg-customGreen" : ""
              }`}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-white mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
              className={`md:hidden w-full ${bgColor} absolute top-16`}
            >
              <div className=" w-full">
                {menuItems.map((menuItem, index) => (
                  <Link
                    key={index}
                    to={menuItem.link}
                    onClick={handleMenuItemClick}
                    className="block py-3 px-4 text-white hover:bg-customGreen hover:text-white"
                  >
                    {menuItem.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </nav>
  );
};

export default Navbar;
