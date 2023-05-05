import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/navigation";

import "../styles/Swiper.scss"



// import required modules
import {Navigation, EffectFade } from "swiper";

//import images:
import {images} from "../constants";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, EffectFade]}
        effect={"fade"}
        className="Swiper1"
      >
        <div className="container_swiper">  
        <SwiperSlide className='SwiperSlide'>
         <div className='img'>
          <img src = {images.couple} alt={"couple"}/>
         </div>
         <div className='SaleInfos'>
           <h1>Clothes</h1>
           <p>Clothes for men and women</p>
           <button type='button' className="btn" onClick={()=>{alert("hey you clicked")}}>Shop Now</button>
         </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
         <div className='img'>
         <img src = {images.home} alt={"home"}/>
         </div>
         <div className='SaleInfos'>
           <h1>Home Furnitures</h1>
           <p>Furnitures made</p>
           <button type='button' className="btn" onClick={()=>{alert("hey you clicked")}}>Shop Now</button>
         </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
         <div className='img'>
         <img src = {images.electronics} alt={"electronics"}/>
         </div>
         <div className='SaleInfos'>
           <h1>Electronics</h1>
           <p>The best of electronic products</p>
           <button type='button' className="btn" onClick={()=>{alert("hey you clicked")}}>Shop Now</button>
         </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
         <div className='img'>
         <img src = {images.food} alt={"food"}/>
         </div>
         <div className='SaleInfos'>
           <h1>Food</h1>
           <p>We provide you food from all areas in the world</p>
           <button type='button' className="btn" onClick={()=>{alert("hey you clicked")}}>Shop Now</button>
         </div>
        </SwiperSlide>
        </div>
      </Swiper>
      <div className=".shadow"></div>
    </>
  );
}
