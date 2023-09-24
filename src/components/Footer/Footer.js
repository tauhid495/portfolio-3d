import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className="footer-main">
      <hr className="border-cyan-400" />
      <div className="up-section">
        <div className="footer-left">
          <h1>Shahidul Islam</h1>
          <p>
            A Frontend focused Web Developer & Graphics Designer building the
            Frontend of Websites and Web Applications that leads to the success
            of the overall product
          </p>
        </div>
        <div className="footer-right">
          <h2>Social Links:</h2>
          <div className="flex">
            <div>
              <a
                href="https://www.linkedin.com/in/shahidul-islam-224049149/"
                target="blank"
              >
                <Icon
                  icon="et:linkedin"
                  className="w-10 h-10 mx-3 mt-6 text-cyan-400"
                />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/tauhid.49" target="blank">
                <Icon
                  icon="et:facebook"
                  className="w-10 h-10 mx-3 mt-6 text-cyan-400"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/tauhid495" target="blank">
                <Icon
                  icon="akar-icons:github-outline-fill"
                  className="w-10 h-10 mx-3 mt-6 text-cyan-400"
                />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/tauhid495" target="blank">
                <Icon
                  icon="et:twitter"
                  className="w-10 h-10 mx-3 mt-6 text-cyan-400"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div>
          Copyright &copy; 2022-{date} Md. Shahidul Islam. All Right Reserved.
        </div>
        <div>
          Designed by: <a href="mailto:tauhid495@gmail.com">Shahid</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
