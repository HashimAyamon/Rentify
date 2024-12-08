import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <section id="hero">
      <Carousel interval={2000} pause="hover">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner4.png"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>BE OUR GUEST</h3>
            <p>LIVE LIKE A KING IN OUR BEST HOUSES</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>EXPERIENCE LUXURY</h3>
            <p>FIND YOUR DREAM HOME WITH US</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner3.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>MAKE MEMORIES</h3>
            <p>IN THE MOST EXQUISITE LOCATIONS</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
