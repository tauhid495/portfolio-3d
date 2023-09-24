import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import MySkills from "./components/MySkills/MySkills";
import Contact from "./components/Contact/Contact";
import bg from "./components/asset/bg.jpg";
import About from "./components/AboutMe/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative pl-5">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-40"
        src={bg}
        alt="ima"
      />
      <div className="App text-base-100 md:h-screen  overflow-y-auto md:px-24 w-full mx-auto relative ">
        <div className="container mx-auto">
          <Navbar />
          <Hero />

          <About />
          <MySkills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
