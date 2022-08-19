import React from 'react';
import './Testimonial.css';

function Testimonial() {
  return (
    <div id="testimonial" className="container-fluid">
      <br />
      <br />
      <br />
      <h1 className="text-center">Testimonials</h1>
      <br />
      <br />
      <div className="row text-center" id="testimonialId">
        <div className="col-sm-12 col-md-6 com-lg-6" id="div1">
          <p className="p-4">
            I am really happy with your service, I will definitely use you
            again. Thank you for your help." -He is working with us since last 1
            year. He is very professional and very helpful and working honestly
            with us.
          </p>
          <h2 className="mr-4">Feroz Ahmed</h2>
          <h5>UI/UX Design</h5>
        </div>
        <div className="col-sm-12 col-md-6 com-lg-6" id="div2">
          <p className="p-4">
            fantastic work! I am just impressed by their service quality and
            working strategy. I hired him for the development of my online store
            and they have satisfied me to the full by delivering the exceptional
            solution. They have a great expertise, are dedicated, attentive,
            talented and care much about the client needs. Highly recommended.
          </p>
          <h2 className="mr-4">Minazur Rahman</h2>
          <h5>Web Developer</h5>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
