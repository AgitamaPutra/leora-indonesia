import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const Bantuan = () => {
  const handleClickWa = () => {
    const phoneNumber = "6281292499946"; // Nomor WhatsApp
    const message = "Halo Leora, Saya ingin bertanya!"; // Pesan yang ingin dikirim
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="fixed bottom-0 right-0  p-4 rounded-lg flex items-center font-manrope">
      <span className="px-2 py-1 bg-white rounded-lg font-bold mr-2 drop-shadow-md shadow-md text-sm md:text-lg">
        Butuh Bantuan?
      </span>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div
          className="bg-green-500 rounded-full p-1 hover:drop-shadow-lg hover:shadow-lg text-xl hover:text-2xl"
          onClick={handleClickWa}
        >
          <FaWhatsapp size={52} className="text-white" />
        </div>
      </motion.button>
    </div>
  );
};
