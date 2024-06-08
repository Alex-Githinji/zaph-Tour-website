import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Foooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>contact us</h3>
          <p>Email:info@gmail.com</p>
          <p>phone +254792832908</p>
          <p>Adress : Nairobi</p>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul>
            <li>
              {" "}
              <a href="">Home</a>
            </li>
            <li>
              {" "}
              <a href="">Contact us</a>
            </li>
            <li>
              {" "}
              <a href=""></a>Services
            </li>
            <li>
              {" "}
              <a href=""></a>products
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <label htmlFor>subsciribe to our newsletter</label>
          <input
            type="text"
            id="email"
            className="name"
            placeholder="enter-email"
          ></input>
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
