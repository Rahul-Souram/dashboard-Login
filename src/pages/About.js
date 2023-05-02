import React from 'react'
import data from '../about.json';
import AboutImage from '../images/about.jpg'

const About = () => {
const {title, tagline, content} =data;

  return (
    <div className='container'>
      <h2 className='title'>About us</h2>
      <div className='section-container'>
      <div className='section-container-inner'>
        <h1 className='title'>{title}</h1>
        <div  className="tagline">{tagline}</div>
        <div  className="content">{content}</div>
      </div>
        <div className='section-image'>
        <img src={AboutImage} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default About