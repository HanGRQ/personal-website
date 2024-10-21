import React from 'react';
import '../mode/css/Testimonials.css'; // Link to your Testimonials.css file

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h2 className="display-3 mb-5">Testimonials</h2>
        </div>
        <div className="swiper testimonial-swiper">
          <div className="swiper-wrapper">
            <div className="testimonial-card rounded-3 py-4 px-4 swiper-slide">
              <div className="text-start">
                <p>“A pellen tesque pretium feugiat vel morbi sagittis lorem habi tasse cursus.”</p>
                <h5>Kevin H.</h5>
                <p className="postd">8/20/2023</p>
              </div>
            </div>
            {/* Repeat for other testimonials */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
