import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Headernavbar() {
  return (
    <div>
      <header className="bg-header-black flex justify-between h-header">
        <img src="./images/ctic-logo-white.bf83e0e3.svg" alt="CTIC Logo"/>
        
        <Link to="/" className="btn__primary w-full py-3 text-center"> home </Link>

        <Link to="/login" className="btn__primary w-full py-3 text-center"> Login </Link>
               <Link to="/forgotPassword" className="btn__primary w-full py-3 text-center">Forgot Password</Link>
               <Link to="/quickregister" className="btn__primary w-full py-3 text-center" >Quick Register</Link>
               <Link to="/QuickRegisterHookForm" className="btn__primary w-full py-3 text-center" >Quick Register with React-hook-Form</Link>
               <Link to="/registration" className="btn__primary w-full py-3 text-center">Registration</Link>
               <Link to="/Dashboard" className="btn__primary w-full py-3 text-center">Dashboard</Link>
               <Link to="/TestingComp" className="btn__primary w-full py-3 text-center">Testing Component</Link>
        
        <div className="header__container flex h-full flex-row">
          <button className="btn__header bg-secondary-burgundy 
          hover:bg-secondary-burgundy-hover">
              EN/FR</button>
        </div>
        
      </header>
    </div>
  )
}
