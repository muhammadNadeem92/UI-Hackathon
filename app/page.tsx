import BrowesStyle from '@/components/BrowesStyle'
import CardRating from '@/components/CardRating'
import CardRating2 from '@/components/CardRating2'
import CustomerReviews from '@/components/CustomerReviews'
import Hero from '@/components/Hero'
import React from 'react'

const HomePage = () => {
  return (
    <div>
         <Hero />
         <CardRating />
         <CardRating2 />
         <BrowesStyle />      
          <CustomerReviews />

    </div>
  )
}

export default HomePage


