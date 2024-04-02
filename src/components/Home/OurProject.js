import React from "react";
import { Link } from "react-router-dom";
import { IoResize } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({ imageSrc, location, type }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 md:mb-0 p-4 ">
      <img
        src={imageSrc}
        alt="Project"
        className="w-full h-64 object-cover object-center rounded-md"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{location}</h3>
        <p className="text-gray-600 mb-2">Type: {type}</p>
        <Link
          to="/project-details"
          className="inline-block bg-customGreen hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

export const OurProject = () => {
  return (
    <div className="px-5 md:px-10 py-10 md:py-10 font-manrope">
      <h1 className="text-3xl md:text-5xl text-customGreen font-bold font-manrope mb-6 md:mb-8 text-center drop-shadow-lg">
        Our Project
      </h1>
      <p className="my-3 md:my-5 text-justify">
        Watch diverse and dynamic activities our dedicated team engages in on a
        daily basis.
      </p>

      <div className="p-4 md:p-10 bg-gray-200 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          {/* Gambar besar di kiri */}
          <div className="md:mr-8 mb-4 md:mb-0 ">
            <img
              className="object-cover object-center rounded-lg w-full md:w-[2000px]"
              src="https://leora.co.id/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-14-at-11.22.31-1536x1152.jpeg"
              alt="Project"
            />
          </div>

          {/* Penjelasan di kanan */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-customGreen drop-shadow-lg">
              Project Title
            </h2>
            <p className="mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis
              nobis iusto ut enim, ad porro quas quae corrupti illum eum a
              excepturi voluptatibus corporis nostrum minima? Suscipit deleniti
              voluptates harum voluptatum? Repellat quidem quam laudantium nemo
              voluptate praesentium in eaque harum obcaecati ullam ab veniam
              inventore et, eius deleniti?
            </p>
            <div className="mt-3 md:mt-4">
              <p className="text-sm flex items-center">
                {" "}
                <FaLocationDot className="mr-2 text-2xl" /> Location
              </p>
              <p className="flex items-center mt-4">
                {" "}
                <IoResize className="mr-2 text-2xl" /> 152 m<sup>2</sup>
              </p>
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/project-details"
                className="inline-block bg-customGreen hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <Card
          imageSrc="https://via.placeholder.com/300"
          location="New York"
          type="Apartment"
        />
        <Card
          imageSrc="https://via.placeholder.com/300"
          location="London"
          type="House"
        />
        <Card
          imageSrc="https://via.placeholder.com/300"
          location="Paris"
          type="Condo"
        />
      </div>

      <div className="mt-5 md:mt-10 flex justify-center items-center">
        <Link
          to={"/project"}
          className="bg-customGreen px-4 py-2 rounded-lg text-white font-semibold"
        >
          Lihat Lebih Banyak
        </Link>
      </div>
    </div>
  );
};
