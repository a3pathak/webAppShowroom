import React from 'react'
import video from '../assets/pexels-zlatin-georgiev-5607650.mp4';
import logo from '../assets/WhatsApp Image 2023-01-01 at 2.17.06 PM.jpeg';
import animatedImage from '../assets/img-a.png';
import aboutImage from '../assets/about-img.png';

function main() {
  return (
    <div className="page">
      <div className="videoSection">
        <div className='main'>
          <video src={video} autoPlay loop muted />
        </div>
        <div className="container main">
          <div className="navbar">
            <img src={logo} alt="logo" className="logo" width="50px" height="50px" />
            <nav>
              <ul>
                <li><a href='home'>Home</a></li>
                <li><a href='home'>About Us</a></li>
                <li><a href='home'>Services</a></li>
                <li><a href='home'>Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col">
              <h1>HI, I'M JEETENDER</h1>
              <p>A mobile app & web developer & Digital Marketer</p>
            </div>
            <div className="col">
              <div className="card">
                <img src={animatedImage} alt="animatedImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <img src={aboutImage} alt="aboutImage" className='aboutImage' />
        <div className='aboutContent'>
          <h1>A Few Words About Me</h1>
          <p>
            I have a passion for design & technology and have been working with startup I have completed many project done of web & app Development
          </p>
        </div>
      </div>
    </div>

  )
}

export default main