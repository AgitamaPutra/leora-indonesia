import React from "react";
import Hero from "../components/Hero";
import ProjectsCom from "../components/Project/ProjectsCom";

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
      <ProjectsCom />
    </div>
  );
};
