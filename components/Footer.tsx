import React from "react";
import { Button } from "./ui/button";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Image  from "next/image";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="  bg-[#f5f5f5] sm:w-full">
      <div className="w-[445px] h-[353px] mt-24 ml-4 border rounded-[20px] bg-black sm:w-[1110px] sm:h-[180px] sm:ml-[100px] sm:mr-28 py-9 px-16 ">
        <div className=" sm:flex justify-between">
        <h2 className="w-[297px] h-[105px] mt-4 ml-6 font-bold text-4xl text-white sm:w-[500px] sm:h-[94px]  leading-[45px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col mt-10 sm:flex sm:flex-col items-center justify-end sm:mt-3 w-full sm:w-auto"> 
          
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-2 mb-4 rounded-full text-black"
          />
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-7 py-2 mb-4 rounded-full"
          >
            Subscribe to Newsletter
          </Button>
        </div>
        </div>
      </div>
      <section className="w-full max-w-md mx-auto sm:max-w-lg lg:max-w-4xl px-4">
  {/* About section */}
  <h3 className="text-2xl font-bold mt-8">SHOP.CO</h3>
  <p className="mt-4 text-sm text-gray-600">
    We have clothes that suit your style and which you’re proud to wear. From women to men.
  </p>

  {/* Social Icons */}
  <div className="flex mt-6 space-x-4">
    <FaTwitter className="text-gray-500 hover:text-gray-800" />
    <SiFacebook className="text-gray-500 hover:text-gray-800" />
    <FaInstagram className="text-gray-500 hover:text-gray-800" />
    <FaGithub className="text-gray-500 hover:text-gray-800" />
  </div>

  {/* Links Section */}
  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
    {/* Company */}
    <ul>
      <p className="font-medium text-black">COMPANY</p>
      <li className="text-sm text-gray-600">About</li>
      <li className="text-sm text-gray-600">Features</li>
      <li className="text-sm text-gray-600">Works</li>
      <li className="text-sm text-gray-600">Career</li>
    </ul>

    {/* Help */}
    <ul>
      <p className="font-medium text-black">HELP</p>
      <li className="text-sm text-gray-600">Customer Support</li>
      <li className="text-sm text-gray-600">Delivery Details</li>
      <li className="text-sm text-gray-600">Terms & Conditions</li>
      <li className="text-sm text-gray-600">Privacy Policy</li>
    </ul>

    {/* FAQ */}
    <ul>
      <p className="font-medium text-black">FAQ</p>
      <li className="text-sm text-gray-600">Account</li>
      <li className="text-sm text-gray-600">Manage Deliveries</li>
      <li className="text-sm text-gray-600">Orders</li>
      <li className="text-sm text-gray-600">Payment</li>
    </ul>

    {/* Resources */}
    <ul>
      <p className="font-medium text-black">RESOURCES</p>
      <li className="text-sm text-gray-600">Free eBank</li>
      <li className="text-sm text-gray-600">Development Tutorial</li>
      <li className="text-sm text-gray-600">How-to Blog</li>
      <li className="text-sm text-gray-600">YouTube Playlist</li>
    </ul>
  </div>

  {/* Divider */}
  <div className="mt-8 border-t border-gray-200"></div>

  {/* Footer */}
  <p className="mt-4 text-center text-sm text-gray-600">
    Shop.co © 2000-2023, All Rights Reserved
  </p>

  {/* Logos */}
  <div className="mt-4 flex justify-center space-x-4">
    <Image src={'/images/logo1.svg'} alt="logo1" width={39} height={25}  className="bg-white"/>
    <Image src={'/images/logo2.svg'} alt="logo2" width={39} height={25}  className="bg-white"/>
    <Image src={'/images/logo3.svg'} alt="logo3" width={39} height={25}  className="bg-white"/>
    <Image src={'/images/logo4.svg'} alt="logo4" width={39} height={25}  className="bg-white"/>
    <Image src={'/images/logo5.svg'} alt="logo5" width={39} height={25}  className="bg-white"/>
  </div>
</section>
</footer>
    </div>
  );
}; 

export default Footer;
