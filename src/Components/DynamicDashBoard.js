import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation } from "swiper";
import styled from "styled-components";

import { firstimages } from "../constants";

const StyledSwiper = styled(Swiper)`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  cursor: grab;
  box-shadow: 5px 5px 10px gray;

  .swiper-slide {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .infos {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      z-index: 1;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.5);

      h1 {
        font-size: 60px;
        margin-bottom: 2rem;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
        .red {
          color: rgb(213, 15, 15);
        }
      }

      h3 {
        font-size: 30px;
        font-weight: 400;
        font-family: sans-serif;
        letter-spacing: 1px;
        opacity: 0.8;
      }
    }
  }

  .swiper-slide-active {
    .infos {
      animation: fadeIn 1s forwards;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -55%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

const DynamicDashboard = () => {
  //dynamic text:
  const [text, setText] = useState({
    heading: "Welcome to Git",
    subheading: "The best marketplace for all",
  });
  useEffect(() => {
    const title = "Welcome to Git";
    const subheading = "The best marketplace for all";
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < title.length || i < subheading.length) {
        setText({
          heading: title.slice(0, i + 1),
          subheading: subheading.slice(0, i+1),
        });
        i++;
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <StyledSwiper
      loop
      slidesPerView={1}
      centeredSlides
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectFade, Navigation]}
      effect={"fade"}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >

      {Object.keys(firstimages).map((key) => (
        <SwiperSlide key={key}>
          <img src={firstimages[key]} alt={key} />

          {/* Replace the hard-coded text in the infos section with the state variable: */}
          <div className="infos">
            <h1>
              {text.heading}
              <span className="red">Shop</span>
            </h1>
            <h3>
              <i>{text.subheading}</i>
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default DynamicDashboard;
