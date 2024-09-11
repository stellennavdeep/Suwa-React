import { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdSwitchAccount } from "react-icons/md";
const About = () => {

  return (
    <>
         <section className="py-5 bg-dark inner-header">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <h1 className="mt-0 mb-3 text-white">About Us</h1>
                  <div className="breadcrumbs">
                     <p className="mb-0 text-white"><a className="text-white" href="#">Home</a>  /  <span className="text-success">About Us</span></p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-5 bg-white about-banner">
         <div className="container">
            <div className="row align-items-center">
               <div className="pl-4 col-lg-5 col-md-5 pr-4">
                  <img className="rounded-3 img-fluid" src="images/3575.webp" alt="Card image cap"/>
               </div>
               <div className="col-lg-6 col-md-6 pl-5 ps-3">
                  <h2 className="mb-3  ">The leading global Salon marketplace
                  </h2>
                  <h5 className="mt-2">Our Vision</h5>
                  <p>At Suwo, we believe that beauty is more than skin deep. Our vision is to create a sanctuary where clients can escape the everyday and indulge in transformative beauty experiences. We aim to set the standard in salon excellence by delivering top-notch services, innovative treatments, and an unparalleled atmosphere of relaxation and elegance.
                  </p>
                  <h5 className="mt-4">Our Goal</h5>
                  <p>Our goal is to provide a comprehensive range of salon services that cater to every client's unique needs. From chic haircuts and vibrant color treatments to rejuvenating skincare and luxurious nail care, our expert team is dedicated to enhancing your natural beauty. We strive to ensure every visit is an unforgettable experience, characterized by exceptional service, personalized attention, and a commitment to your satisfaction.</p>
               </div>
            </div>
         </div>
      </section>

      <section className="py-5">
         <div className="section-title text-center mb-5">
            <h2>What We Provide?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  {/* <div className="mt-4 mb-4"><VscAccount /></div> */}
                  <h5 className="mt-3 mb-3">Transforming Lives</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
               </div>
               <div className="col-lg-4 col-md-4">
                  {/* <div className="mt-4 mb-4"><FaRegCheckCircle /></div> */}
                  <h5 className="mb-3">Our Beginnings</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="col-lg-4 col-md-4">
                  {/* <div className="mt-4 mb-4"><MdSwitchAccount /></div> */}
                  <h5 className="mt-3 mb-3">Our Marketplace</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><i className="text-success mdi mdi-clock mdi-48px"></i></div>
                  <h5 className="mb-3">Our Instructors</h5>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked.</p>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><i className="text-success mdi mdi-sticker-emoji mdi-48px"></i></div>
                  <h5 className="mt-3 mb-3">Jobs</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
               </div>h
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><i className="text-success mdi mdi-comment-alert-outline mdi-48px"></i></div>
                  <h5 className="mt-3 mb-3">Help</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
               </div>
            </div>
         </div>
      </section>

      <section className="py-5 agents-section">
         <div className="section-title text-center mb-5">
            <h2>Trusted Agents</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  <div className="agents-card text-center">
                     <img className="img-fluid mb-4" src="images/profile.jpg" alt=""/>
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Stave Martin</h6>
                     <small>Buying Agent</small>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="agents-card text-center">
                     <img className="img-fluid mb-4" src="images/profile.jpg" alt=""/>
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Mark Smith</h6>
                     <small>Selling Agent</small>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="agents-card text-center">
                     <img className="img-fluid mb-4" src="images/profile.jpg" alt="" />
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Ryan Printz</h6>
                     <small>Real Estate Broker</small>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default About;
