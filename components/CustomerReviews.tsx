 'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const reviewsData = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

const CustomerReviews = ({ reviews = reviewsData }) => {
  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">OUR HAPPY CUSTOMERS</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <div className="flex flex-col h-full">
              <div className="flex mb-4">
                {Array(5)
                  .fill(undefined)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>
              <div className="flex">
              <span className="font-semibold text-gray-900">{review.name}</span>
              <FaCheckCircle className="mt-1 text-green-700"/>
              </div>
              <p className="text-gray-700 italic mb-4">"{review.review}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
