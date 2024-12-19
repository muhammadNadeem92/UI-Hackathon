'use client' 
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
import ReviewCard from '@/components/ReviewCard'
import { Button } from '@/components/ui/button'
import ProductCardReviewsRating from '@/components/ProductCardReviewsRating'

const ProductDetailPage = () => {
  return (
    <div>
        {/* divider */}
        <div className='border border-[#0000001A] w-[447px] ml-4 mt-6 sm:w-[1140px] sm:ml-[100px] sm:mt-16'></div>
      {/* links  */}
        <nav className='ml-4 w-[215px] h-[19px] mt-5 text-sm flex gap-2 text-[#00000099] sm:w-[259px] sm:text-base sm:ml-[100px]'>
            <Link href={'#'}>Home &gt;</Link>
            <Link href={'#'}>Shop &gt;</Link>
            <Link href={'#'}>Men &gt;</Link>
            <Link href={'#'}>T-shirt</Link>
           
        </nav>
       <div className='sm:flex'>
          <Image src={'/images/ProductPage-Image1.svg'} alt='product-image1'width={450} height={290} className='ml-4 mt-4 sm:hidden' />
          <div className='flex sm:hidden'>
          <Image src={'/images/ProductPage-Image2.svg'} alt='product-image2'width={137} height={106} className='ml-4 mt-4' />
          <Image src={'/images/ProductPage-Image3.svg'} alt='product-image3'width={137} height={106} className='ml-4 mt-4'/>
          <Image src={'/images/ProductPage-Image4.svg'} alt='product-image4'width={137} height={106} className='ml-4 mt-4' />
          </div>

             {/* for large screen */}

          <div className='hidden sm:flex flex-col ml-9'>
          <Image src={'/images/ProductPage-Image2-2.svg'} alt='product-image2-2'width={152} height={167} className='ml-16 mt-4' />
          <Image src={'/images/ProductPage-Image2-3.svg'} alt='product-image2-3'width={152} height={167} className='ml-16 mt-4'/>
          <Image src={'/images/ProductPage-Image2-4.svg'} alt='product-image2-4'width={152} height={167} className='ml-16 mt-4' />

          </div>
         
          <Image src={'/images/ProductPage-Image2-1.svg'} alt='product-image2-1'width={444} height={530} className='hidden sm:block ml-4 mb-24 mt-4  ' /> 

          <Card />

         </div>
          {/* tabs */}
                
                 <div className='hidden sm:block ml-24 '>
                   <Button variant={'ghost'} className="text-[#00000099] mt-6 ml-4 hover:underline   ">Product Details</Button>
                   <Button variant={'ghost'} className="text-[#00000099] mt-6 ml-4 hover:underline ">Rating & Reviews</Button>
                   <Button variant={'ghost'} className="text-[#00000099] mt-6 ml-4 hover:underline  ">FAQs</Button>
                   </div>
         
                   <div className="hidden sm:block w-[1240px] h-0 border mt-5 ml-28  "></div>
                 
                 <div className="hidden sm:flex ml-24 w-[1240px] justify-between">
                  <div className='flex'>
                 <p className="w-[107px] h-[27px] mt-4 ml-4 font-bold text-xl">All Reviews</p>
                 <p className="w-[29px] h-[10px] mt-5 ml-1 text-sm text-[#00000099]">(451)</p>
                 </div>
                 <div className="flex gap-4 mt-4">
                  <Image src={'/images/filter.svg'} alt="filter-image" width={40} height={40}  className="mr-4"/>
                  <select className='bg-[#F0F0F0] rounded-full px-2'><option value="Latest">Latest</option></select>
                  <Button variant={'default'} size={'default'} >Write a Review</Button>
         
                  
                 </div>
                 </div>


       <ReviewCard />
       <Button variant={'outline'} size={'default'} className='ml-28 py-6 sm:ml-[605px] px-14 sm:py-6 '>Load More Reviews</Button>
      <div className='mr-56'>
        <ProductCardReviewsRating />
        </div>
       </div>

 
             

  )
}

export default ProductDetailPage