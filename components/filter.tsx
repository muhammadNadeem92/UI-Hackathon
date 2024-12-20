

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,

  SheetHeader,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;


const FilterComponent = () => {
  const [price, setPrice] = useState(200);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("Large");

  const colors = [
    { name: "green", code: "bg-green-500" },
    { name: "red", code: "bg-red-500" },
    { name: "yellow", code: "bg-yellow-500" },
    { name: "orange", code: "bg-orange-500" },
    { name: "blue", code: "bg-blue-500" },
    { name: "purple", code: "bg-purple-500" },
    { name: "pink", code: "bg-pink-500" },
    { name: "black", code: "bg-black" },
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <div className="grid grid-cols-2 gap-2 ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <button>
              <Image
                src="/images/filter.svg"
                alt="filter-image"
                width={40}
                height={40}
              />
            </button>
          </SheetTrigger>
          
          <SheetContent side={side}>
            <SheetHeader />
            <SheetTitle>Filters</SheetTitle>
            <div className="w-[390px] h-auto bg-white py-14 px-12 shadow-lg rounded-md">

{/* divider */}
<div className="w-[453px] border border-[#0000001A] mt-4 ml-0"></div>

              {/* Price */}
              <div className="mb-4 mt-4">
                <h3 className="font-medium mb-2">Price</h3>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>$50</span>
                  <span>${price}</span>
                </div>
              </div>

{/* divider */}
<div className="w-[453px] border border-[#0000001A] mt-4  "></div>

              {/* Colors */}
              <div className="mb-4 mt-4">
                <h3 className="font-medium mb-2">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${color.code} ${
                        selectedColor === color.name
                          ? "ring-2 ring-offset-2 ring-blue-500"
                          : ""
                      }`}
                      onClick={() => setSelectedColor(color.name)}
                    ></button>
                  ))}
                </div>
              </div>

              {/* divider */}
          <div className="w-[453px] border border-[#0000001A] mt-4 "></div>

              {/* Size */}
              <div className="mb-4 mt-4">
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 rounded-xl border ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* divider */}

          <div className="w-[453px] border border-[#0000001A] mt-4 "></div>

              {/* Dress Style */}
              <div className="mb-4 mt-4">
                <h3 className="font-medium mb-2">Dress Style</h3>
                <div className="flex flex-col gap-2">
                  {dressStyles.map((style) => (
                    <label key={style} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="dressStyle"
                        value={style}
                        className="form-radio text-black"
                      />
                      <span className="ml-2">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filter */}
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                Apply Filter
              </button>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default FilterComponent;
