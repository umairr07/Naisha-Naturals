import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";
import logo from "../images/logon-removebg-preview.png";

const Footer = () => {
  return (
    <footer className=" bg-grayForFooter text-white py-10 mt-8">
      {/* <div>
        <img src={logo} alt="" className="w-20 ml-16" />
      </div> */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 gap-6">
        {/* Products Section */}
        <div className="lg:px-20 sm:px-5">
          <Link to={"/product-cards"}>
            <h3 className="text-xl text-grayForPageHeading mb-4">Products</h3>
          </Link>
          <ul className="space-y-2 text-grayForFooterLinks lg:text-[16px] sm:text-[14px]">
            <li className="cursor-pointer">Milk</li>
            <li className="cursor-pointer">Ghee</li>
            <li className="cursor-pointer">Paneer</li>
            <li className="cursor-pointer">Grains</li>
            <li className="cursor-pointer">Vegetables</li>
            <li className="cursor-pointer">& More....</li>
          </ul>
        </div>

        {/* Policy Section */}
        <div>
          <h3 className="text-xl text-grayForPageHeading mb-4">Policy</h3>
          <ul className="space-y-2 text-grayForFooterLinks lg:text-[16px] sm:text-[14px]">
            <li>
              <a className="cursor-pointer">Privacy Policy</a>
            </li>
            <li>
              <a className="cursor-pointer">Terms & Conditions</a>
            </li>
            <li>
              <a className="cursor-pointer">Cancellation/Refund Policy</a>
            </li>
            <li>
              <a className="cursor-pointer">Shipping Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="sm:px-5">
          <h3 className="text-xl text-grayForPageHeading mb-4 lg:mt-0 sm:mt-5">
            Contact Us
          </h3>
          <address className="not-italic space-y-2 text-grayForFooterLinks lg:text-[16px] sm:text-[14px]">
            <p>205, Saptagiri Towers, Sardar Patel Rd,</p>
            <p>Mayur Marg, Begumpet, Hyderabad,</p>
            <p>Telangana 500016</p>
            <p>
              Email:{" "}
              <a href="mailto:support@pravarshaindustries.com" className="">
                support@pravarshaindustries.com
              </a>
            </p>
            <p>
              Phone: <a className="">7702999900</a> |{" "}
              <a className="">7702666699</a>
            </p>
          </address>
        </div>
      </div>

      {/* Download and Social Media Section */}
      <div className="container mx-auto mt-8 border-t border-gray-300 pt-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <p className="px-2 text-xl text-grayForPageHeading">
            Follow us on :{" "}
          </p>
          <div className="flex gap-3">
            <BsInstagram className="text-xl cursor-pointer" />
            <FaFacebook className="text-xl cursor-pointer" />
            <BsLinkedin className="text-xl cursor-pointer" />
            <BsTwitter className="text-xl cursor-pointer" />
          </div>
        </div>
        <p className="text-sm text-grayForPageHeading">
          © Copyright 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
