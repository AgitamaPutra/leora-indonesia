import React from "react";
import { ArticleCard } from "../components/Artikel/Card";
import Hero from "../components/Hero";

const Artikel = () => {
  return (
    <div>
      <Hero
        header={"ARTIKEL"}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
      />
      <div className="px-4 md:px-10 py-6 md:py-10">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            imageUrl="https://via.placeholder.com/300"
            date="March 29, 2024"
            author="John Doe"
            title="Lorem Ipsum Dolor Sit Amet"
          />
          <ArticleCard
            imageUrl="https://via.placeholder.com/300"
            date="March 30, 2024"
            author="Jane Smith"
            title="Consectetur Adipisicing Elit"
          />
          <ArticleCard
            imageUrl="https://via.placeholder.com/300"
            date="March 31, 2024"
            author="John Smith"
            title="Sed Do Eiusmod Tempor Incididunt"
          />
        </div>
      </div>
    </div>
  );
};

export default Artikel;
