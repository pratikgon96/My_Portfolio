import "./HeroImgStyles.css";
import React from 'react'
import introImg from "../assets/Heroimg2.jpg"
import { Link } from "react-router-dom";
function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img src={introImg} alt="introImg" className="intro-img" />
      </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE ENGINEER</p>
        <h1>Full Stack Developer</h1>
        <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
