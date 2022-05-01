import React from 'react'
import './about.css';
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
         <div className='about-info'>
         Hey, I'm 
         <span className='info-name'> Aditya Roshan Patro</span>,pursuing B.E (Hons.) from <span className='college-info'>BITS Pilani</span>.
         I'm proficient in programming, <br />interested in Software development and Product Management.<br/>I'm passionate about technologies,market, product, business strategies.
         </div>
         <div className='about-photo'>
            <img src={require('../../../assets/linkedin_img.png')} className='picture'></img>
         </div>
      </div>
      <div className='about-bottom'>
         this is contacts
      </div>
    </div>
  )
}

export default About