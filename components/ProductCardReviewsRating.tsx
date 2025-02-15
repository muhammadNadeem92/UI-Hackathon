'use client'
import Image from 'next/image';
import React from 'react';

const ProductRating = () => {
  const products = [
    {
      id: 1,
      name: "Polo with Contrast Trims",
      price: 212,
      originalPrice: 242,
      image: "/images/product-image1.svg",
      rating: 3.5,
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      price: 145,
      originalPrice: null,
      image: "/images/product-image2.svg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Polo with Tipping Details",
      price: 180,
      originalPrice: null,
      image: "/images/product-image3.svg",
      rating: 2.5,
    },
    {
      id: 4,
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      image: "/images/product-image4.svg",
      rating: 4.8,
    }, 
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8  ">
      <h2 className="text-3xl font-bold text-center mb-8 uppercase">You might also like</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-12 sm:w-full sm:ml-24  ">
        {products.map((product, index) => {
          // Calculate discount percentage if original price exists
          const discountPercentage =
            product.originalPrice &&
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

          return (
            <div
              key={product.id}
              className={`border rounded-lg p-3 text-center ${
                index > 1 ? "hidden sm:block" : ""
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={600}
                className="h-40 w-full object-cover mb-4 rounded"
              />
              <h3 className="text-sm font-medium text-left sm:text-xl">
                {product.name}
              </h3>
              <div className="flex items-center text-sm my-2 text-left">
                {/* Rating */}
                <span className="text-yellow-500">
                  {"⭐".repeat(Math.floor(product.rating))}{" "}
                  {product.rating.toFixed(1)}
                </span>
               
              </div>
              <div className="text-lg font-bold text-left">
                ${product.price}{" "}
                {product.originalPrice && (
                  <>
                    <span className="line-through text-gray-500 text-sm">
                      ${product.originalPrice}
                    </span>
                    <span className=" ml-2 text-red-500 bg-red-100 rounded-3xl py-[6px] px-[14px] text-sm font-bold">
                      -{discountPercentage}% 
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductRating;
