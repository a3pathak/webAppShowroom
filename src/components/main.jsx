import React from 'react'
import video from '../assets/pexels-zlatin-georgiev-5607650.mp4';
import image from '../assets/download.jpg';

function main() {
  return (
    <div className='main'>
        {/* <video src={video} autoPlay loop muted/> */}
        <div className='navBar'>
          <div className='icon'>
            <img src={image} alt="abc" />
          </div>
          <div className='list'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="containt">
            <div className='subContaint'>
                <h1>HI, I'M JEETENDER</h1>
                <p>A mobile & web Developer & Digital Marketer</p>
            </div>
            <div className='image'>
                <img src={image} alt='animated'/>
            </div>
        </div>
    </div>
  )
}

export default main