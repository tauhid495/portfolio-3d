import React, { useState } from "react";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "./asset/mo-1.jpg";
import img2 from "./asset/deco-1.jpg";
import img3 from "./asset/todo-1.jpg";
import img4 from "./asset/blog-1.jpg";
import img5 from "./asset/weather-1.jpg";

import "./Projects.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectFade, Mousewheel, Pagination } from "swiper";
import Mouse from "./AnimationComponents/Mouse/Mouse";

const Projects = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <main className="snap-center project">
      <div>
        {/* main slide */}
        <Swiper
          effect={"fade"}
          loop={true}
          modules={[EffectFade, Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className="slider1"
        >
          <SwiperSlide
            style={{
              backgroundImage: `url(${img1})`,
              filter: "brightness(0.3)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img2})`,
              filter: "brightness(0.3)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img3})`,
              filter: "brightness(0.3)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img4})`,
              filter: "brightness(0.3)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img5})`,
              filter: "brightness(0.3)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></SwiperSlide>
        </Swiper>
      </div>

      {/* second slider */}
      <div className="project2">
        <div>
          <Mouse />
        </div>

        <Swiper
          effect={"coverflow"}
          direction={"vertical"}
          slidesPerView={"3"}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          centeredSlides={true}
          modules={[Mousewheel, Controller, Pagination]}
          onSwiper={setSecondSwiper}
          mousewheel={true}
          grabCursor={true}
          controller={{ control: firstSwiper }}
          className="slider2"
        >
          <SwiperSlide className="bg-orange-600 rounded-xl">
            <img src={img1} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="bg-lime-600 rounded-xl">
            <img src={img2} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="bg-blue-600 rounded-xl">
            <img src={img3} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="bg-pink-600 rounded-xl">
            <img src={img4} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="bg-cyan-600 rounded-xl">
            <img src={img5} alt="slider img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Projects;
