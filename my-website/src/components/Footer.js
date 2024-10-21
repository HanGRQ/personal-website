import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-5">
      <div className="container-sm">
        <div className="row my-5">
          <div className="col-md-4">
            <img src="images/logo-2.png" className="img-fluid" alt="Logo 2" />
            <p className="py-4">
              Subscribe to newsletter to get some updates related with branding, designs and more.
            </p>
            {/* Add social media icons */}
          </div>
          <div className="col-md-3">
            {/* Add menu links */}
          </div>
          <div className="col-md-5">
            <p>Just feel free to contact if you wanna collaborate with me, or simply have a conversation.</p>
            <h3><a href="mailto:contact@yourwebsite.com" className="text-white">contact@yourwebsite.com</a></h3>
          </div>
        </div>
      </div>
      <div className="row">
        <p>©2024 Jessica. Free HTML Template by TemplatesJungle. Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
}

export default Footer;
