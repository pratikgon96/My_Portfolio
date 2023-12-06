import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMobile,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>3 No. Sankari Pukur, Burdwan, West Bengal.</p>
              <p>India.</p>
            </div>
          </div><br />
          <div className="phone">
            <FaMobile
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>8967763126</p>
            </div>
          </div><br />
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>gon.pratik@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          <p>
            Myself Pratik Gon. A Full Stack Software Developer. Currently
            Working @Prolifics INC. I enjoy exploring new development & design
            challanges.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
