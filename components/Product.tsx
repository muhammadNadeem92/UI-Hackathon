'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Gradient Graphic T-shirt', rating: 3.5, price: 145, image: '/images/proImage1.svg' },
  { id: 2, name: 'Polo with Tipping Detail', rating: 4.0, price: 180, image: '/images/proImage2.svg' },
  { id: 3, name: 'Black Striped T-shirt', rating: 4.0, price: 120, image: '/images/proImage3.svg' },
  { id: 4, name: 'Skinny Fit Jeans', rating: 4.5, price: 240, image: '/images/proImage4.svg' },
  { id: 5, name: 'Checkered Shirt', rating: 4.5, price: 180, image: '/images/proImage5.svg' },
  { id: 6, name: 'Sleeve Striped T-shirt', rating: 4.5, price: 130, image: '/images/proImage6.svg' },
  { id: 7, name: 'Sleeve Striped T-shirt', rating: 4.5, price: 130, image: '/images/proImage7.svg' },
  { id: 8, name: 'Sleeve Striped T-shirt', rating: 4.5, price: 130, image: '/images/proImage8.svg' },
  { id: 9, name: 'Sleeve Striped T-shirt', rating: 4.5, price: 130, image: '/images/proImage9.svg' },
];

const ProductGrid = () => {
  const [cardCount, setCardCount] = useState(6);

  const checkScreenSize = () => {
    if (window.innerWidth >= 640) {
      setCardCount(9); // Show 9 cards on 'sm' screens and larger
    } else {
      setCardCount(6); // Show 6 cards on default screens
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.slice(0, cardCount).map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Image
              src={product.image}
              alt={product.name}
              width={190}
              height={130}
              className=" object-cover rounded-md"
            />
            <h3 className="mt-2 text-sm font-semibold text-gray-800">{product.name}</h3>
            <div className="flex items-center mt-1 text-yellow-500">
              {/* Star rating */}
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
              <span className="ml-2 text-xs text-gray-500">{product.rating}/5</span>
            </div>
            <p className="mt-2 text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
