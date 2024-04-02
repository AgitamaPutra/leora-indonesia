import React from "react";

const CardContainer = "bg-white shadow-md rounded-lg overflow-hidden";
const ImageWrapper = "w-full";
const Image = "w-full h-auto";
const ContentWrapper = "p-4";
const Date = "text-sm text-gray-500";
const Author = "text-sm text-gray-500";
const Title = "text-xl font-semibold mt-2";

export const ArticleCard = ({ imageUrl, date, author, title }) => {
  return (
    <div className={CardContainer}>
      <div className={ImageWrapper}>
        <img src={imageUrl} alt="Article Image" className={Image} />
      </div>
      <div className={ContentWrapper}>
        <div className="justify-between flex">
          <p className={Author}>{author}</p>
          <p className={Date}>{date}</p>
        </div>
        <h2 className={Title}>{title}</h2>
      </div>
    </div>
  );
};
