import React from 'react';
import '../mode/css/Portfolio.css'; // Link to your Portfolio.css file
import illustration1 from '../mode/images/illustration-1.jpg';
import illustration2 from '../mode/images/illustration-2.jpg';
// Continue importing other illustrations

const Portfolio = () => {
  return (
    <section className="portfolio py-5">
      <div className="container">
        <div className="grid row">
          <div className="col mb-4 portfolio-item photography">
            <a href={illustration1} data-lightbox="illustration-1" data-title="illustration-1">
              <img src={illustration1} className="img-fluid rounded-4" alt="Portfolio" />
            </a>
          </div>
          <div className="col mb-4 portfolio-item illustrations">
            <a href={illustration2} data-lightbox="illustration-2" data-title="illustration-2">
              <img src={illustration2} className="img-fluid rounded-4" alt="Portfolio" />
            </a>
          </div>
          {/* Repeat for other portfolio items */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
