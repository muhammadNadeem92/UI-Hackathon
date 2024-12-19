"use client";
import { IoIosCheckmark } from "react-icons/io";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Image from "next/image";

const ProductCard = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <>
    <div className="sm:flex flex-col  ">
      <div className="max-w-sm bg-white p-6 rounded-lg  text-left">
        <h1 className="w-[243px] h-14 text-2xl font-bold mb-2 sm:w-[600px] sm:h-12 sm:text-[40px]">
          ONE LIFE GRAPHIC T-SHIRT
        </h1>
        <div className="flex items-center mb-3 ">
          <div className="flex">
            <i className="text-yellow-500 text-lg">&#9733;</i>
            <i className="text-yellow-500 text-lg">&#9733;</i>
            <i className="text-yellow-500 text-lg">&#9733;</i>
            <i className="text-yellow-500 text-lg">&#9733;</i>
            <i className="text-gray-300 text-lg">&#9733;</i>
          </div>
          <span className="ml-3 text-gray-600 text-sm">4.5/5</span>
        </div>
        <div className="flex items-center mb-4 sm:w-[193px] h-[43px] gap-3">
          <span className="text-2xl font-bold text-black ">$260</span>
          <span className="text-xl text-gray-500 line-through ml-3">$300</span>
          <span className="text-sm bg-red-100 text-red-500 px-2 py-1 rounded-[62px] ml-3">
            -40%
          </span>
        </div>
        <p className="text-gray-600 w-[418px] text-base leading-relaxed sm:w-[590px] h-[33px]">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        {/* divider */}
        <div className="w-[424px] h-0 border mt-16 sm:mt-8 sm:w-[540px] sm:ml-1 "></div>
      </div>
      <div className="w-[142px] h-16 ml-4  sm:text-left sm:ml-6  ">
        <p className="text-sm w-[82px] h-[10px] text-[#00000099] sm:w-[92px] sm:h-[11px]  ">
          Select Colors
        </p>
        <div className="w-[142px] h-auto flex gap-3 mt-6 sm:">
          
          <div className="w-[39px] h-[39px] rounded-full bg-[#4f4631] sm:w-[37px] sm:h-[37px]">
            <IoIosCheckmark className="text-white  text-center w-4 h-4 mt-[10px] ml-[10px]" />
          </div>
          <div className="w-[39px] h-[39px] rounded-full bg-[#314F4A] sm:w-[37px] sm:h-[37px]"></div>
          <div className="w-[39px] h-[39px] rounded-full bg-[#31344f] sm:w-[37px] sm:h-[37px]"></div>
        </div>
      </div>

      {/* divider */}
      <div className="w-[424px] h-0 border mt-5 ml-4 sm:mt-6 sm:w-[540px] sm:ml-6 "></div>
      {/* option section */}
      <div className="mt-4 ml-6">
        <p className="w-[76px] h-[10px] text-sm text-[#00000099]">
          Choose Size
        </p>
        <div className=" mt-6 flex gap-3  ">
          <Button variant={"secondary"} size={"lg"}>
            Small
          </Button>
          <Button variant={"secondary"} size={"lg"}>
            Medium
          </Button>
          <Button variant={"default"} size={"lg"}>
            Large
          </Button>
          <Button variant={"secondary"} size={"lg"}>
            X-Large
          </Button>
        </div>
      </div>
      {/* divider */}
      <div className="w-[424px] h-0 border mt-5 ml-4 sm:mt-6 sm:w-[540px] sm:ml-6"></div>
      {/* counter */}
      <div className="flex gap-4">
      <div className="flex items-center justify-center border rounded-3xl p-2 mt-6 ml-4 bg-gray-100 w-fit">
        <button
          className="text-xl font-bold px-3 py-1 hover:bg-gray-200 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-4 text-lg">{count}</span>
        <button
          className="text-xl font-bold px-3 py-1 hover:bg-gray-200 rounded-full sm:px-6 "
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <Button variant={'default'} size={'xmd'} className="mt-6 rounded-full sm:px-[150px]  ">Add to Card</Button>
      </div>

        {/* tabs */}
        <div className="sm:hidden ">
          <Button variant={'ghost'} className="text-[#00000099] mt-6 ml-4 hover:underline sm:hidden  ">Product Details</Button>
          <Button variant={'ghost'} className="text-[#00000099] mt-6 ml-4 hover:underline sm:hidden ">Rating & Reviews</Button>
          <Button variant={'ghost'} className="text-[#00000099] mt-6 ml-4 hover:underline sm:hidden ">FAQs</Button>
          </div>

          <div className="w-[425px] h-0 border mt-5 ml-4 sm:hidden"></div>
        
        <div className="flex sm:hidden  ">
        <p className="w-[107px] h-[27px] mt-4 ml-4 font-bold text-xl">All Reviews</p>
        <p className="w-[29px] h-[10px] mt-5 ml-1 text-sm text-[#00000099]">(451)</p>
        <div className="flex ml-[114px] mt-4">
         <Image src={'/images/filter.svg'} alt="filter-image" width={40} height={40}  className="mr-4"/>
         <Button variant={'default'} size={'default'} >Write a Review</Button>

         
        </div>
        </div>
      </div>

    </>
  );
};

export default ProductCard;
