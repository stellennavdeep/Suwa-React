import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
 

  return (
    <>
     <header>
        <nav className="navbar navbar-expand-lg navbar-light topbar static-top shadow-sm bg-white osahan-nav-top px-0 p-0">
                <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100 ">
                    <a className="navbar-brand pt-3" href="index.php"><img src="images/suwaLogo.png" alt="logo" /></a>
                    <div className="top-right d-flex justify-content-center align-items-center gap-2">
                        <a href="#" className="fs-6 pr-2">For your business</a>
                        <a href="login.html" className="color-text fw-bold fs-6">Login</a>
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
                        <a className="nav-link "href="index.php" >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Hair
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Massage
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Nails
                        </a>
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
                  <a className="navbar-brand pt-3" href="index.html"><img src="images/suwaLogo.png" className="img-fluid" alt="logo" /></a>
               </div>
               <div className="mt-3">
                  <ul className="social p-0 d-flex justify-content-between w-75">
                     <li>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                     </li>
                     <li>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                     </li>
                     <li>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                     </li>
                     <li>
                        <a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                     </li>
                     <li>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="footer-list">
               <h2>About</h2>
               <ul className="list">
                  <li><a href="#">Press &amp; News</a></li>
                  <li><a href="#">Partnerships</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
               </ul>
            </div>
            <div className="footer-list">
               <h2>Support</h2>
               <ul className="list">
                  <li><a href="#">Help &amp; Support</a></li>
                  <li><a href="#">Trust &amp; Safety</a></li>
               </ul>
            </div>
            <div className="footer-list">
               <h2>Community</h2>
               <ul className="list">
                  <li><a href="#">Forum</a></li>
                  <li><a href="#">Affiliates</a></li>
                  <li><a href="#">Invite a Friend</a></li>
                  <li><a href="#">Become a Seller</a></li>
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
