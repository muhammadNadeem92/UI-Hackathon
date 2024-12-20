import { Link } from 'lucide-react'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { LuShoppingCart } from 'react-icons/lu'
import { PiUserCircleBold } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'

const UpperHeader = () => {
  return (
    <div>
      <header className='w-full h-[34px] bg-black flex pt-2 sm:w-full sm:h-[38px]'>
        <p className='w-[450px] h-4 text-xs text-white ml-11 cursor-default sm:w-[351px] sm:h-[19px] sm:ml-[450px] sm:text-base'>
          Sign up and get 20% off to your first order.
        </p>
        <span className='w-[350px] h-4 font-medium text-xs text-white underline cursor-pointer sm:text-sm sm:w-[100px] sm:mr-[460px] sm:h-[38px]'>
          Sign Up Now
        </span>
        <RxCross2 className='hidden sm:block text-white w-5 h-5 mr-[100px]' />
      </header>

      {/* Second header part */}
      <header className='hidden sm:w-[1140px] h-[41px] pt-[62px] ml-[100px] sm:flex gap-11'>
        <p className='w-[160px] h-[22px] font-bold text-[32px] text-black cursor-pointer'>
          SHOP.CO
        </p>

        <div className='w-[421px] h-[22px] flex mt-3 gap-6'>
          <ul className='flex items-center gap-3'>
            <select className='w-[67px] h-[22px] cursor-pointer'>
              <option value="Shop"> <Link href='/'>Shop</Link></option>
            </select>
            <li className='cursor-pointer'><Link href='/product-detail-page'>On Sale</Link></li>
            <li className='cursor-pointer'><Link href='/catagory'>New Arrivals</Link></li>
            <li className='cursor-pointer'>Brands</li>
          </ul>
        </div>

        <div className='w-[577px] h-12 rounded-[62px] px-4 py-3 flex gap-3 bg-[#f0f0f0]'>
          <CiSearch className='w-[20.27px] h-[20.27px] mt-[1.87px] ml-[1.87px]' />
          <input
            type="text"
            name="search"
            id="search"
            placeholder='Search for products...'
            className='w-[151px] h-[22px] bg-[#f0f0f0]'
          />
        </div>

        <div className='w-[62px] h-6 mt-3 flex gap-[14px]'>
          <LuShoppingCart className='w-[22.13px] h-[20.25px] mt-[1.88px]' />
          <PiUserCircleBold className='w-[20.25px] h-[20.25px] mt-[1.88px] ml-[1.88px]' />
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className='flex gap-2 mr-4 sm:hidden'>
        <p className='w-6 h-6 mt-[54px] ml-4 text-2xl cursor-pointer'>&#8801;</p>   
        <p className='w-[126px] h-[18px] mt-[54px] font-bold text-[25.2px] cursor-pointer'>
          SHOP.CO
        </p>
        <div className='flex items-end justify-end ml-auto mt-16 gap-3'>
          <CiSearch className='w-[22.27px] h-[20.27px] mt-[1.87px] ml-[1.87px]' />
          <LuShoppingCart className='w-[22.13px] h-[20.25px] mt-[1.88px]' />
          <PiUserCircleBold className='w-[22.25px] h-[20.25px] mt-[1.88px] ml-[1.88px]' />
        </div>
      </div>
    </div>
  )
}

export default UpperHeader
