import React from "react";
import Hero from "../components/Hero";
import Kontak from "../components/KontakKami/kontak";

export const KontakKami = () => {
  return (
    <div className="font-manrope">
      {" "}
      <Hero
        header={"KONTAK KAMI"}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
      />
      <Kontak />
    </div>
  );
};
