import React from "react";

export const Beyond = () => {
  const menuItems = [
    "Engineering",
    "Procurement",
    "Construction",
    "Design",
    "Project Management",
    "Engineering",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 py-10 md:py-10">
      <div>
        <h1 className="text-5xl text-customGreen font-bold font-manrope ">
          Beyond Construction, Life's Connection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          {menuItems.map((menuItem, index) => (
            <div
              key={index}
              className="bg-gray-200 text-center py-2 px-4 rounded-lg font-manrope text-lg"
            >
              {menuItem}
            </div>
          ))}
        </div>
      </div>

      <div className="m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mx-auto font-bold text-3xl">
            <button className="bg-customGreen px-5 py-2 rounded-md">
              Vision
            </button>
          </div>
          <div className="mx-auto font-bold text-3xl my-8 md:my-0">
            <button className="bg-gray-400 px-5 py-2 rounded-md">
              Project
            </button>
          </div>
        </div>
        <p className="text-justify md:m-10">
          <strong>
            Leading Construction Ecosystem Transformation ​in Indonesia.
          </strong>{" "}
          we are committed to pioneering ​industry transformation towards a
          sustainable ​and innovative future, connecting beyond ​construction to
          life’s essential connections
        </p>
      </div>
    </div>
  );
};
