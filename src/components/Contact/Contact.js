import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../AnimationComponents/GlobeCanvas";
import "./Contact.css";

import { Icon } from "@iconify/react";

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
    <div id="contact" className="contact">
      {/* sodial icons */}
      <div className="grid1">
        <div>
          <a
            href="https://www.linkedin.com/in/shahidul-islam-224049149/"
            target="blank"
          >
            <Icon
              icon="et:linkedin"
              width="55"
              height="55"
              className="social-icon"
            />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/tauhid.49" target="blank">
            <Icon
              icon="et:facebook"
              width="55"
              height="55"
              className="social-icon"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/tauhid495" target="blank">
            <Icon
              icon="akar-icons:github-outline-fill"
              width="55"
              height="55"
              className="social-icon"
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/tauhid495" target="blank">
            <Icon
              icon="et:twitter"
              width="55"
              height="55"
              className="social-icon"
            />
          </a>
        </div>
      </div>
      <div className="grid2">
        <div>
          <h1>Contact With Me</h1>
          <Icon icon="system-uicons:location" className="contact-icon" />
          <p>Pabna Sadar, Pabna, Bangladesh</p>
          <Icon icon="system-uicons:mail" className="contact-icon" />
          <p>
            <a href="mailto:shahidul.islam.1691.bd@gmail.com">
              shahidul.islam.1691.bd@gmail.com
            </a>{" "}
            <br />
            <a href="mailto:tauhid495@gmail.com">tauhid495@gmail.com</a>
          </p>
          <Icon
            icon="material-symbols:wifi-calling-1-outline-rounded"
            className="contact-icon"
          />
          <p>Contact No. +880 1755338813</p>
        </div>
      </div>

      <div className="grid3">
        <section className="form-body">
          <h1>Fell Free To Write</h1>
          <form ref={form} onSubmit={sendEmail} className="form">
            <div>
              <label>
                <span>Your Name</span>
              </label>
              <input type="text" name="name" />
            </div>

            <div>
              <label>
                <span>Your Email</span>
              </label>
              <input type="text" name="Email" />
            </div>

            <div>
              <label>
                <span>Subject</span>
              </label>
              <input type="text" name="Subject" />
            </div>

            <div>
              <label>
                <span>Message</span>
              </label>
              <textarea name="message" />
            </div>

            <div type="submit">
              <button>Send message</button>
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
