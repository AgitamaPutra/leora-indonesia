import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../asset/logo.png";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/project" },
  { label: "Artikel", link: "/artikel" },
  { label: "Kontak Kami", link: "/kontak-kami" },
];

const socialMediaLinks = [
  { icon: <FaFacebook size={28} />, link: "https://www.facebook.com" },
  { icon: <FaInstagram size={28} />, link: "https://www.instagram.com" },
  {
    icon: <FaLinkedin size={28} />,
    link: "https://www.linkedin.com/company/leora-construction-services/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 px-4 md:px-10 font-manrope">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={Logo}
              alt="Leora Indonesia"
              className="w-28 h-auto mr-4"
            />
            <span>© 2024 Leora Indonesia</span>
          </div>
          <div className="flex space-x-6">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.link} className="hover:text-gray-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 text-sm text-center md:text-center">
          <p className="mb-6 mt-2">
            Harka Office, Alamanda Tower Lantai 2 Unit H 1, Jl. TB Simatupang
            Nomor 23-24, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan,
            Daerah Khusus Ibukota Jakarta 12430
          </p>
          <div className="flex justify-center md:justify-center mb-6">
            {socialMediaLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="mt-2">
            <Link to="/privacy-policy" className="hover:text-gray-300 mx-2">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-gray-300 mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
