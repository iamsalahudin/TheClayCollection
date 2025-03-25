import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: '', email, message: 'Subscription', phone: ''}),
    });

    setTimeout(() => {
        setEmail('');
    }, 1000);
};

  return (
    <footer className="bg-black text-white p-8 md:p-16 text-sm">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="mb-3">Get 10% off your first order</p>
          <form className="flex border-2 border-white rounded-md overflow-hidden" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent outline-none text-white"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 cursor-pointer"
            >
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Johr Town, Lahore, Pakistan</li>
            <li>theclaycollectionofficial@gmail.com</li>
            <li>+92 3094553362</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline cursor-pointer">
                Products
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline cursor-pointer">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-xl cursor-pointer">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="text-xl cursor-pointer">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="https://www.instagram.com/theclaycollectionofficial7?igsh=MXBkZThlMTVqYXI3aw==" className="text-xl cursor-pointer">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-xl cursor-pointer">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        &copy; Copyright{" "}
        <Link href="/" className="hover:text-white hover:underline cursor-pointer">
          TheClayCollection
        </Link>{" "}
        2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

