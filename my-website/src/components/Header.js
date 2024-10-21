import React from 'react';
import '../mode/css/Header.css'; // Ensure Header.css is correctly linked
import logo from '../mode/images/logo.png'; // Import logo image

const Header = () => {
  return (
    <header id="top" className="position-sticky top-0 start-0" style={{ zIndex: 10 }}>
      <nav className="navbar bg-white fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center g-4">
            <a className="navbar-brand d-flex" href="index.html">
              <img src={logo} className="img-fluid" id="logo" alt="Jessica logo" />
            </a>
            <div className="icon px-5">
              {/* Social icons will go here */}
              <a href="#" className="text-decoration-none">
                <svg className="skype" width="24" height="24">
                  <use xlinkHref="#skype"></use>
                </svg>
              </a>
              {/* Repeat for other icons */}
            </div>
          </div>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span className="navabar-toggler-icon">
              <svg className="text-primary menu" width="32" height="32">
                <use xlinkHref="#menu"></use>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
