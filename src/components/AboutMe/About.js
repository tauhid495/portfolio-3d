import React from "react";
import ProfileTilt from "../AnimationComponents/ProfileTilt";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="snap-center md:h-screen w-full pt-7 md:flex items-center overflow-hidden">
      <div className="md:w-5/12 pr-5">
        <ProfileTilt />
      </div>
      <div className="md:w-7/12">
        <div>Text</div>
        <div className="md:flex justify-between">
          <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glarePosition="all"
            className="card-element md:mr-4"
          >
            <div className="inner-text">
              <div>Card</div>
              <div>Card</div>
            </div>
          </Tilt>
          <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glarePosition="all"
            className="card-element md:mx-2"
          >
            <div className="inner-text">
              <div>Card</div>
              <div>Card</div>
            </div>
          </Tilt>
          <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glarePosition="all"
            className="card-element md:ml-4"
          >
            <div className="inner-text">
              <div>Card</div>
              <div>Card</div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default About;
