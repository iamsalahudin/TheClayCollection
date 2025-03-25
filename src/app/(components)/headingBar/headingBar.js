"use client";
import React, { useEffect } from "react";

const HeadingBar = ({ title, heading }) => {
  return (
    <>
      <div className="gap-4 mt-10 flex flex-col">
        <div className="gap-3 flex items-center">
          <div className="w-4 h-8 bg-[#DB4444] inline-block rounded-sm"></div>
          <p className="text-[#DB4444] font-bold">{title}</p>
        </div>
        <h2 className="text-4xl font-semibold tracking-wide">{heading}</h2>
      </div>
    </>
  );
};

export default HeadingBar;
