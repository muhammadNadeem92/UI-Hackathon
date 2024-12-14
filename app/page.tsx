import CardRating from '@/components/CardRating'
import CardRating2 from '@/components/CardRating2'
import CustomerReviews from '@/components/CustomerReviews'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div>
         <Hero />
         <CardRating />
         <Button variant={'outline'} size={'xl'} className='ml-4 sm:hidden'>View All</Button>
         <Button variant={'outline'} size={'xl2'} className='hi sm:block text-center ml-[611px]'>View All</Button>
        {/* divider */}
         <div className='w-[447px] ml-4 mt-10 border border-[#0000001A] sm:w-[1205px] sm:border sm:border-[#0000001A] sm:ml-16 sm:mt-16'></div>
         <CardRating2 />
         <Button variant={'outline'} size={'xl'} className='ml-4 sm:hidden'>View All</Button>
         <Button variant={'outline'} size={'xl2'} className='hidden sm:block sm:text-center ml-[611px]'>View All</Button>
        
        <div className='w-[450px] h-[975px] mt-[50px] rounded-xl ml-4 bg-[#f0f0f0]  sm:w-[1239px] sm:h-[866px] sm:ml-16'>
          <p className='w-[246px] h-[72px] pt-14  font-bold text-[32px] text-center ml-20 sm:w-[687px] sm:[58px] sm:pt-[70px] sm:mb-16 sm:ml-[276px]'>BROWSE BY DRESS STYLE</p>
           
            <Image src={'/images/ImgFrame1.svg'} alt="ImageFrame-1" width={310} height={190}  className='mt-24 ml-16 border rounded-[20px] sm:hidden'/>
            <Image src={'/images/ImgFrame2.svg'} alt="ImageFrame-2" width={310} height={190}  className='mt-3 ml-16 border rounded-[20px] sm:hidden'/>
            <Image src={'/images/ImgFrame3.svg'} alt="ImageFrame-3" width={310} height={190}  className='mt-3 ml-16 border rounded-[20px] sm:hidden'/>
            <Image src={'/images/imageFrame4.svg'} alt="ImageFrame-4" width={310} height={190}  className='mt-3 ml-16 border rounded-[20px] sm:hidden'/>

          <div className='hidden sm:flex'>
            <Image src={'/images/lg-image-1.svg'} alt="lg-image-1" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>
            <Image src={'/images/lg-image-2.svg'} alt="lg-image-2" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>
            </div>
            <div className='hidden sm:flex '>
             <Image src={'/images/lg-image-3.svg'} alt="lg-image-3" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>
             <Image src={'/images/lg-image-4.svg'} alt="lg-image-4" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>

             </div>

           </div>
          <CustomerReviews />

    </div>
  )
}

export default HomePage


