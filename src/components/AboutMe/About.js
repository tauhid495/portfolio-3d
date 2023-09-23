import React from "react";
import ProfileTilt from "../AnimationComponents/ProfileTilt";
import Tilt from "react-parallax-tilt";
import "./aboutMe.css";

const About = () => {
  return (
    <div id="about" className=" md:h-screen w-full pt-7 md:flex items-center ">
      <div className="md:w-5/12 pr-5">
        <ProfileTilt />
      </div>
      <div className="md:w-7/12">
        {/* about me description */}
        <div className="mb-4">
          <h2 className="mb-4 text-4xl text-center font-semibold">
            Get to know me!
          </h2>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
            <br />
            <br /> I also like sharing content related to the stuff that I have
            learned over the years in Web Development so it can help other
            people of the Dev Community. <br />
            <br />
            If you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
        </div>
        <div className="md:flex justify-between">
          <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glarePosition="all"
            className="card-element md:mr-4 "
          >
            <div className="inner-text">
              <h2>Web Design</h2>
              <p>
                I can code your website pixel perfect and responsive using HTML,
                CSS, React, Tailwind and other frameworks. Also familiar with
                figma.
              </p>
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
              <h2>Web Development</h2>
              <p>
                I am able to develop your sites backend using nodeJs, MongoDB. I
                am also familiar with API's, JWT token, CRUD etc.
              </p>
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
              <h2>Graphics Design</h2>
              <p>I am an intermediate level graphics designer. I am able to provide midlevel graphics design with the help of Adobe photoshop and illustrator. </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default About;
