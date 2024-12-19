import React, { useState } from "react";

const FilterSidebar = () => {
  const [price, setPrice] = useState(400); // Price range state
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = ["#00FF00", "#FF0000", "#FFFF00", "#FFA500", "#00FFFF","#7D06F5","#2d06f5", "#F506A4","#ffffff", "#000000"];
  const sizes = ["XS Small", "Small", "Medium", "Large", "X Large", "XX Large", "3X Large"];

  return (
    <div className="p-8 w-96 bg-white border rounded-md ml-24 pl-8">
      {/* Filter Title */}
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Category Filters */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Categories</h3>
        <ul className="space-y-1">
          {["T-shirts", "Shirts", "Jeans", "Jackets"].map((category) => (
            <li key={category} className="cursor-pointer text-gray-700 hover:underline">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Price</h3>
        <input
          type="range"
          min="100"
          max="800"
          value={price}
          onChange={(e) => setPrice(300)}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>$100</span>
          <span>${price}</span>
          <span>$800</span>
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <h3 className="font-medium p-2 mb-2">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor === color ? "border-black" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(null)}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-3 py-1 text-sm border rounded ${
                selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedSize(null)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style Filter */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Dress Style</h3>
        <ul className="space-y-1">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <li key={style} className="cursor-pointer text-gray-700 hover:underline">
              {style}
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filter Button */}
      <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
