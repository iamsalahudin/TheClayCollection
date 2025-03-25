import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Profile = ({ data }) => {
  const { img, name, desig, twitter, instagram, linkedin } = data;
  const icon = {
    FaXTwitter: (
      <Link href={twitter}>
        <FaXTwitter />
      </Link>
    ),
    FaInstagram: (
      <Link href={instagram}>
        <FaInstagram />
      </Link>
    ),
    FaLinkedinIn: (
      <Link href={linkedin}>
        <FaLinkedinIn />
      </Link>
    ),
  };
  return (
    <>
      <div className="card text-center flex flex-col items-center rounded-3xl overflow-hidden border">
        <div
          className="img h-80 w-full bg-center bg-cover bg-red-400"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/b8/f7/07/b8f707b74374a8f4f78e99edab91fa05.jpg')",
          }}
        ></div>
        <div className="flex flex-col items-center">
          <h2 className="mt-3 text-2xl font-bold">{name}</h2>
          <p className="text-lg font-semibold">{desig}</p>
          <div className="flex space-x-5 mt-3 mb-3 text-2xl">
            <p>{icon[twitter]}</p>
            <p>{icon[instagram]}</p>
            <p>{icon[linkedin]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
