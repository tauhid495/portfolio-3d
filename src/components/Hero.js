import React from "react";
import ComputerCanvas from "./AnimationComponents/Computer";
import { Canvas } from "@react-three/fiber";
import BannerText from "./AnimationComponents/BannerText";
import { OrbitControls, Sparkles } from "@react-three/drei";
import Jump from "./AnimationComponents/Jump";
import Circle from "./AnimationComponents/Circle";
import Mouse from "./AnimationComponents/Mouse/Mouse";
import { Icon } from "@iconify/react";

const Hero = ({ setSpean }) => {
  return (
    <div className="snap-center md:flex items-center h-screen mx-auto md:px-5 relative overflow-hidden">
      <div className="md:w-1/2  z-30">
        <p className="text-4xl md:text-6xl font-semibold">
          <Jump />
        </p>
        <p className="text-4xl md:text-6xl font-semibold mt-5">
          <BannerText />
        </p>
        <h4 className="mt-10 font-semibold text-lg text-primary">
          <span className="font-bold text-base-100 text-xl">—  </span>
          What I do?
        </h4>
        <p className="mt-2 md:pr-20">
          I'm a freelance front-end web developer & like to craft solid and
          scalable products with great user experience.
        </p>
        <a
          target="blank"
          href="https://drive.google.com/file/d/1tjsmqB1p5zNyNM4e96RZvQTEdKnw1bC9/view?usp=sharing"
          className="mt-10 btn btn-sm btn-primary animate-pulse z-30"
        >
          My resume
        </a>
        <div className="flex">
          <div>
            <a href="https://www.linkedin.com/in/shahidul-islam-224049149/">
              <Icon
                icon="et:linkedin"
                className="w-10 h-10 mx-3 mt-6 text-cyan-400"
              />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/tauhid.49">
              <Icon
                icon="et:facebook"
                className="w-10 h-10 mx-3 mt-6 text-cyan-400"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/tauhid495">
              <Icon
                icon="akar-icons:github-outline-fill"
                className="w-10 h-10 mx-3 mt-6 text-cyan-400"
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/tauhid495">
              <Icon
                icon="et:twitter"
                className="w-10 h-10 mx-3 mt-6 text-cyan-400"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 px-10 z-10 backdrop-blur-[2px]">
        <Circle />
      </div>

      <div className="absolute w-full md:w-[1000px] h-[250px] md:h-full top-80 md:-top-16 left-0 md:left-72 z-10">
        <ComputerCanvas setSpean={setSpean} />
      </div>
      <div className="hidden md:block absolute w-full h-full top-0 z-0">
        <Canvas>
          <OrbitControls rotation={false} enableZoom={false} />
          <Sparkles
            noise={5}
            count={500}
            speed={0.3}
            size={1}
            color={"#F6F939"}
            opacity={5}
            scale={[20, 50, 20]}
          />
        </Canvas>
      </div>
      <a href="/#" className="absolute bottom-10 left-1/2">
        <Mouse />
      </a>
    </div>
  );
};

export default Hero;
