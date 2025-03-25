"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function One({ data }) {
  return (
    <p className="flex justify-between items-center sm:gap-0 gap-16 text-gray-700 font-semibold hover:text-gray-500 transition duration-200">
      <span>{data}</span>
      <i className="fa-solid fa-chevron-right"></i>
    </p>
  );
}

export default function CategoriesNav() {
  const categories = [
    "Decoration",
    "Crockery",
    "Jewelry",
    "Tiles",
    "Flower Vase",
    "Bowls Cups Mugs",
    "Dishware",
    "Pots",
    "Astray",
    "Tea Sets",
    "Dinnerware",
  ];
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleCategory = (data) => {
    router.push(`/categories?category=${encodeURIComponent(data)}`);
    setIsVisible(!isVisible);
  };

  const toggleCategories = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav
      className={`sm:relative z-30 sm:z-0 w-3/4 bg-gray-100 fixed sm:top-0 sm:left-0 flex flex-col sm:w-1/5 h-full border-r-[1px] sm:border-gray-300 border-white sm:bg-white pt-8 transition-all duration-300 sm:translate-x-0 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Categories List */}
      <div className="space-y-3 pr-5 pl-5">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategory(category)}
            className="w-full text-left"
          >
            <One data={category} />
          </button>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleCategories}
        className="sm:hidden sm:relative absolute top-0 -right-7 p-2 bg-gray-200 z-40 w-7 rounded-tr-lg rounded-br-lg flex items-center leading-none"
      >
        <div className="flex flex-col items-center leading-none">
          <span>C</span>
          <span>A</span>
          <span>T</span>
          <span>E</span>
          <span>G</span>
          <span>O</span>
          <span>R</span>
          <span>I</span>
          <span>E</span>
          <span>S</span>
        </div>
        <i
          className={`bg-gray-200 rounded-full p-1 fa-solid ${
            isVisible ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        ></i>
      </button>
    </nav>
  );
}
