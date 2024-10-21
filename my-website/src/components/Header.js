import React from 'react';

function Header() {
  return (
    <header id="top" className="position-sticky top-0 start-0" style={{ zIndex: 10 }}>
      <nav className="navbar bg-white fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center g-4">
            <a className="navbar-brand d-flex" href="/">
              <img src="images/logo.png" className="img-fluid" id="logo" alt="Logo" />
            </a>
            <div className="icon px-5">
              <a href="#" className="text-decoration-none">
                <svg className="skype" width="24" height="24">
                  <use xlinkHref="#skype"></use>
                </svg>
              </a>
              {/* Add other social media icons */}
            </div>
          </div>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navabar-toggler-icon">
              <svg className="text-primary menu" width="32" height="32">
                <use xlinkHref="#menu"></use>
              </svg>
            </span>
          </button>
          <div className="offcanvas offcanvas-end text-white bg-black" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white ms-3" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 p-4">
                <li className="nav-item">
                  <a className="nav-link active text-uppercase text-white" href="/">Home</a>
                </li>
                {/* Add other menu items */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
