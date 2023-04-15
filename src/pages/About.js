import React from 'react'

const About = () => {
   const Company= "MoviesOnline Pvt Ltd"
const Address= "Hyderabad, Telangana, India"
const Phone= "XXXXXXXXX09const" 
const Email= "XXXXXX@gmail.com"
  return (
    <div className='about-section-container'>
      <h2 className='about-title'>About us</h2>
      <div className='about-container'>
        <h3>Company : {Company}</h3>
        <h3>Address : {Address}</h3>
        <h3>Phone : {Phone}</h3>
        <h3>Email : {Email}</h3>
      </div>
    </div>
  )
}

export default About