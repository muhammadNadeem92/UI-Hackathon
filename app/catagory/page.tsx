'use client'
import Link from 'next/link'
import FilterComponent from '@/components/filter'
import ProductGrid from '@/components/Product'
import FilterSidebar from '@/components/FilterSidebar'


const catagory = () => {
  return (
    <div>
                {/* divider */}
      <div className='border border-[#0000001A] w-full ml-4 mt-6 md:w-[1140px] md:ml-[100px] md:mt-16'></div>

        <nav className='ml-4 w-[215px] h-[19px] mt-5 text-sm flex gap-2 text-[#00000099] md:ml-24'>
        <Link href={'#'}>Home &gt;</Link>
        <Link href={'#'}>Casual</Link>
        </nav>
        <div className='flex justify-between md:hidden '>
            <div className='flex'>
            <p className='h-8 font-bold text-2xl ml-4 mt-4'>Casual</p>
            <p className='w-full h-[10px] text-sm mt-6'>Showing 1-10 of 100 Products</p>

            </div>
            <div className='pl-4 mr-0 pr-0 pt-4'>
            <FilterComponent />
            </div>
        </div> 
       

        <div className='md:flex mt-4 p-2'>
        <div className='hidden md:block'>
        <FilterSidebar />
        </div>
        <div className='flex flex-col justify-between'>
        <div className='hidden md:flex flex-row items-center justify-center gap-2 '>
        <p className='w-[101px] h-[43px]font-bold text-[32px] mt-4 ml-6 '>Casual</p>
        <p className='w-auto  h-[11px] text-[#00000099] ml-44'>Showing 1-10 of 100 Products </p>
        <p className='mt-3'>Sort by: <select><option value="Most Popular">Most Popular</option></select></p>
        </div>
        <ProductGrid  />
        </div>

     
        </div>
    </div>
  )
}

export default catagory