"use client"
import { useState, useEffect } from "react";

export default function Description({ product }) {
  const contact = "923094553362";
  if (!product) {
    return <>Searching for Product!!</>
  }
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.Images[0]);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    setMainImage(product.Images[0]);
    setQuantity(1);
  }, [product]);

  const handleImage = (e) => {
    if (e) {
      setMainImage(e);
    }
    else {
      setMainImage(product.Images[0]);
    }
  }

  return (
    <div className="flex flex-col lg:justify-center justify-start md:flex-row items-start gap-10 lg:gap-20 h-full">
      <div className="flex flex-col lg:flex-row-reverse gap-2">

        <div style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} className="sm:w-[500px] sm:h-[500px] w-[calc(100vw-40px)] h-[calc(100vw-40px)] flex justify-center rounded-lg">
        </div>

        <div className="grid grid-cols-4 w-auto sm:w-[100px] sm:h-auto h-[100px] lg:grid-cols-1 gap-2 ">
          <button onClick={() => handleImage(product.Images[0])} className="boxes bg-gray-200 rounded-lg" style={{
            backgroundImage: `url(${product.Images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></button>
          <button onClick={() => handleImage(product.Images[1])} className="boxes bg-gray-200 rounded-lg" style={{
            backgroundImage: `url(${product.Images[1]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></button>
          <button onClick={() => handleImage(product.Images[2])} className="boxes bg-gray-200 rounded-lg" style={{
            backgroundImage: `url(${product.Images[2]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></button>
          <button onClick={() => handleImage(product.Images[3])} className="boxes bg-gray-200 rounded-lg" style={{
            backgroundImage: `url(${product.Images[3]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></button>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-20 justify-between h-full ">
        <div className="flex flex-col gap-6 justify-between">
          <h1 className="text-4xl font-bold">{product.Name}</h1>
          <p className="text-gray-700 text-2xl">Rs. {product.Price - product.Discount}</p>
          <p className="text-gray-600 text-xl">{product.Desp}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 border rounded-lg bg-gray-100"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 border rounded-lg bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-grow flex-col mt-auto">
          <div className="flex items-center gap-4">
            <a className="px-6 py-2 border border-red-500 bg-red-500 text-white rounded-lg" target='_blank' href={`https://wa.me/${contact}?text=Hi%20I%20want%20to%20buy%20*${product.Name}*%20with%20Id:%20${product.ID}.%0A_The%20Id%20is%20for%20official%20Purpose%20Only._%0AThe%20*Quantity*%20is:%20${quantity}%20`}>
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
