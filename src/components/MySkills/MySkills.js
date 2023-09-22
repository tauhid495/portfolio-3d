import React, { Component } from "react";
import Slider from "react-slick";
import Tilt from "react-parallax-tilt";
import "./MySkills.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaGithub, FaHtml5, FaNodeJs, FaReact, FaStripe } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiFirebase,
  SiHeroku,
  SiMongodb,
  SiNetlify,
  SiRedux,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

export default class MySkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: false,
      centerMode: true,
      swipeToSlide: true,
      focusOnSelect: true,
    };

    const settings2 = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 2000,
      arrows: false,
    };

    return (
      <div className="skill-main">
        <div className="md:w-1/2 md:px-10">
          <div className="text-xs md:text-lg">
            <h1 className="hidden md:block text-5xl font-semibold md:my-10">
              My Skills
            </h1>
            <p className="mb-16">
              Here you will find more information about my current skills mostly
              in terms of programming and technology.
            </p>
            <hr />
            <Slider
            className="my-3"
              {...settings}
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
            >
              <div>
                <FaHtml5 className=" w-9 h-9 md:w-16 md:h-16 text-[#FF6633]" />
                <p> HTML 5</p>
              </div>
              <div>
                <DiCss3 className="w-9 h-9 md:w-16 md:h-16 text-[#0066CC]" />
                <p>   CSS 3</p>
              </div>
              <div>
                <FaBootstrap className="w-9 h-9 md:w-16 md:h-16 text-[#9966CC]" />
                <p>BootStrap</p>
              </div>
              <div>
                <SiTailwindcss className="w-9 h-9 md:w-16 md:h-16 text-[#00CCCC]" />
                <p>Tailwind</p>
              </div>
              <div>
                <TbBrandJavascript className="w-9 h-9 md:w-16 md:h-16 text-[#006699]" />
                <p>JavaScript</p>
              </div>
              <div>
                <FaReact className="w-9 h-9 md:w-16 md:h-16 text-[#59DCFA]" />
                <p> ReactJs</p>
              </div>
              <div>
                <SiMongodb className="w-9 h-9 md:w-16 md:h-16 text-[#339933]" />
                <p>MontoDB</p>
              </div>
              <div>
                <SiHeroku className="w-9 h-9 md:w-16 md:h-16 text-[#6666CC]" />
                <p> Heroku</p>
              </div>
              <div>
                <SiFirebase className="w-9 h-9 md:w-16 md:h-16 text-[#FF9900]" />
                <p>Firebase</p>
              </div>
              <div>
                <FaStripe className="w-9 h-9 md:w-16 md:h-16 text-[#6666CC]" />
                <p>  Stripe</p>
              </div>
              <div>
                <FaNodeJs className="w-9 h-9 md:w-16 md:h-16 text-[#669966]" />
                <p> NodeJS</p>
              </div>

              <div>
                <SiRedux className="w-9 h-9 md:w-16 md:h-16 text-[#9966CC]" />
                <p>  Redux</p>
              </div>
              <div>
                <SiNetlify className="w-9 h-9 md:w-16 md:h-16 text-[#0296aa]" />
                <p>  Netlify</p>
              </div>
              <div>
                <FaGithub className="w-9 h-9 md:w-16 md:h-16 text-[#ffffff]" />
                <p> GitHub</p>
              </div>
              <div>
                <SiVisualstudiocode className="w-9 h-9 md:w-16 md:h-16 text-[#036fc7]" />
                <p> VsCode</p>
              </div>
            </Slider>
            <hr />
          </div>
        </div>

        {/* right side */}
        <div className="md:w-1/2 px-5 md:pl-28  md:mt-14">
          <h1 className=" md:hidden text-5xl font-semibold my-10 md:my-16">
            My Skills
          </h1>
          <Tilt
            className="parallax-effect w-full md:w-[420px] md:h-[360px]"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={800}
            glareEnable={true}
            glareMaxOpacity={0.45}
            transitionSpeed={1500}
            scale={1.02}
          >
            <div className="inner-element-skill ml-12 md:ml-10">
              <Slider
                {...settings2}
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
              >
                <div>
                  <FaHtml5 className=" w-52 h-52 md:w-80 md:h-80 text-[#FF6633]" />
                </div>
                <div>
                  <DiCss3 className="w-52 h-52 md:w-80 md:h-80 text-[#0066CC]" />
                </div>
                <div>
                  <FaBootstrap className="w-52 h-52 md:w-80 md:h-80 text-[#9966CC]" />
                </div>
                <div>
                  <SiTailwindcss className="w-52 h-52 md:w-80 md:h-80 text-[#00CCCC]" />
                </div>
                <div>
                  <TbBrandJavascript className="w-52 h-52 md:w-80 md:h-80 text-[#006699]" />
                </div>
                <div>
                  <FaReact className="w-52 h-52 md:w-80 md:h-80 text-[#59DCFA]" />
                </div>
                <div>
                  <SiMongodb className="w-52 h-52 md:w-80 md:h-80 text-[#339933]" />
                </div>
                <div>
                  <SiHeroku className="w-52 h-52 md:w-80 md:h-80 text-[#6666CC]" />
                </div>
                <div>
                  <SiFirebase className="w-52 h-52 md:w-80 md:h-80 text-[#FF9900]" />
                </div>
                <div>
                  <FaStripe className="w-52 h-52 md:w-80 md:h-80 text-[#6666CC]" />
                </div>
                <div>
                  <FaNodeJs className="w-52 h-52 md:w-80 md:h-80 text-[#669966]" />
                </div>
                <div>
                  <SiRedux className="w-52 h-52 md:w-80 md:h-80 text-[#9966CC]" />
                </div>
                <div>
                  <SiNetlify className="w-52 h-52 md:w-80 md:h-80 text-[#0296aa]" />
                </div>
                <div>
                  <FaGithub className="w-52 h-52 md:w-80 md:h-80 text-[#ffffff]" />
                </div>
                <div>
                  <SiVisualstudiocode className="w-52 h-52 md:w-80 md:h-80 text-[#036fc7]" />
                </div>
              </Slider>
            </div>
          </Tilt>
        </div>
      </div>
    );
  }
}
