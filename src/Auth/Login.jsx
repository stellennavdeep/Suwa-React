import React from 'react'
import {Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <div className="login-main overflow-hidden">
         <div className="container-fluid p-0">
            <div className="row">
                <div className="col-4 login-left p-5">
                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to={"/"}><img src="images/suwaLogo.png" className='img-fluid' alt="" /></Link>
                        <Link to={"/"}>Sign Up</Link>
                    </div>
                </div>
                <div className="col-8 login-right p-5 d-flex justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center d-flex w-100 ">
               <div className="col-lg-7 mx-auto login-wrapper">
                  <div className=" px-4">
                     <div className=" mb-4">
                        <h5 className="font-weight-bold mt-3">Welcome Back</h5>
                     </div>
                     <form action="index.html">
                        <div className="form-group">
                           <label className="mb-1">Email or Phone</label>
                           <div className="position-relative icon-form-control">
                              <i className="mdi mdi-account position-absolute"></i>
                              <input type="email" className="form-control"/>
                           </div>
                        </div>
                        <div className="form-group mt-3">
                           <label className="mb-1">Password</label>
                           <div className="position-relative icon-form-control">
                              <i className="mdi mdi-key-variant position-absolute"></i>
                              <input type="password" className="form-control"/>
                           </div>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                           <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                           <label className="custom-control-label" for="customCheck1">Remember password</label>
                        </div>
                        <button className="btn btn-success btn-block text-uppercase" type="submit"> Sign in </button>
                        <div className="text-center mt-3 border-bottom pb-3">
                           <p className="small text-muted">Or login with</p>
                           <div className="row">
                              <div className="col-6">
                                 <button type="button" className="btn btn-outline-instagram btn-block"><i className="mdi mdi-instagram"></i> Instagram</button>
                              </div>
                              <div className="col-6">
                                 <button type="button" className="btn btn-outline-facebook btn-block"><i className="mdi mdi-facebook"></i> Facebook</button>
                              </div>
                           </div>
                        </div>
                        <div className="py-3 d-flex align-item-center">
                           <a href="forgot-password.html">Forgot password?</a>
                           <span className="ml-auto"> New to Miver? <a href="register.html">Join now</a></span>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
                </div>
            </div>
            
         </div>
      </div>
    </>
  )
}

export default Login