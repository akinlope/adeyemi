import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" flex mt-20 border-t p-10 text-[#71717a]">
      <div className=" w-3/5 px-20">
        &copy; 2024 Topdel Engineering Limited | Powered by Topdel Engineering
        Limited
      </div>
      <div className=" flex w-2/5 px-20">
        <a href="www.google.com" className=" text-orange-500 cursor-pointer mr-5">
          <FaXTwitter />
        </a>
        <a href="www.google.com" className=" text-orange-500 cursor-pointer mr-5">
          <FaLinkedinIn />
        </a>
        <a href="www.google.com" className=" text-orange-500 cursor-pointer mr-5">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
