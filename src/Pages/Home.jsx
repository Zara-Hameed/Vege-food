import React from 'react'

import HeroSection from '../Components/Hero'
import FeaturesSection from '../Components/Features'
import Category from '../Components/Category'

import TestimonialSection from '../Components/Testimonial'
import DealOfTheDay from '../Components/Deal'
import PartnerSection from '../Components/Partner'

import ProductList from '../Components/ProductList'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
       
        <HeroSection/>
        <FeaturesSection/>
        <Category/>
        <ProductList/>
        <DealOfTheDay/>
        <TestimonialSection/>
        <PartnerSection/>
        <Newsletter/>
        
        
      
    </div>
  )
}

export default Home