import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../AnimationComponents/GlobeCanvas";
import "./Contact.css";
import { SiLinkedin } from "react-icons/si";
import { FaGithub, FaTwitter } from "react-icons/fa";
import {
  MdEmail,
  MdFacebook,
  MdLocationOn,
  MdWifiCalling3,
} from "react-icons/md";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e8qcnvs",
        "template_fj4zpok",
        form.current,
        "A141ADNPuBy4inFEz"
      )
      .then(
        (result) => {
          console.log(result);
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
    // e.target.reset();
  };

  return (
    <div className="contact">
      {/* sodial icons */}
      <div className="grid1">
        <div>
          <a href="https://www.linkedin.com/in/shahidul-islam-224049149/">
            <SiLinkedin className="social-icon" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/tauhid.49">
            <MdFacebook className="social-icon" />
          </a>
        </div>
        <div>
          <a href="https://github.com/tauhid495">
            <FaGithub className="social-icon" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/tauhid495">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <div className="grid2">
        <div>
          <h1>Contact With Me</h1>
          <MdLocationOn className="contact-icon" />
          <p>Pabna Sadar, Pabna, Bangladesh</p>
          <MdEmail className="contact-icon" />
          <p>
            shahidul.islam.1691.bd@gmail.com <br />
            tauhid495@gmail.com
          </p>
          <MdWifiCalling3 className="contact-icon" />
          <p>Contact No. +880 1755338813</p>
        </div>
      </div>

      <div className="grid3">
        <section className="form-body">
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="">
              <label className="">
                <span className="">Your Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="" />
            </div>

            <div className="">
              <label className="">
                <span className="">Your Email</span>
              </label>
              <input
                type="text"
                name="Email"
                placeholder="email"
                className=" "
              />
            </div>

            <div className="">
              <label className="">
                <span className="">Subject</span>
              </label>
              <input
                type="text"
                name="Subject"
                placeholder="subject"
                className=" "
              />
            </div>

            <div className="">
              <label className="">
                <span className="">Message</span>
              </label>
              <textarea
                className=" "
                name="message"
                placeholder="Message"
              ></textarea>
            </div>

            <div type="submit" className="">
              <button className=" ">Send</button>
            </div>
          </form>
        </section>
        <div className="globe">
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;