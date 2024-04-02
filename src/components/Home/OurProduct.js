import React, { useState, useEffect } from "react";
import { Image } from "antd";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import gambar-gambar
import Panel1 from "../../asset/product/PanelBeton/EPS-Panel-Lebih-ringan-kuat-300x300.jpg";
import Panel2 from "../../asset/product/PanelBeton/Panel-Dinding-1-1024x1024-1-300x300.jpg";
import Panel3 from "../../asset/product/PanelBeton/produk-4-300x300.jpg";
import Panel4 from "../../asset/product/PanelBeton/produk-6-1024x1024-1-300x300.jpg";
import Pagar1 from "../../asset/product/PagarBeton/1-2-300x300.png";
import Pagar2 from "../../asset/product/PagarBeton/2-2-300x300.png";
import Pagar3 from "../../asset/product/PagarBeton/3-2-300x300.png";
import Pagar4 from "../../asset/product/PagarBeton/4-2-300x300.png";
import Box1 from "../../asset/product/Box/box1.png";
import Box2 from "../../asset/product/Box/box2.png";
import Box3 from "../../asset/product/Box/box3.png";
import Box4 from "../../asset/product/Box/box4.png";

const OurProducts = () => {
  const products = [
    {
      name: "Panel Beton Precast",
      images: [Panel1, Panel2, Panel3, Panel4],
      description:
        "Panel Beton Precast adalah sebuah alternatif bahan bangunan yang lebih efisien daripada bata merah atau bata ringan. Memiliki kepadatan yang tinggi dan daya tahan beban hingga 800 kg/m2.",
    },
    {
      name: "Pagar Beton Precast",
      images: [Pagar1, Pagar2, Pagar3, Pagar4],
      description:
        "Pagar beton precast adalah produk precast beton yang biasa digunakan untuk berbagai pekerjaan pemagaran. Dengan kualitas beton K-300, mampu memberikan kualitas yang tinggi dengan harga yang terjangkau.",
    },
    {
      name: "Box Culvert",
      images: [Box1, Box2, Box3, Box4],
      description:
        "Box Culvert adalah beton precast yang sering digunakan pada konstruksi saluran air. Dibuat dengan mutu beton K-350 dan disertai dengan tulangan.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    Array(products.length).fill(0)
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = (productIndex) => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex.map((index, idx) =>
        idx === productIndex
          ? index === products[idx].images.length - 1
            ? 0
            : index + 1
          : index
      )
    );
  };

  const prevSlide = (productIndex) => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex.map((index, idx) =>
        idx === productIndex
          ? index === 0
            ? products[idx].images.length - 1
            : index - 1
          : index
      )
    );
  };

  return (
    <div className="font-manrope px-5 md:px-10 py-10 md:py-10">
      <h1 className="text-3xl md:text-5xl text-customGreen font-bold text-center mb-10 drop-shadow-lg">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            images={product.images}
            currentIndex={currentSlideIndex[index]}
            nextSlide={() => nextSlide(index)}
            prevSlide={() => prevSlide(index)}
            windowWidth={windowWidth}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({
  name,
  description,
  images,
  currentIndex,
  nextSlide,
  prevSlide,
  windowWidth,
}) => {
  const imageSize =
    windowWidth < 768
      ? { width: 225, height: 200 }
      : { width: 300, height: 250 };

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6">
      <div className="relative">
        <button
          className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
          onClick={prevSlide}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
          onClick={nextSlide}
        >
          <FaChevronRight size={24} />
        </button>
        <div className="flex justify-center items-center mb-2">
          <Image
            src={images[currentIndex]}
            alt={name}
            className="rounded-md object-cover"
            {...imageSize}
          />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>
      <p className="text-gray-700 mb-2 text-justify">{description}</p>
    </div>
  );
};

export default OurProducts;
