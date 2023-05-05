import React from 'react'
import Navigation from "../Components/Navigation"
import "../App.scss" 
import Swiper from "../Components/Swiper";
import DynamicDashBoard from "../Components/DynamicDashBoard";
import Categories from "../Components/Categories";
import SectionInit from "../Components/SectionInit";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from '../Footer';


const Home = () => {
  return (
    <>
    <Navigation />
    <DynamicDashBoard />
    <SectionInit title={"Favorites"}/>
    <Swiper />
    <SectionInit title={"Categories"}/>
    <Categories />
    <Newsletter/>
    <Footer/>
</>
  )
}

export default Home