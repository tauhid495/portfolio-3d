import React, { useState } from "react";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../asset/mo-1.jpg";
import img2 from "../asset/deco-1.jpg";
import img3 from "../asset/todo-1.jpg";
import img4 from "../asset/blog-1.jpg";
import img5 from "../asset/weather-1.jpg";
import img6 from "../asset/pizza.jpg";
import img7 from "../asset/lms.jpg";

import img11 from "../asset/mo-1.png";
import img21 from "../asset/deco-1.png";
import img31 from "../asset/todo-1.png";
import img41 from "../asset/blog-1.png";
import img51 from "../asset/weather-1.png";
import img61 from "../asset/pizza.png";
import img71 from "../asset/lms.png";

import "./Projects.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectFade, Mousewheel, Pagination } from "swiper";
import Mouse from "../AnimationComponents/Mouse/Mouse";

const Projects = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <main id="project" className=" project">
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
              backgroundImage: `url(${img11})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="slider-text">
              <h1>Description:</h1>
              <p>
                * It's a B2B full stack manufacturer website of microwave woven
                tools.
                <br />
                * Customers purchase tools from manufacturers at holesale price.
                <br /> * Fully functional firebase authentication system
                implimented
                <br /> * Secure payment gateway implemented by using stripe.
                <br /> * Admin and customer roles implemented with different
                dashboards.
                <br /> * Admin can view all customers and can make admin. Admin
                can add and delete products
                <br /> * Customers can place order. Can pay by cards. Also can
                cancel order before shipping.
              </p>
              <br />
              <h1>Technology used:</h1>
              <p>
                ReactJs, React router, Firebase, React-firebase-hooks, Tailwind,
                Stripe, JWT, React query, MongoDb, Heroku,Firebase Hosting.
              </p>
              <br />
              <h1>Links:</h1>
              <p>
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://microwave-e935d.web.app/"
                >
                  Live Link
                </a>{" "}
                ||
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://github.com/tauhid495/assignment-12-client"
                >
                  {" "}
                  Github-Client-side
                </a>{" "}
                ||
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://github.com/tauhid495/Assignment-12-server"
                >
                  {" "}
                  Github-Server-side
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img21})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="slider-text">
              <h1>Description:</h1>
              <p>
                * It's a inventory management website of unique furnitures.
                <br /> * Valid users can post their products, add products,
                place order. <br />* Fully functional firebase authentication
                system implimented. <br />* Registered users can see all
                products. They can delete or update product. <br />* Update
                section users can see present stock. Here they can add stock or
                reduce stock items. <br />* My items section users can see their
                all ordered products.
                <br /> * Users validity checked by using JWT
              </p>
              <br />
              <h1>Technology used:</h1>
              <p>
                ReactJs, React router, Firebase, React-firebase-hooks, Tailwind,
                JWT, MongoDB, Heroku, Firebase Hosting.
              </p>
              <br />
              <h1>Links:</h1>
              <p>
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://furniture-af1d4.web.app/"
                >
                  Live Link
                </a>{" "}
                ||
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://github.com/tauhid495/assignment-11-client"
                >
                  {" "}
                  Github-Client-side
                </a>{" "}
                ||
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://github.com/tauhid495/assignment-11-server"
                >
                  {" "}
                  Github-Server-side
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img31})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="slider-text">
              <h1>Description:</h1>
              <p>
                * It's a todo task listing website. <br />* Users can add tasks,
                edit and delete tasks. <br />* Pending and completed tasks shows
                different pages. <br />* Backend database implemented. <br />*
                Quote generator added. <br />* MongoDB used for database.
              </p>
              <br />
              <h1>Technology used:</h1>
              <p>
                ReactJs, React router, Tailwind, DaisyUi,MongoDB, NodeJs, Render
                Netlify.
              </p>
              <br />
              <h1>Links:</h1>
              <p>
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://tauhid-todo.netlify.app/home"
                >
                  Live Link
                </a>
                ||
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://github.com/tauhid495/toDo-client"
                >
                  {" "}
                  Github-Client-side
                </a>
                ||
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://github.com/tauhid495/toDo-Server"
                >
                  {" "}
                  Github-Server-side
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img41})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="slider-text">
              <h1>Description:</h1>
              <p>
                * It's a open blog website. <br />* Users can post blog, edit,
                delete blogs.
                <br /> * Users can filter blogs by several parameters. <br />*
                Visitors can see history of blog reading. <br />* Redux old
                version used for state management.
                <br /> * MongoDB used for backend database
              </p>
              <br />
              <h1>Technology used:</h1>
              <p>
                ReactJs, React router, Tailwind, DaisyUi, NodeJs, MongoDB,
                Render, Netlify.
              </p>
              <br />
              <h1>Links:</h1>
              <p>
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://redux-assignment-first.netlify.app/"
                >
                  Live Link
                </a>
                ||
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://github.com/tauhid495/redux-assign-1"
                >
                  {" "}
                  Github-Client-side
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img51})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="slider-text">
              <h1>Description:</h1>
              <p>
                * It's a weather forcast app. <br />* It detects users location
                autometically and shows current forecast. <br />* This app shows
                next three days weather forecast.
                <br /> * This site also shows hourly forecast, sunset and
                sunrise time, uv index and more.
                <br /> * Open weather api used for forcast data.
                <br /> * Rechart used for heat index
              </p>
              <br />
              <h1>Technology used:</h1>
              <p>ReactJs, React router, Tailwind, DaisyUi, Rechart, Netlify.</p>
              <br />
              <h1>Links:</h1>
              <p>
                <a
                  target="blank"
                  className="hover:text-primary"
                  href="https://weathertrend.netlify.app/"
                >
                  Live Link
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img61})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="slider-text">
              <h1>Description:</h1>
              <p></p>
              <h1>Technology used:</h1>
              <p></p>
              <h1>Links:</h1>
              <p></p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${img71})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="slider-text">
              <h1>Description:</h1>
              <p></p>
              <h1>Technology used:</h1>
              <p></p>
              <h1>Links:</h1>
              <p></p>
            </div>
          </SwiperSlide>
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
          <SwiperSlide className="rounded-xl">
            <img src={img1} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <img src={img2} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <img src={img3} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <img src={img4} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <img src={img5} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <img src={img6} alt="slider img" />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <img src={img7} alt="slider img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Projects;
