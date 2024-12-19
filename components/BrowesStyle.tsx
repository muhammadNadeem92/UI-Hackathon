import React from 'react'
import Image from 'next/image'

const BrowesStyle = () => {
  return (
    <div>
         <div className='w-[558px] mr-4 h-auto mt-[50px] rounded-xl ml-4 bg-[#f0f0f0]  sm:w-[1239px] sm:h-[866px] sm:ml-16 lg:ml-56'>
          <p className='w-[264px] h-[72px] pt-14  font-bold text-[32px] text-center ml-24 sm:w-[687px] sm:[58px] sm:pt-[70px] sm:mb-16 sm:ml-[276px]'>BROWSE BY DRESS STYLE</p>
           {/* for mobile */}
            <Image src={'/images/ImgFrame1.svg'} alt="ImageFrame-1" width={390} height={190}  className='mt-24 ml-16 border rounded-[20px] sm:hidden'/>
            <Image src={'/images/ImgFrame2.svg'} alt="ImageFrame-2" width={390} height={190}  className='mt-3 ml-16 border rounded-[20px] sm:hidden'/>
            <Image src={'/images/ImgFrame3.svg'} alt="ImageFrame-3" width={390} height={190}  className='mt-3 ml-16 border rounded-[20px] sm:hidden'/>
            <Image src={'/images/imageFrame4.svg'} alt="ImageFrame-4" width={390} height={190}  className='mt-3 ml-16 border rounded-[20px] sm:hidden'/>
  {/* for lg */}
          <div className='hidden sm:flex'>
            <Image src={'/images/lg-image-1.svg'} alt="lg-image-1" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>
            <Image src={'/images/lg-image-2.svg'} alt="lg-image-2" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>
            </div>
            <div className='hidden sm:flex '>
             <Image src={'/images/lg-image-3.svg'} alt="lg-image-3" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>
             <Image src={'/images/lg-image-4.svg'} alt="lg-image-4" width={684} height={289}  className='mt-3 ml-4 border rounded-[20px]'/>

             </div>

           </div>
    </div>
  )
}

export default BrowesStyle