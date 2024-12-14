import Image from 'next/image';
import React from 'react';

const TopSelling = () => {
  const products = [
    {
      id: 1,
      name: "VERTICAL STRIPED SHIRT",
      price: 212,
      originalPrice: 232,
      image: "/images/vertical shirt.svg",
      rating: 3.5,
    },
    {
      id: 2,
      name: "COURAGE GRAPHIC T-SHIRT",
      price: 145,
      originalPrice: null,
      image: "/images/graphic-t-shirt.svg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "LOOSE FIT BERMUDA SHORTS",
      price: 80,
      originalPrice: null,
      image: "/images/loose-fit-shorts.svg",
      rating: 2.5,
    },
    {
      id: 4,
      name: "FADED SKINNY JEANS",
      price: 210,
      originalPrice: null,
      image: "/images/skinny-jeans.svg",
      rating: 4.8,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">TOP SELLING</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
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

export default TopSelling;
