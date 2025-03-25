// components/TestimonialCard.js
import React from 'react';

const Card = ({data}) => {
  return (
    <a href={data.link}
      className="flex flex-col items-center p-6 text-center border rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
    >
      <div className="text-4xl mb-2 text-black">{data.icon}</div>
      <h3 className="text-xl font-bold">{data.value}</h3>
      <p className="text-sm">{data.description}</p>
    </a>
  );
};


export default Card;
