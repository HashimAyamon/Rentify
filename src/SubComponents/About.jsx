import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          Welcome to Rentify, your trusted partner in finding luxury real estate rentals. 
          <br />At Rentify, we specialize in providing premium rental properties that combine comfort, style, and modern living. <br />
          Whether you’re seeking a serene suburban home, a vibrant city apartment, or a lavish vacation rental, we are here to make your dream a reality.
          </div>
          <button>Buy Your Dream Stay</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
