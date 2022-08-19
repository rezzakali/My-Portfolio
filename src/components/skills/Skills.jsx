import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div id="skills">
      <br />
      <br />
      <br />
      <div className="row text-center">
        <h3>Skills & Exprience</h3>
        <p>
          The scope of my work is a large of the front-end: single page
          application,animation,css/js and other work based on HTML/CSS/JS.
        </p>
        <p>I also know mostly popular open-source systems like WordPress.</p>
      </div>
      <hr />
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src="Images/web.png" alt="images" id="experienceImage" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="progress_wrapper">
            <div className="dashboard">
              <div>
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52" />
                  <circle className="meter-1" cx="57" cy="57" r="52" />
                </svg>
                <h6>HTML</h6>
              </div>
              <div>
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52" />
                  <circle className="meter-2" cx="57" cy="57" r="52" />
                </svg>
                <h6>CSS</h6>
              </div>
              <div>
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52" />
                  <circle className="meter-3" cx="57" cy="57" r="52" />
                </svg>
                <h6>JS</h6>
              </div>
            </div>
          </div>
          <div className="progress_wrapper">
            <div className="dashboard">
              <div>
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52" />
                  <circle className="meter-4" cx="57" cy="57" r="52" />
                </svg>
                <h6>React.js</h6>
              </div>
              <div>
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52" />
                  <circle className="meter-5" cx="57" cy="57" r="52" />
                </svg>
                <h6>Node.js</h6>
              </div>
              <div>
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52" />
                  <circle className="meter-6" cx="57" cy="57" r="52" />
                </svg>
                <h6>WordPress</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
