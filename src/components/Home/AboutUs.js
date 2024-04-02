import React, { useRef } from "react";
import { Image } from "antd";
import { motion } from "framer-motion";

export const AboutUs = () => {
  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Ketika 20% dari elemen terlihat, fungsi callback akan dipanggil
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef, options]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-manrope px-5 md:px-10 py-10 md:py-10 bg-gray-200"
    >
      <h1 className="text-3xl md:text-5xl text-customGreen font-bold text-center drop-shadow-lg">
        Tentang Kami
      </h1>
      <div className="flex flex-col items-center md:flex-row">
        {/* Gambar di atas (untuk smartphone) */}
        <div className="w-full md:w-[50%] mb-4 md:mb-0">
          <Image
            src="https://leora.co.id/wp-content/uploads/2023/11/Desain-tanpa-judul-3.png"
            alt="Gambar Tentang Kami"
            className="w-full"
          />
        </div>
        {/* Penjelasan di bawah (untuk smartphone) */}
        <div className="w-full md:w-1/2 text-justify">
          <h2 className="text-2xl font-bold mb-4 text-customGreen drop-shadow-lg">
            Leora Indonesia
          </h2>
          <p className="mb-4">
            Leora, didirikan pada tahun 2000, telah meniti perjalanan panjang
            selama hampir 23 tahun. Para pendiri, yang telah berpengalaman dalam
            berbagai proyek konstruksi di seluruh Indonesia, menyadari
            kompleksitas rantai pasok dan manajemen konstruksi yang memerlukan
            presisi tinggi.
          </p>
          <p className="mb-4">
            Leora lahir dari tekad memberikan solusi komprehensif, menghadirkan
            inovasi, keberlanjutan, dan kerjasama luar biasa dalam industri
            konstruksi. Kami berbagi perjalanan ini dengan Anda, semoga menjadi
            mitra tepercaya dalam membangun masa depan yang lebih baik untuk
            ekosistem konstruksi.
          </p>
          <h3 className="text-xl font-bold mb-2 text-customGreen drop-shadow-lg">
            Misi Kami
          </h3>
          <p className="mb-4">
            Misi kami adalah memimpin transformasi ekosistem konstruksi di
            Indonesia dengan fokus pada inovasi berkelanjutan, pemberdayaan
            komunitas lokal, digitalisasi dan teknologi canggih, konservasi
            sumber daya alam, kemitraan, dan kolaborasi, serta membangun
            infrastruktur yang tangguh untuk mendukung pertumbuhan ekonomi yang
            resilien.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
