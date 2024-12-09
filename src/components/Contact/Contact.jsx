import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Just Sent An Message Our Representatives Will Contact You Shortle</p>
        <div className="container">
          <img src="/contact.jpg" alt="about"/>
          <div className="content">
              <h3>Connect To Us</h3>
              <div>
                <p>Phone</p>
                <span>+91 9496180153</span>
              </div>
              <div>
                <p>Email</p>
                <span>ayamonhashim44@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>Ayamon House DownHill Po Malappuram</span>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
