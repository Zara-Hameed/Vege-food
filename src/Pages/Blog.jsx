import React from 'react'
import PagesHero from '../Components/PagesHero'
import { assets} from '../assets/data.js'
import BlogSection from '../Components/Blogpost'
const Blog = () => {
  return (
    <div>
      <PagesHero
      
         img={assets.bg_1}
          tagline="Home Blog"
          heading="BLOG"
      />
      <BlogSection/>
    </div>
  )
}

export default Blog