import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../images/home.jpg";
export default function App() {
  return (
    <div className="container">
      <div className="section-container">
      <div className="section-container-inner">
      <h1 className="title">Brand Radiator</h1>
        <div className="tagline">
          Brand Radiator is a team of gallant and fearless design technologists,
          providing strategic solution made with our fingers on the pulse of
          market trends and the competitive landscape. While our digital world
          evolves and changes dynamically, the yardstick of quality work and
          people first remains constant for us.
        </div>
        <div className="content">
          Himani Mishra, C0-Founder and CEO, Brand Radiator, has been honored as
          the winner of the Digital Women Award 2018 by SheThePeople.tv,
          organized in association with Bombay Stock Exchange(BSE), Axis Bank,
          Facebook, Business Standard and ColorsTV. The award event was
          organized at the famous and historic Rotunda hall of iconic Bombay
          Stock Exchange, the Dalal Street, Mumbai on Sunday, 18th November.
          This is the largest ever womens summit and award ceremony organized by
          SheThePeople.tv aimed to celebrate and cherish the women power shining
          bright in the digital & technological space. The prestigious Digital
          Women Award recognizes Himanis unbeaten success in the digital
          marketing industry.
        </div>
        <div className="cta-btn">
          <Link to="/about">About us</Link>
        </div>
      </div>
      <div className="section-image">
        <img src={HomeImage} alt="Home" />
      </div>
      </div>
    </div>
  );
}
