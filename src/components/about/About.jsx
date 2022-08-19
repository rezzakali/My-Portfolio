import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about" className="container-fluid">
      <hr />
      <br />
      <br />
      <h1 className="text-center m-4">About</h1> <br />
      <br />
      <div className="row" id="aboutPage">
        <div className="col-sm-12 col-md-6 col-lg-6" id="imageDiv">
          <img src="Images/myImg.png" alt="" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6" id="aboutContent">
          <p>
            {' '}
            Rezzak Ali who belongs to Assam (India), he completed his graduation
            in Computer Application (BCA) from Gauhaty University (Assam) in
            2022. He is a front-end web developer, loves code and open-source
            fans!.
          </p>
          <p>
            {' '}
            He is a self-taught web developer and has a passion for learning new
            technologies. He is working as a freelancer and has a good knowledge
            of web development. He spend most of the time coding with
            outstanding project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
