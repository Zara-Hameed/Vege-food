import React from 'react'
import PagesHero from '../Components/PagesHero'
import { assets, products} from '../assets/data.js'
import FilteredProducts from '../Components/FilteredProducts.jsx'

import ProductCard from '../Components/ProductCard.jsx'
import Newsletter from '../Components/Newsletter.jsx'

const Shop = () => {
  return (
   <div>
    <PagesHero
    img={assets.bg_1}
    tagline="Home Products"
    heading="Products"
    />
    <FilteredProducts/>
    <div className='py-20'>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          img={product.img}
          price={product.price}
          oldPrice={product.oldPrice}
          discount={product.discount}
        />
      ))}
    </div>
       
    </div>
    <Newsletter/>

   </div>
  )
}

export default Shop