import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  
export default function Home() {
  return (
    <>
<div className="bg-neutral-100">

    <div className="flex  align-middle justify-center">
        <div className=" bg-white mt-40 mb-40 max-w-login-container ml-20 w-2/4 rounded shadow-md p-login-container">
            <h1 className="font-semibold text-1xl mb-4 text-center">Pages List</h1>

            <div className="flex flex-col gap-3">
  

    
  
               <Link to="/login" className="btn__primary w-full py-3 text-center"> Login </Link>
               <Link to="/forgotPassword" className="btn__primary w-full py-3 text-center">Forgot Password</Link>
               <Link to="/quickregister" className="btn__primary w-full py-3 text-center" >Quick Register</Link>
               <Link to="/registration" className="btn__primary w-full py-3 text-center">Registration</Link>
               <Link to="/Dashboard" className="btn__primary w-full py-3 text-center">Dashboard</Link>
                
            </div>

</div>
</div>
  </div>

    </>
  )
}
