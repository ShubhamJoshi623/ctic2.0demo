import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className="bg-header-black flex-col text-white font-sans pt-27 ">
        <div className="flex flex-row justify-start gap-12 p-footer border-b">
            <div className="footer__container mr-10">
                <img src="./images/ctic-logo-white.bf83e0e3.svg" alt="CTIC Logo"/>
            </div>
            <div className="footer__container">
                <p>   Canadian Head Office</p>
                <p>   55 Superior Boulevard</p>
                <p>   Mississauga, Ontario L5T 2X9</p>
                <p>  Phone: 1-888-868-4853</p>
                <p>  Fax:1-866-214-1953</p>
            </div>
            <div className="footer__container">
                <p>   Quebec Office</p>
                <p>   55 Superior Boulevard</p>
                <p>   Mississauga, Ontario L5T 2X9</p>
                <p>   Phone: 1-888-868-4853</p>
                <p>   Fax:1-866-214-1953</p>
            </div>
            <div className="footer__container mr-4">
                <p>  E-mail: <a href="/" className="underline focus-visible:outline-none focus:outline-none text-shadow ">info@chicagotitle.ca</a></p>
                <p> Complaints: <a href="/" className="underline focus-visible:outline-none focus:outline-none text-shadow">Complaints Handling Process</a></p>
                <p> Claims: <a href="/" className="underline focus-visible:outline-none focus:outline-none text-shadow">claims@ctic.ca</a></p>
            </div>
            <div className="footer__container ">
                <a className=" focus-visible:outline-none focus:outline-none text-shadow" href="/">Question?Need Help?</a>
            </div>
        </div>
     
        <div className="footer__copyright flex justify-between font-sans p-fc-x">
            <div className="footer__container pl-50 pb-100">
                <p>Copyright © 2020 Chicago Title Insurance Company. All Rights Reserved</p>
            </div>
            <div className="footer__container pr-8">
                <p><a className=" focus-visible:outline-none focus:outline-none text-shadow" href="/">Privacy Policy </a>| <a className=" focus-visible:outline-none focus:outline-none text-shadow" href="/">California Privacy Policy </a></p>
            </div>
        </div>
    
    </footer>
    </div>
  )
}
