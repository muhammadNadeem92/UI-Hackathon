import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'

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

            {/* for small screen */}
            <div className='sm:flex'>
              <div className='sm:flex flex-row-reverse'>
            <Image src={'/images/productPage-Image1.svg'} alt='main-header-image1' width={448} height={290} className='ml-4 mt-4 sm:h-[490px] cover ' />
            <div className='flex gap-4 ml-4 mt-4 sm:flex-col sm:ml-[100px] '>
                <Image src={'/images/productPage-Image2.svg'} alt='header-image2'width={136} height={106} />
                <Image src={'/images/productPage-Image3.svg'} alt='header-image3'width={136} height={106} />
                <Image src={'/images/productPage-Image4.svg'} alt='header-image4'width={136} height={106} />
            </div>
            </div> 
            <Card  />
            </div>
            
             

    </div>
  )
}

export default ProductDetailPage