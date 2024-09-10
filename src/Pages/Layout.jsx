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
    </>
  );
};

export default Layout;
