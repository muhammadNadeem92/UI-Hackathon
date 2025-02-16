import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div>
      {/* section  */}

      <div className="w-full h-[853px] pt-2  mt-6 bg-[#F2F0F1] sm:hidden">
        <section>
          <p className="w-[315px] h-[93px] mt-12 ml-4 font-bold text-4xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className="w-[358px] h-[50px] pt-11 text-xs ml-4 text-[#00000099]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button variant={"default"} size={"xl"} className="mt-24 ml-4">
            Shop Now
          </Button>
          <div className="w-[287px] h-[52px] ml-12 mt-5 flex justify-between">
            <span className="w-[106px] h-12">
              <p className="font-bold text-2xl w-[88px] h-[32px]  text-[#00000099]">
                2,000+
              </p>
              <p className="w-[190px] text-xs h-[22px] text-[#00000099]">
                High-Quality Products
              </p>
            </span>
            <span className="w-[106] h-12">
              <p className="font-bold text-2xl w-16 h-[32px] ml-6 text-[#00000099]">
                200+
              </p>
              <p className="w-[250px] text-xs h-[22px] ml-6 text-[#00000099]">
                International Brands
              </p>
            </span>
          </div>
        </section>

        <section className="flex">
          <Image
            src={"/images/hero-image (3).svg"}
            alt="hero-image"
            width={448}
            height={448}
            className="bg-[#F2F0F1]"
          />
        </section>
      </div>

      <section className="h-[200px] pt-6 bg-black flex  gap-4 flex-wrap sm:hidden">
        <Image
          src={"/images/group.svg"}
          alt="logo"
          width={116}
          height={23}
          className="pt-4 ml-4"
        />
        <Image
          src={"/images/zara-logo.svg"}
          alt="logo"
          width={63}
          height={25}
          className="pt-4  ml-5"
        />

        <Image
          src={"/images/gucci-logo.svg"}
          alt="logo"
          width={109}
          height={25}
          className="pt-4 "
        />
        <Image
          src={"/images/prada-logo.svg"}
          alt="logo"
          width={127}
          height={21}
          className="pb-6 ml-14"
        />

        <Image
          src={"/images/group (1).svg"}
          alt="logo"
          width={134}
          height={21}
          className="pb-6"
        />
      </section>

      {/* for disktop size */}
       
      <section className=" hidden sm:block w-full h-[663px] mt-16 relative  bg-[#f2f0f1]">
      {/* Image Section */}
      <Image
        src={"/images/image.svg"}
        alt="Hero"
        width={500}
        height={550}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-black z-10">
        {/* Main Heading */}
        <h1 className="w-[577px] h-[173px ] font-bold text-[64px] leading-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        {/* Subheading */}
        <p className="w-[545px] h-[33px] mt-6 text-[15px] text-[#00000099]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        {/* Button */}
        <Button variant={"default"} size={"lg"} className="mt-9">
          Shop Now
        </Button>
      </div>
      </section>
     
     <section className=" hidden md:w-full h-[122px] md:py-8 bg-black md:flex justify-between">
     <Image
          src={"/images/group.svg"}
          alt="logo"
          width={116}
          height={23}
          className="ml-9"
        />
        <Image
          src={"/images/zara-logo.svg"}
          alt="logo"
          width={63}
          height={25}
        
        />

        <Image
          src={"/images/gucci-logo.svg"}
          alt="logo"
          width={109}
          height={25}
      
        />
        <Image
          src={"/images/prada-logo.svg"}
          alt="logo"
          width={127}
          height={21}
          
        />

        <Image
          src={"/images/group (1).svg"}
          alt="logo"
          width={134}
          height={21}
          className="mr-9"
        />
     </section>
      
    </div>
  );
};

export default Hero;

