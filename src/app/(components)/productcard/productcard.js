"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }) => {
  const contact = "923094553362";
  const handleMessage = (e) => {

  }
  const router = useRouter();
  const handleProduct = () => {
    console.log(product.ID);
    router.push(`/productdetails?id=${encodeURIComponent(product.ID)}`);
  };

  return (
    <div className="min-w-[240px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 relative">
      <div className="relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          -{( (product.Discount / product.Price) * 100 ).toFixed(0)}%

        </div>


        <div className="absolute top-2 right-2 flex space-x-2">
          {/* Not available in this version */}
          {/* <button
            className={`bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 ${product.favourite ? "text-red-500" : "text-black"}`}
          >
            <i className="fa-solid fa-heart"></i>
          </button>

          <button className="bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200">
            <i className="fa-regular fa-eye"></i>
          </button> */}
        </div>
        <Image
          onClick={handleProduct}
          src={`${product.Images[0]}`}
          alt={product.Name}
          width={300}
          height={300}
          loading='lazy'
          className="object-cover w-full h-48"
        />
      </div>

      <div className="p-4" onClick={handleProduct}>
        <h3 className="text-gray-800 font-semibold text-lg truncate text-left">
          {product.Name}
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-red-500 font-bold text-lg">
            Rs. {product.Price - product.Discount}
          </span>
          <span className="text-gray-500 line-through ml-2 text-sm">
            Rs. {product.Price}
          </span>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <a className="bg-black text-white py-1 px-4 rounded-lg hover:bg-gray-800" target='_blank' href={`https://wa.me/${contact}?text=Hi%20I%20want%20to%20buy%20*${product.Name}*%20with%20Id:%20${product.ID}.%0A_The%20Id%20is%20for%20official%20Purpose%20Only._%0AThe%20*Quantity*%20is:%20`}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
