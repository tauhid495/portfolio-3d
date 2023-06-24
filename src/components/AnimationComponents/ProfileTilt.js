import React from "react";
import Tilt from "react-parallax-tilt";
import "./ProfileTilt.css";
import profilefront from "../asset/tilt-front.png";

const ProfileTilt = () => {
  return (
    <Tilt
      className="parallax-effect-img"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={800}
      glareEnable={true}
      glareMaxOpacity={0.45}
      glarePosition="all"
      transitionSpeed={1500}
      scale={1.02}
    >
      <img src={profilefront} className="inner-element" alt="pic" />
      <p className="inner-element2 relative">
        Whats app # +8801755338813
        <br /> Email: tauhid495@gmail.com
      </p>
      <p className="inner-element3 absolute"></p>
    </Tilt>
  );
};

export default ProfileTilt;
