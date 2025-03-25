import React from "react";
import Image from "next/image";
import About from "/public/images/about.jpg";
import Card from "../(components)/Testimonial/Testimonial";
import { FcSalesPerformance } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FaLeaf, FaHandsHelping, FaTools } from "react-icons/fa";
import Profile from "../(components)/Profile/Profile";
import Link from "next/link";
import HeadingBar from "../(components)/headingBar/headingBar";

const Page = () => {
  const testimonialData = [
    {
      icon: <FcSalesPerformance />,
      value: "10.5k",
      description: "Sellers active on our site",
      link: "/",
    },
    {
      icon: <BsCurrencyDollar />,
      value: "33k",
      description: "Monthly Product Sale",
      link: "/",
    },
    {
      icon: <FaShoppingBag />,
      value: "45.5k",
      description: "Customers active on our site",
      link: "/",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${About.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Our Story
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Discover the passion behind our handcrafted ceramics and unique
            products.
          </p>
        </div>
      </div>

      <main className="px-6 sm:px-10 lg:px-20 py-10">
        {/* Features Section */}
        <div className="features py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="feature-item bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <FaLeaf className="text-4xl text-red-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Sustainable Products
                </h3>
                <p className="text-gray-700">
                  We offer eco-friendly products that support a sustainable
                  lifestyle.
                </p>
              </div>
              <div className="feature-item bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <FaTools className="text-4xl text-red-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Expert Craftsmanship
                </h3>
                <p className="text-gray-700">
                  Our ceramics are made with precision and care by expert
                  artisans.
                </p>
              </div>
              <div className="feature-item bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <FaHandsHelping className="text-4xl text-red-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Customer Focused
                </h3>
                <p className="text-gray-700">
                  We strive to provide an exceptional shopping experience and
                  customer service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="product-gallery py-16 animate__animated animate__fadeInUp animate__delay-12s">
          <HeadingBar title="Explore" heading="Ceramic Collection" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="product-item relative group animate__animated animate__fadeInUp animate__delay-13s">
              <Image
                src={"/images/bowl_set_a101.jpg"}
                alt="Ceramic Item 1"
                className="rounded-lg shadow-lg group-hover:scale-105 transition duration-300"
                layout="responsive"
                width={300}
                height={200}
                loading="lazy"
              />
              <Link
                href="/products"
                className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <span className="text-xl font-semibold">View Product</span>
              </Link>
            </div>
            <div className="product-item relative group animate__animated animate__fadeInUp animate__delay-14s">
              <Image
                src={"/images/dinner_set_a101.jpg"}
                alt="Ceramic Item 2"
                className="rounded-lg shadow-lg group-hover:scale-105 transition duration-300"
                layout="responsive"
                width={300}
                height={200}
                loading="lazy"
              />
              <Link
                href="/products"
                className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <span className="text-xl font-semibold">View Product</span>
              </Link>
            </div>
            <div className="product-item relative group animate__animated animate__fadeInUp animate__delay-15s">
              <Image
                src={"/images/dish_a701.jpg"}
                alt="Ceramic Item 3"
                className="rounded-lg shadow-lg group-hover:scale-105 transition duration-300"
                layout="responsive"
                width={300}
                height={200}
                loading="lazy"
              />
              <Link
                href="/products"
                className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <span className="text-xl font-semibold">View Product</span>
              </Link>
            </div>
            <div className="product-item relative group animate__animated animate__fadeInUp animate__delay-16s">
              <Image
                src={"/images/dish_a401.jpg"}
                alt="Ceramic Item 4"
                className="rounded-lg shadow-lg group-hover:scale-105 transition duration-300"
                layout="responsive"
                width={300}
                height={200}
                loading="lazy"
              />
              <Link
                href="/products"
                className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <span className="text-xl font-semibold">View Product</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonialData.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>

        {/* Profiles Section */}
        <div className="profiles py-16 animate__delay-20s">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Meet Our Team
          </h2>
          <div className="px-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {profiledata.map((curele, index) => (
              <Profile key={index} data={curele} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

const profiledata = [
  {
      "img": "/public/images/hussain.jpg",
      "name": "Person A",
      "desig": "Director",
      "twitter": "FaXTwitter",
      "instagram": "FaInstagram",
      "linkedin": "FaLinkedinIn"
  },
  {
      "img": "/public/images/hussain.jpg",
      "name": "Person B",
      "desig": "Manager",
      "twitter": "FaXTwitter",
      "instagram": "FaInstagram",
      "linkedin": "FaLinkedinIn"
  },
  {
      "img": "/public/images/hussain.jpg",
      "name": "Person C",
      "desig": "Assistant Manager",
      "twitter": "FaXTwitter",
      "instagram": "FaInstagram",
      "linkedin": "FaLinkedinIn"
  }
]

export default Page;
