import React,{useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronDown } from "react-icons/io5";
import axios from "axios";
const Home = () => {
   const apiUrl = "https://66e1816ac831c8811b554088.mockapi.io/api/salon/SalonNames"
   const [data, setData] = useState([]);
   useEffect(()=>{
      axios.get(apiUrl)
         .then((res)=>{
            setData(res.data)
            console.log(res.data )
         })
   },[])

    // Home Page Slider 1
    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1099,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    // Home Page Slider 2
    const slider2 ={
       slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    responsive: [{
          breakpoint: 1099,
          settings: {
             slidesToShow: 4,
          }
       },
       {
          breakpoint: 1024,
          settings: {
             slidesToShow: 2,
          }
       },
       {
          breakpoint: 600,
          settings: {
             slidesToShow: 1,
          }
       }

    ]
    }

    // Home Page Slider 3
    const slider3 = {
       slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    responsive: [{
          breakpoint: 1099,
          settings: {
             slidesToShow: 4,
          }
       },
       {
          breakpoint: 1024,
          settings: {
             slidesToShow: 3,
          }
       },
       {
          breakpoint: 600,
          settings: {
             slidesToShow: 2,
          }
       }

    ]
    }


  return (
   <>     
   <section className="py-5 homepage-search-block position-relative">
   <div className="container">
      <div className="row py-lg-5">
         <div className="col-lg-7">
            <div className="homepage-search-title">
               <h1 className="mb-3 text-shadow text-gray-900 font-weight-bold">Find The Perfect Salon Services For You</h1>
               <h5 className="mb-5 text-shadow text-gray-800 font-weight-normal">Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className="homepage-search-form">
               <form className="form-noborder">
                  <div className="form-row row flex-nowrap">
                     <div className="col-lg-3 col-md-3 col-sm-12 form-group p-0">
                        <div className="location-dropdown position-relative">
                           <IoChevronDown />
                           <select className="custom-select form-control border-0 form-control-lg">
                              <option> Treatments </option>
                              <option> Hair </option>
                              <option> Nail </option>
                              <option> Face </option>
                              <option> Massage </option>
                              <option> Body </option>
                              <option> Mens </option>
                           </select>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-12 form-group p-0">
                        <div className="location-dropdown position-relative">
                           <IoChevronDown />
                           <select className="custom-select form-control border-0 form-control-lg">
                              <option> Area </option>
                              <option> Birmingham </option>
                              <option> Bradford </option>
                              <option> Brighton & Hove </option>
                              <option> Bristol </option>
                              <option> Cambridge </option>
                              <option> Mohali </option>
                           </select>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-5 col-sm-12 form-group p-0 position-relative search-bar">
                        <input type="text" placeholder="Find Services..."
                           className="form-control border-0 form-control-lg"/>
                            <button type="submit" className="btn btn-main search-btn"><i
                              className="fa fa-search"></i></button>
                     </div>
                  </div>
               </form>
            </div>
            <div className="popular">
               <ul className="p-0">
                  <li><a href="#" className="text-body-2">Hair</a></li>
                  <li><a href="#" className="text-body-2">Nail</a></li>
                  <li><a href="#" className="text-body-2">Face</a></li>
                  <li><a href="#" className="text-body-2">Massage</a></li>
               </ul>
            </div>
         </div>
         <div className="col-lg-5">
            <img className="img-fluid" src="/images/banner.svg" alt='' />
         </div>
      </div>
   </div>
</section>
<ul className="trusted-by bg-white border-bottom"> 
   <li><img src="images/brand 3.jfif"/></li>
   <li><img src="images/brand 3.jfif"/></li>
   <li><img src="images/brand 3.jfif"/></li>
   <li><img src="images/brand 3.jfif"/></li>
   <li><img src="images/brand 3.jfif"/></li>
</ul>

<div className="freelance-projects bg-white py-5">
   <div className="container">
   <Slider {...settings} className="row freelance-slider">
   <div className="col">
         <div className="freelancer">
           <img src="images/salon1.webp" alt="Salon 1" />
           <div className="d-flex justify-content-start align-items-start flex-column p-2">
             <h5>
               Best Salon
               <span> New York</span>
             </h5>
             <img src="images/5 star.png" alt="5 stars" />
           </div>
         </div>
       </div>
       <div className="col">
         <div className="freelancer">
           <img src="images/salon2.webp" alt="Salon 2" />
           <div className="d-flex justify-content-start align-items-start flex-column p-2">
             <h5>
               Best Salon
               <span> New York</span>
             </h5>
             <img src="images/5 star.png" alt="5 stars" />
           </div>
         </div>
       </div>
       <div className="col">
         <div className="freelancer">
           <img src="images/salon3.webp" alt="Salon 3" />
           <div className="d-flex justify-content-start align-items-start flex-column p-2">
             <h5>
               Best Salon
               <span> New York</span>
             </h5>
             <img src="images/5 star.png" alt="5 stars" />
           </div>
         </div>
       </div>
       <div className="col">
         <div className="freelancer">
           <img src="images/salon1.webp" alt="Salon 1" />
           <div className="d-flex justify-content-start align-items-start flex-column p-2">
             <h5>
               Best Salon
               <span> New York</span>
             </h5>
             <img src="images/5 star.png" alt="5 stars" />
           </div>
         </div>
       </div>
       <div className="col">
         <div className="freelancer">
           <img src="images/salon2.webp" alt="Salon 2" />
           <div className="d-flex justify-content-start align-items-start flex-column p-2">
             <h5>
               Best Salon
               <span> New York</span>
             </h5>
             <img src="images/5 star.png" alt="5 stars" />
           </div>
         </div>
       </div>
 
</Slider>
   </div>
 </div>

<section className="py-5">
   <div className="view_slider recommended">
      <div className="container">
         <div className="row">
            
            <div className="col-lg-12">
               <h3>Recently Viewed & More</h3>
               <Slider {...slider2}  className="view recent-slider recommended-slider">
                  <div>
                     <a href="product-detail.html">
                        <img className="img-fluid" src="images/fav1.webp" />
                     </a>
                     <div className="inner-slider">
                        <div className="inner-wrapper">
                           <div className="d-flex align-items-center">
                              <span className="seller-image">
                                  <img className="img-fluid" src="images/DP.webp" alt='' />
                              </span>
                              <span className="seller-name">
                                 <a href="profile.html">Hair Cut</a>
                                 <span className="level hint--top level-one-seller">
                                    Lorem Salon
                                 </span>
                              </span>
                           </div>
                           <h3>Best Hair Cut Service Provided</h3>
                           <div className="content-info">
                              <div className="rating-wrapper">
                                 <span className="gig-rating text-body-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                       height="15">
                                       <path fill="currentColor"
                                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                       </path>
                                    </svg>
                                    5.0
                                    <span>(7)</span>
                                 </span>
                              </div>
                           </div>
                           <div className="footer">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                              <div className="price">
                                 <a href="#">
                                    Starting At <span> $1,205</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <a href="product-detail.html">
                        <img className="img-fluid" src="images/fav2.webp" />
                     </a>
                     <div className="inner-slider">
                        <div className="inner-wrapper">
                           <div className="d-flex align-items-center">
                              <span className="seller-image">
                                  <img className="img-fluid" src="images/DP.webp" alt='' />
                              </span>
                              <span className="seller-name">
                                 <a href="profile.html">Hair Cut</a>
                                 <span className="level hint--top level-one-seller">
                                    Lorem Salon
                                 </span>
                              </span>
                           </div>
                           <h3>Best Hair Cut Service Provided</h3>
                           <div className="content-info">
                              <div className="rating-wrapper">
                                 <span className="gig-rating text-body-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                       height="15">
                                       <path fill="currentColor"
                                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                       </path>
                                    </svg>
                                    5.0
                                    <span>(7)</span>
                                 </span>
                              </div>
                           </div>
                           <div className="footer">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                              <div className="price">
                                 <a href="#">
                                    Starting At <span> $1,205</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <a href="product-detail.html">
                        <img className="img-fluid" src="images/fav3.webp" />
                     </a>
                     <div className="inner-slider">
                        <div className="inner-wrapper">
                           <div className="d-flex align-items-center">
                              <span className="seller-image">
                                  <img className="img-fluid" src="images/DP.webp" alt='' />
                              </span>
                              <span className="seller-name">
                                 <a href="profile.html">Hair Cut</a>
                                 <span className="level hint--top level-one-seller">
                                    Lorem Salon
                                 </span>
                              </span>
                           </div>
                           <h3>Best Hair Cut Service Provided</h3>
                           <div className="content-info">
                              <div className="rating-wrapper">
                                 <span className="gig-rating text-body-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                       height="15">
                                       <path fill="currentColor"
                                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                       </path>
                                    </svg>
                                    5.0
                                    <span>(7)</span>
                                 </span>
                              </div>
                           </div>
                           <div className="footer">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                              <div className="price">
                                 <a href="#">
                                    Starting At <span> $1,205</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <a href="product-detail.html">
                        <img className="img-fluid" src="images/fav1.webp" />
                     </a>
                     <div className="inner-slider">
                        <div className="inner-wrapper">
                           <div className="d-flex align-items-center">
                              <span className="seller-image">
                                  <img className="img-fluid" src="images/DP.webp" alt='' />
                              </span>
                              <span className="seller-name">
                                 <a href="profile.html">Hair Cut</a>
                                 <span className="level hint--top level-one-seller">
                                    Lorem Salon
                                 </span>
                              </span>
                           </div>
                           <h3>Best Hair Cut Service Provided</h3>
                           <div className="content-info">
                              <div className="rating-wrapper">
                                 <span className="gig-rating text-body-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                       height="15">
                                       <path fill="currentColor"
                                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                       </path>
                                    </svg>
                                    5.0
                                    <span>(7)</span>
                                 </span>
                              </div>
                           </div>
                           <div className="footer">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                              <div className="price">
                                 <a href="#">
                                    Starting At <span> $1,205</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <a href="product-detail.html">
                        <img className="img-fluid" src="images/fav2.webp" />
                     </a>
                     <div className="inner-slider">
                        <div className="inner-wrapper">
                           <div className="d-flex align-items-center">
                              <span className="seller-image">
                                  <img className="img-fluid" src="images/DP.webp" alt='' />
                              </span>
                              <span className="seller-name">
                                 <a href="profile.html">Hair Cut</a>
                                 <span className="level hint--top level-one-seller">
                                    Lorem Salon
                                 </span>
                              </span>
                           </div>
                           <h3>Best Hair Cut Service Provided</h3>
                           <div className="content-info">
                              <div className="rating-wrapper">
                                 <span className="gig-rating text-body-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                       height="15">
                                       <path fill="currentColor"
                                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                       </path>
                                    </svg>
                                    5.0
                                    <span>(7)</span>
                                 </span>
                              </div>
                           </div>
                           <div className="footer">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                              <div className="price">
                                 <a href="#">
                                    Starting At <span> $1,205</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </Slider>
            </div>
         </div>
      </div>
   </div>
</section>
<div className="services-wrapper bg-white py-5">
   <div className="container">
      <h2>Popular Professional Services</h2>
      <Slider {...slider3} className="row service-slider">
         <div className="col">
            <div className="service">
               <img src="images/service1.webp"/>
               <h3>Hair Service</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service2.webp"/>
               <h3>Quality Service Provided</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service1.webp"/>
               <h3>Hair Service</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service2.webp"/>
               <h3>Quality Service Provided</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service1.webp"/>
               <h3>Hair Service</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service2.webp"/>
               <h3>Quality Service Provided</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service1.webp"/>
               <h3>Hair Service</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service2.webp"/>
               <h3>Quality Service Provided</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service1.webp"/>
               <h3>Hair Service</h3>
            </div>
         </div>
         <div className="col">
            <div className="service">
               <img src="images/service2.webp"/>
               <h3>Quality Service Provided</h3>
            </div>
         </div>
      </Slider>
   </div>
</div>

<div className="testi-wrap py-5 ">
   <div className="container">
      <div className="testimonial">
         <div className="video-modal">
            <div className="picture-wrapper">
               <img src="images/salonvideo.webp"/>
            </div>
         </div>
         <div className="text-content">
            <p>"Being a small but growing brand, we have to definitely do a lot more with less. And when you want to
               create a business bigger than yourself, you’re going to need help. And that’s what Suwa
               does"
            </p>
            <span>Tim and Dan Joo, Co-founders</span>
            
         </div>
      </div>
   </div>
</div>
<div>
   <div className="get-started">
      <div className="content">
         <h2>Enroll Your Buisness Today</h2>
         <p>We've got you covered for all your business needs</p>
         <a href="#" className="c-btn c-fill-color-btn">Get Started</a>
      </div>
   </div>
</div>
 </>
  )
}

export default Home