import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default function ForgotPassword() {
  return (
    <>
    
<div class="bg-neutral-100">
    
    
    <div id="div1" class="flex  align-middle bg-login" >
        <div class=" bg-white mt-40 mb-40 max-w-login-container ml-20 w-2/4 rounded shadow-md p-login-container">

            <div class="flex justify-end mb-3">
                <Link class="font-semibold outline-neutrals-black flex px-4 py-2 rounded-sm
                hover:bg-[#F8F8F8]  focus:bg-[#F8F8F8]" to="/">
                    <img role="presentation" aria-hidden="true" class="mr-4" src="../../images/arrow-left.321fea51.svg" alt="back arrow"/>
                    Back</Link>
            </div>

            <h1 class="font-semibold text-1xl mb-4">Forgot your Password?</h1>

            <h3 class="font-semibold">I have trouble logging in, where can I get help? </h3>

            <p class=" my-4">If you are having trouble logging in or any other issue with the system, please click here to contact the Internet and Technology department.</p>


            <form class="flex-col">
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-bold text-black">Email Address</label>
                    <input type="text" id="forgot-email" placeholder="email@email.com" class="border-box-stroke  text-gray-900 text-sm rounded-sm block w-full p-2.5 
                    hover:border-placeholder hover:background-[#FAFAFA]
                    focus:border-placeholder focus:bg-neutral-50 focus:ring-transparent"/>
                </div>

                <button disabled="" id="btn__send" type="button" class="w-full py-3 btn__primary">Send</button>
                
                <p class="email__alert hidden font-semibold text-secondary-burgundy mt-4">Reset password link has been sent to your email.</p>
            </form>

  
        </div>

    </div>
    
   

</div>




    </>
  )
}
