import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
 

  return (
    <>
     <header>
        <nav className="navbar navbar-expand-lg navbar-light topbar static-top shadow-sm bg-white osahan-nav-top px-0 p-0">
                <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100 ">
                    <Link to={"/"} className="navbar-brand pt-3"><img src="images/suwaLogo.png" alt="logo" /></Link>
                    <div className="top-right d-flex justify-content-center align-items-center gap-2">
                        <Link to="/" className="fs-6 pr-2">For your business</Link>
                        <Link to="/login" className="color-text fw-bold fs-6">Login</Link>
                    </div>
                </div>
                </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-white osahan-nav-mid px-0 border-top">
            <div className="container">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link" >
                            Hair
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">
                            Massage
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">
                            Nails
                        </Link>
                    </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <Outlet />

    <footer className="bg-white">
      <div className="container">
         <div className="d-flex justify-content-between gap-5">
            <div className="contact-footer footer-list">
               <h2>Contact</h2>
               <div className="">
                  <Link className="navbar-brand pt-3" to="/" ><img src="images/suwaLogo.png" className="img-fluid" alt="logo" /></Link>
               </div>
               <div className="mt-3">
                  <ul className="social p-0 d-flex justify-content-between w-75">
                     <li>
                        <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                     </li>
                     <li>
                        <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                     </li>
                     <li>
                        <Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                     </li>
                     <li>
                        <Link to="/"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link>
                     </li>
                     <li>
                        <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="footer-list">
               <h2>About</h2>
               <ul className="list">
                  <li><Link to="/">Press &amp; News</Link></li>
                  <li><Link to="/">Partnerships</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Terms of Service</Link></li>
               </ul>
            </div>
            <div className="footer-list">
               <h2>Support</h2>
               <ul className="list">
                  <li><Link to="/">Help &amp; Support</Link></li>
                  <li><Link to="/">Trust &amp; Safety</Link></li>
               </ul>
            </div>
            <div className="footer-list">
               <h2>Community</h2>
               <ul className="list">
                  <li><Link to="/">Forum</Link></li>
                  <li><Link to="/">Affiliates</Link></li>
                  <li><Link to="/">Invite a Friend</Link></li>
                  <li><Link to="/">Become a Seller</Link></li>
               </ul>
            </div>
         </div>
         
      </div>
      <div className="copyright d-flex justify-content-center align-items-center">
         <p>© Copyright 2024 Suwa. All Rights Reserved</p>
      </div>
   </footer>

    </>
  );
};

export default Layout;
