import React from "react";
import Hero from "../components/Hero";

export const Projects = () => {
  return (
    <div className="font-manrope">
      {" "}
      <Hero
        header={"OUR PROJECT"}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
      />
    </div>
  );
};
