import BrowesStyle from '@/components/BrowesStyle'
import CustomerReviews from '@/components/CustomerReviews'
import Hero from '@/components/Hero'
import React from 'react'
import NewArrivals from '@/components/newArrivals'
import TopSelling from '@/components/topSelling'

const HomePage = () => {
  return (
    <div>
         <Hero />
         <NewArrivals />
         <TopSelling />
         <BrowesStyle />      
         <CustomerReviews />

    </div>
  )
}

export default HomePage


