import React from 'react';
import '../mode/css/Banner.css'; // Link to your Banner.css file
import bannerImg from '../mode/images/banner.png'; // Import banner image

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div
          className="banner rounded-4 p-5"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-content text-white py-5 my-5">
            <h1 className="display-1">Jessica <br /> Kobessi</h1>
          </div>
          <div className="row text-uppercase bg-black rounded-4 p-3 mt-5">
            <div className="col-md-3">
              <div className="d-flex align-items-center gap-4">
                <h2 className="display-2 text-light">12</h2>
                <p className="text-light-emphasis m-0 ls-4">Years of <br /> experience</p>
              </div>
            </div>
            {/* Add other columns for satisfied clients, employees, etc. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
