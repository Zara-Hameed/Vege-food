import React, { useEffect } from 'react';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Aboutus from './Pages/Aboutus';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import WishlistProduct from './Pages/WishlistProduct';
import ProductDetails from './Pages/SingleProduct';
import Checkoutpage from './Pages/Checkoutpage';
import BlogPost from './Pages/Singleblog';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/Scroll';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/single-blog' element={<BlogPost />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish-list-product' element={<WishlistProduct />} />
        <Route path='/single-product' element={<ProductDetails />} />
        <Route path='/check-out' element={<Checkoutpage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
