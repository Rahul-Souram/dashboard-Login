import React from 'react'
import data from '../about.json';
import AboutImage from '../images/about.jpg'
import { SlideInAnimation } from '../components/SlideInAnimation';

const About = () => {
const {title, tagline, content} =data;

  return (
    <div className='container'>
      <h2 className='title'>About us</h2>
      <div className='section-container'>
      <SlideInAnimation direction="left" className='section-image'>
        <img src={AboutImage} alt={title} />
        </SlideInAnimation>
      <SlideInAnimation direction="right" className='section-container-inner'>
        <h1 className='title'>{title}</h1>
        <div  className="tagline">{tagline}</div>
        <div  className="content">{content}</div>
      </SlideInAnimation>
      </div>
    </div>
  )
}

export default About