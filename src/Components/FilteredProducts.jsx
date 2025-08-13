import React from 'react'
import { productCategories } from '../assets/data.js'
import { button } from 'motion/react-client'
const FilteredProducts = () => {
  return (
    <div className='flex gap-4 text-center items-center justify-center py-20'  data-aos="fade-up">
      {productCategories.map((item)=>(
        <button className='text-white border border-primary px-5 py-1 cursor-pointer rounded-sm bg-primary'  data-aos="fade-up" >{item}</button>
      ))}
    </div>
  )
}

export default FilteredProducts