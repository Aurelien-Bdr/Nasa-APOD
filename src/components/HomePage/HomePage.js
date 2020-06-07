import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="button-container">
        <Link className="button-link" to="/apod">
          <div className="cta-container">
            <div className="button">
              <div className="square-front">
                <div className="relative-box">
                  <span className="line line-top"></span>
                  <span className="line line-right"></span>
                  <span className="line line-bottom"></span>
                  <span className="line line-left"></span>
                </div>
              </div>
              <div className="square-back">
                <div className="relative-box">
                  <span className="line line-top"></span>
                  <span className="line line-right"></span>
                  <span className="line line-bottom"></span>
                  <span className="line line-left"></span>
                </div>
              </div>
              <span className="label">Discover the photo of the day</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
