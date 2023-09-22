import React, { useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills/MySkills";
import { FaFan } from "react-icons/fa";
import Contact from "./components/Contact/Contact";
import bg from "./components/asset/bg.jpg";
import TestPage from "./components/TestPage";
import About from "./components/AboutMe/About";

function App() {
  const [spean, setSpean] = useState(false);

  return (
    <div className="relative">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-40"
        src={bg}
        alt="ima"
      />
      <div className="App text-base-100 md:h-screen  overflow-y-auto md:px-24 w-full mx-auto relative ">
        <div
          className={`${
            spean ? null : "hidden"
          } flex w-screen h-screen absolute z-50 bg-black items-center justify-center top-0 left-0`}
        >
          <FaFan className="animate-spin w-14 h-14 text-primary" />
        </div>

        <div className="container mx-auto">
          {/* <Navbar /> */}
          <Navbar />
          <Hero setSpean={setSpean} />
          <div className={`${spean ? "hidden" : null}`}>
            <About />
            <MySkills />
            <Projects />
            <Contact />
            <TestPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
