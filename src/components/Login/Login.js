import React from 'react'
import '../Login/index.0626f97b.css'
import {
    BrowserRouter as Router,
    Link,
    Outlet
  } from "react-router-dom";

export default function Login() {
  return (
    <>
  
    <section>

    <div id="div1" className="flex align-middle bg-login" >
      <div className="bg-white mt-40 mb-40 max-w-login-container ml-20 w-2/4 rounded shadow-md p-login-container h-[570px]">
        <h1 className="font-semibold text-1xl mb-4">Secure Login</h1>

        <form className="flex-col border-0">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-black">Username</label>
            <input type="text" id="name" placeholder="Username" className="border-box-stroke text-gray-900 text-sm rounded-sm block w-full p-2.5 hover:border-placeholder hover:background-[#FAFAFA] 
              focus:border-placeholder focus:bg-neutral-50 focus:ring-transparent"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="block mb-2 font-semibold text-black">
                Password
            </label>
            <div className="login__error mb-2 hidden">
              <img className="fex self-start mt-1" src="../../images/alert-circle.cd312933.svg" alt="Alert Icon"/>
              <p className="ml-2 font-semibold text-secondary-red">
                Sorry you are having issues logging in, please email us at <a className="underline" href="mailto:register@ctic.ca"> register@ctic.ca </a> and we will be more than happy to assist.
              </p>
            </div>

            <input type="password" id="password" className="password__input block w-full p-2.5 border-box-stroke text-gray-900 text-sm rounded-sm 
              hover:border-placeholder hover:background-[#FAFAFA] 
              focus:border-placeholder focus:bg-neutral-50 focus:ring-transparent" placeholder="Password" required=""/>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-[22px] h-[22px] custom__checkbox
              "/>
            </div>
            
            <label htmlFor="remember" className="ml-2 font-semibold text-black">Remember me 
                <a href="../../pages/forgot-password/index.html" className="link__underlined text-secondary-blue-link ml-4 outline-secondary-blue 
                focus-visible:border-transparent;
                ">Forgot Password</a>
            </label>
          </div>

          <button id="btn-login" type="button" className="btn__primary bg-primary-yellow w-full py-3">Login</button>
        </form>

        <div className="flex flex-row gap-2 mt-4">
          <span  className="bg-box-stroke self-center"> </span>
          <p className="text-center font-semibold text-box-stroke">OR</p>
          <span  className="bg-box-stroke self-center"> 
        </span>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
          <div>
            <button type="button"  className="w-full py-2 border btn__secondary"><Link to="/registration">Register</Link></button>
          </div>
          <div>
            <button type="button" className="w-full py-2 border btn__secondary"><Link to="/quickregister">Quick Register</Link></button>
          </div>
        </div>
      </div>
    </div>

    </section>

    </>
  )
}
