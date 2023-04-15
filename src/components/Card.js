import React from "react";
import moment from "moment";
import "../card.css";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Card = ({ movies }) => {
  return (
    <div>
      <div className="cards-section-container">
        {movies.result &&
          movies.result.length > 0 &&
          movies.result.map((movie, index) => {
            const {
              title,
              genre,
              stars,
              director,
              pageViews,
              poster,
              voting,
              releasedDate,
              language,
            } = movie;
            const date = moment(releasedDate).format("D MMM");
            return (
              <div className="cards-section-container-wrapper">
                <div key={title} className="card-container">
                  <div className="voting-container-outer">
                    <div className="voting-container">
                      <VscTriangleUp />
                      <p>{voting}</p>
                      <VscTriangleDown />
                    </div>
                    <p>Votes</p>
                  </div>
                  <div className="image-container">
                    <img src={poster} alt={title} />
                  </div>
                  <div className="card-details-container">
                    <div className="details-container">
                      <p>{title}</p>
                      <div className="details-container-inner">
                        {" "}
                        <span>Genre:</span>
                        <div className="details-container-inner-answer"> {genre}</div>
                      </div>
                      <div className="details-container-inner">
                        <span>Director:</span>
                        <div className="details-container-inner-answer">
                          {director.map((name) => {
                            return <div>{name}</div>;
                          })}
                        </div>
                      </div>
                      <div className="details-container-inner">
                        <span>Starring: </span>
                        <div className="details-container-inner-answer">
                          {stars.map((star) => {
                            return <div>{star}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="language-details-container">
                      <div>Mins</div>
                      <div> |{language}| </div>
                      <div>{date}</div>
                    </div>
                    <div className="views-details-container">
                      <div>Views {pageViews}</div>
                      <div>| Voted by {voting} People</div>
                    </div>
                  </div>
                </div>
                <div className="cards-btn">watch trailer</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
