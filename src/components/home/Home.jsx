import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container-fluid" id="home">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="homeImageSection">
            <img src="/Images/myImg.png" alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="homeAboutSection">
            <h4>
              Hi!, I&apos;m <span className="brandName">Rezzak Ali</span>
            </h4>
            <h1>I build value through design</h1>
            <p>
              I&apos;m a <span> front-end </span> web developer and a freelancer
              who loves code.
            </p>
            <button
              className="btn btn-secondary"
              type="button"
              id="LearnMoreButton"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
