import React from "react";
import AboutComponentMini from "../../SubComponents/About";
import { RxWidth } from "react-icons/rx";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      
      <AboutComponentMini />
      <div className="container">
        <img src="/about.png" alt="about" />
     
      </div>
    </section>
  );
};

export default AboutUs;
