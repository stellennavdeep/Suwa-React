import React from 'react'
import ContactMap from '../Components/ContactMap'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";

const Contact = () => {
  return (
    <>
    <section className="section-padding bg-dark py-5 inner-header inner-banner">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <h1 className="mt-0 mb-3 text-white">Contact Us</h1>
                  <div className="breadcrumbs">
                     <p className="mb-0 text-white"><a className="text-white" href="#">Home</a>  /  <span className="text-success">Contact Us</span></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <section className="py-5 bg-white">
         <div className="container">
            <div className="row touch-info-wrapper">
               <div className="col-lg-6 col-md-4 p-0">
                  <div className='touch-info text-white'>
                        <div className='d-flex flex-column justify-content-start align-items-center p-5 px-2'>
                            <figure><IoLocationOutline /></figure>
                            <h6 className="fw-bold"> Address</h6>
                            <p className='w-75 m-auto'>36-38, St Stephens Street, Norwich, NR1 3SH</p>
                        </div>
                        <div className='d-flex flex-column justify-content-start align-items-center p-5 px-2'> 
                            <figure><FiPhone /> </figure>
                            <h6 className="fw-bold">Phone</h6>
                            <p>+44 01603 625325</p>
                        </div>
                        <div className='d-flex flex-column justify-content-start align-items-center p-5 px-2'>    
                            <figure><HiOutlineMail /></figure>
                            <h6 className="fw-bold">Email</h6>
                            <p>Suwa@gmail.com</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center p-5 px-2 contact-links'>  
                            <h3 className='fw-bold fs-5 text-uppercase'>Contact Us:</h3>  
                            
                            <div className="footer-social mb-4 d-flex flex-column w-100 mt-2">
                                <div className='d-flex justify-content-center gap-3 align-items-center'>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>

                        
                  </div>
                  
                  
                  
                 
               </div>
               <ContactMap/>
            </div>
         </div>
      </section>
     
      <section className="py-5 contact-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-7 col-md-12 section-title text-left mb-4">
                 
               </div>
               <div className="col-lg-5 col-md-12 section-title text-left mb-4 contact-form">
                  <h2 className='mb-3'>Contact Us</h2>
                  <form name="sentMessage" className="col-lg-12 col-md-12" id="contactForm" noValidate>
                     <div className="control-group form-group mb-4">
                        <div className="controls">
                           <label className='mb-1 ps-1'>Full Name <small className="text-danger">*</small></label>
                           <input type="text" placeholder="Ex.Mandeep Osahan" className="form-control" id="name" required data-validation-required-message="Please enter your name."/>
                           <p className="help-block"></p>
                        </div>
                     </div>
                     <div className="form-row mb-4">
                        <div className="control-group col form-group mb-4">
                           <div className="controls">
                              <label className='mb-1 ps-1'>Phone Number <small className="text-danger">*</small></label>
                              <input type="tel" placeholder="1-800-643-4500" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number."/>
                           </div>
                        </div>
                        <div className="control-group col form-group mb-4">
                           <div className="controls">
                              <label className='mb-1 ps-1'>Email Address <small className="text-danger">*</small></label>
                              <input type="email" placeholder="youremail@gmail.com" className="form-control" id="email" required data-validation-required-message="Please enter your email address."/>
                           </div>
                        </div>
                     </div>
                     <div className="control-group form-group">
                        <div className="controls">
                           <label className='mb-1 ps-1'>Message <small className="text-danger">*</small></label>
                           <textarea placeholder="Hi there, I would like to ..." rows="4" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="999" style={{resize: "none"}}/>
                        </div>
                     </div>
                     <div id="success"></div>
                     
                     <div className="text-end mt-4">
                        <button type="submit" className="btn btn-main" id="sendMessageButton">Send Message</button>
                     </div>
                  </form>
            </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Contact