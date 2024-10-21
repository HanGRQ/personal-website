import React from 'react';

function Banner() {
  return (
    <section>
      <div className="container">
        <div className="banner rounded-4 p-5"
          style={{ backgroundImage: 'url(images/banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="text-content text-white py-5 my-5">
            <p className="fs-4">VFX / Graphics Head</p>
            <h1 className="display-1">Jessica <br /> Kobessi</h1>
          </div>
          <div className="row text-uppercase bg-black rounded-4 p-3 mt-5">
            {/* Add stat cards here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
