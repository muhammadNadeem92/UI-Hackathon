import React from "react";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 5,
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt!",
    rating: 5,
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 5,
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    rating: 5,
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter!",
    rating: 5,
  },
];

const ReviewCard = () => {
  return (
    <div className="p-4 sm:p-8 ml-16 ">
      {/* Small Screen: Display 3 reviews */}
      <div className="grid grid-cols-1 gap-6 sm:hidden">
        {reviews.slice(0, 3).map((review, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            {/* Rating */}
            <div className="flex items-center mb-2">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            {/* Name */}
            <h3 className="font-bold text-gray-800 mb-2">{review.name}</h3>
            {/* Review Text */}
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {review.text}
            </p>
            {/* Date */}
            <p className="text-gray-400 text-xs">Posted on {review.date}</p>
          </div>
        ))}
      </div>

      {/* Large Screen: Display 6 reviews */}
      <div className="hidden  sm:grid grid-cols-2 gap-6 ">
        {reviews.slice(0, 6).map((review, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm py-7 px-8 bg-white"
          >
            {/* Rating */}
            <div className="flex items-center mb-2">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            {/* Name */}
            <h3 className="font-bold text-gray-800 mb-2">{review.name}</h3>
            {/* Review Text */}
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {review.text}
            </p>
            {/* Date */}
            <p className="text-gray-400 text-xs">Posted on {review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
