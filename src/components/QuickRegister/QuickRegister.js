import React, { useState,useEffect } from "react";
import "../QuickRegister/index.0827da48.css";
import { Link } from "react-router-dom";
import Select from "react-select";
import PasswordStrengthIndicator from "./PasswordstrengthIndicator";
import axios, { formToJSON } from "axios";

export default function QuickRegister() {
    useEffect(() => {
        const response =async () => {let result=await axios.get('https://my-json-server.typicode.com/ShubhamJoshi623/DemoServer/db');
       alert(JSON.stringify(result.data));
    }

       response();

    // axios.get('https://my-json-server.typicode.com/ShubhamJoshi623/DemoServer/db')
    //     .then(response => alert(JSON.stringify(response.data)))
    //     .catch(error => {
    //         console.error('There was an error!', error);
    //     });


     }, []);

     const submitPostRequest = async (data) => {
        let response = await axios.post('https://my-json-server.typicode.com/ShubhamJoshi623/DemoServer/posts',{ data }
        
        );
       alert(JSON.stringify(response));
       console.log(response);

     };
  
    const options = [
        { value: "blues", label: "Blues" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
        { value: "test", label: "Test" },
        { value: "random", label: "Random" },
        { value: "lender", label: "Lender" },
        { value: "mortgagor", label: "Mortgagor" },
        { value: "tortgagor", label: "Tortgagor" },
        { value: "rortgagor", label: "Rortgagor" },
        { value: "eortgagor", label: "Eortgagor" },
        { value: "wortgagor", label: "Wortgagor" },
      ];


  const [Values, setValues] = useState({
    language_type: "",
    firmname: "",
    firstname: "",
    middlename: "",
    lastname: "",
    phonenumber: "",
    phonenumber: "",
    ext: "",
    username: "",
    password: "",
    confirmpassword: ""
  });

  const [focused, setFocused] = useState(false);
  const [radioBtn, setRadioBtn] = useState(null);

  //custom autocomplete-
const[display,setDisplay]= useState(false);
const[myoptions,setOptions]= useState([]);
const[search,setSearch]= useState("");

  //custom autocomplete-

//   useEffect(() => {
//     document.body.addEventListener('click', bodyClickHandler );

//     return function cleanup() {
//         window.removeEventListener('click', bodyClickHandler );
//     } 
// },[]);

const bodyClickHandler=()=>{

    setDisplay(false);
}

  const setselectitem= (item)=>{
debugger;
    setSearch(item);
    setDisplay(false);
  };


  let errorMessages = {
    ConfmPassErrorMessage: "Passwords Don't Match",
    requiredErrorMessage:"* Required"
  };

  const [passwordValidity, setPasswordValidity] = useState({
    minChar: null,
    number: null,
    specialChar: null,
    lowerCase: null,
    upperCase: null,
    websiteName: null,
  });

  const isNumberRegx = /\d/;
  const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const upperCaseRegx = /[A-Z]/;
  const LowerCaseRegx = /[a-z]/;
  const websiteNameRegex = /^((?!ctic|FNF|chicagotitle).)*$/i;

  const QuickRegisterOnSubmit = (e) => {
    handleFocus();
    e.preventDefault();
    const data = new FormData(e.target);
    let formdata = Object.fromEntries(data.entries());
    console.log(formdata);
    submitPostRequest(formdata);
  };

  const handleFocus = (params) => {
    setFocused(true);
  };


  const Onchange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
    //debugger;
    if (e.target.name == "password") validatePassword(e);
  };

  const validatePassword = (e) => {
    const passValue = e.target.value;

    setPasswordValidity({
      minChar: passValue.length >= 8 ? true : false,
      number: isNumberRegx.test(passValue) ? true : false,
      specialChar: specialCharacterRegx.test(passValue) ? true : false,
      lowerCase: LowerCaseRegx.test(passValue) ? true : false,
      upperCase: upperCaseRegx.test(passValue) ? true : false,
      websiteName: websiteNameRegex.test(passValue) ? true : false,
    });
    
  };

  return (
    <>
      <div  className="font-sans bg-[#F8F8F8] ">
        <div className="max-w-[1060px] mt-[40px] mb-[158px] m-auto rounded border border-box-stroke py-8 pl-10 pr-[50px] bg-white">
          <div className="flex flex-col ">
            <header className="flex-auto">
              <div className="flex flex-row justify-between ">
                <h1 className="text-xl font-bold  mb-6">Quick Register</h1>
                <Link
                  className="h-[40px] font-semibold outline-neutrals-black flex px-4 py-2 rounded-sm
                    hover:bg-[#F8F8F8]  focus:bg-[#F8F8F8]"
                  to="/"
                >
                  <img
                    role="presentation"
                    aria-hidden="true"
                    className="mr-4 w-[12px] h-[12px] mt-[6px]"
                    src="../../images/arrow-left.321fea51.svg"
                    alt="back arrow"
                  />
                  Back
                </Link>
              </div>

              <p className="text-base font-semibold">
                Chicago Title will require the Online Client Registration form
                to be completed prior to issuing the policy.
              </p>
              <p className="text-base font-semibold mb-6">
                <a
                  href=""
                  className="link__underlined  outline-secondary-blue
                  hover:decoration-0; mr-1
                  "
                >
                  Click Here
                </a>
                if you would like to complete the form now.
              </p>
              <span className="leading-[21px] font-semibold">
                By registering you will have the ability to:
              </span>
              <ul role="list" className="list-disc pl-6 mb-8">
                <li>
                  Order your policies online 24 hours a day, 7 days a week
                </li>
                <li>Track your orders (current and historic)</li>
                <li>Receive email notifications pertaining to your order</li>
              </ul>
<div className="container px-5 py-5 border border-gray-500 border-solid rounded-md">
<div>
    <span className="text-xl font-bold">Autocomplete from react-select library</span>
      <Select options={options}
      defaultValue={options[1]} />
    </div>

    <div>
    <span className="text-xl font-bold">Autocomplete with multi-select from react-select library</span>
    <Select
    isMulti
    defaultValue={options[1]} 
    name="colors"
    options={options}
    closeMenuOnSelect={false}
    className="basic-multi-select"
    classNamePrefix="select"
  />
    </div>
</div>

<div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
<div>
    <span className="text-xl font-bold">Custom Autocomplete</span>
     <input id="customautocomplete" onClick={()=>{setDisplay(true);}} placeholder="Type to Search" className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     value={search}
     onChange={(event)=>{setSearch(event.target.value)}}

     />
    </div>
    {display && <div className="options-container my-1 border border-gray-200 border-solid rounded-md overflow-y-scroll"> 
        {options.filter(({value})=>value.indexOf(search.toLowerCase()) > -1 ).map((v,i)=>{
return (<div onClick={()=>{setselectitem(v.value.toString(),true);}} className="option pl-2 py-2 " key={i}>
    <span>{v.label}</span>
</div>)

        })}
        </div>}

    
</div>
              <div className="flex flex-col mt-6">
                <span className="leading-[21px] font-semibold ">
                  Are you an existing client to Chicago Title?
                </span>
                <Link
                  to="/login"
                  className="btn__secondary py-[9px] px-4 w-[74px] mt-4"
                >
                  Login
                </Link>
              </div>
            </header>

            <form
              action=""
              onSubmit={QuickRegisterOnSubmit}
              method="get"
              className="flex-auto "
            >
              <div className="language-selector mt-6 mb-8">
                <label
                  htmlFor="law_firm"
                  className="block mb-2 font-semibold text-gray-900 dark:text-white"
                >
                  Preferred Language
                </label>
                <input
                  id="english_language"
                  className="custom__radio"
                  type="radio"
                  name="language_type"
                  checked={radioBtn === "English"}
                  value="English"
                  required={(radioBtn === "English").toString()}
                  onClick={() => setRadioBtn('English')}
                  focused={focused.toString()}
                />
                <label htmlFor="english_language">English</label>
                <input
                  id="french_language"
                  className="custom__radio"
                  type="radio"
                  checked={radioBtn === "French"}
                  name="language_type"
                  value="French"
                  required={(radioBtn === "French").toString()}
                  focused={focused.toString()}
                  onClick={() => setRadioBtn('French')}

                />
                <label htmlFor="french_language">French</label>

                <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>

              </div>



              <hr className="my-4" />

              <div className="form-container" style={{ border: "none" }}>

             
                <div className="flex flex-row mb-6">
                  <div className="w-[482px] mr-4">
                    <label
                      htmlFor="law_firm"
                      className="block mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Firm Name
                    </label>
                    <input
                      type="text"
                      value={Values.firmname}
                      required="true"
                      id="law_firm"
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      onChange={Onchange}
                      name="firmname"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                    />
                    <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row mb-6">
                  <div className="w-[234px] mr-4">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      value={Values.firstname}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      onChange={Onchange}
                      id="first_name"
                      name="firstname"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="First Name"
                      required="true"
                    />
                    <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>
                  </div>

                  <div className="w-[234px] mr-4">
                    <label
                      htmlFor="middle_name"
                      className="block mb-2 font-semibold  text-gray-900 dark:text-white"
                    >
                      Middle Name{" "}
                      <span className="font-normal"> (Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={Values.middlename}
                      id="last_name"
                      name="middlename"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Middle Name"
                    />
                    <span className="errorMessage">
                      {errorMessages.middleNameErrorMessage}
                    </span>
                  </div>

                  <div className="w-[234px] mr-4">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={Values.lastname}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required="true"
                      onChange={Onchange}
                      name="lastname"
                      id="last_name"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last Name"
                    />
                    <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row mb-6">
                  <div className="w-[150px] mr-4">
                    <label
                      htmlFor="phone_number"
                      className="block mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      value={Values.phonenumber}
                      name="phonenumber"
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required="true"
                      onChange={Onchange}
                      id="phone_num"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="000 000 0000"
                    />
                    <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>
                  </div>
                  <div className="w-[90px] mr-4">
                    <label
                      htmlFor="ext_num"
                      className="block mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Ext.
                    </label>
                    <input
                      type="number"
                      value={Values.ext}
                      name="ext"
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required="true"
                      onChange={Onchange}
                      id="ext_num"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0000"
                    />
                    <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>
                  </div>

                  <div className="w-[388px] mr-4">
                    <label
                      htmlFor="email"
                      className="block mb-2  text-gray-900 dark:text-white font-semibold"
                    >
                      Email<span className="font-normal"> (Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0000000"
                    />
                  </div>
                </div>

                <div className="province-selector mb-8">
                  <div
                    id="province-selector-label"
                    className="mb-1 font-semibold"
                  >
                    Province
                  </div>
                  <div className="custom__dropdown-wrapper w-[276px] ">
                    <select
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required="true"
                      onChange={Onchange}
                      className="custom__dropdown "
                    >
                      <option>Some option</option>
                      <option>Other option</option>
                      <option>Other option</option>
                      <option>Other option</option>
                      <option>Other option</option>
                    </select>
                  </div>

                  {/* <div className="custom__dropdown-wrapper w-[276px]">
                            <button id="dropdownProvince" data-dropdown-toggle="province_dropdown" aria-labelledby="dropdownProvince" className="custom__dropdown rounded-[2px]  px-4 py-2.5 text-center inline-flex items-center" type="button">
                                    <span className="current__label-value">Ontario</span> <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div id="province_dropdown" className="custom__dropdown-options z-10 hidden">
                                <ul aria-labelledby="dropdownProvince">
                                    <li tabIndex="0" className="block px-4 py-2" id="option-alberta" data-value="alberta">
                                        Alberta
                                    </li>
                                    <li tabIndex="0" className="block px-4 py-2" id="option-bc" data-value="british-columbia">
                                        British Columbia
                                    </li>
                                    <li tabIndex="0" className="block px-4 py-2" id="option-ontario" data-value="ontario">
                                        Ontario
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                </div>

                <hr className="my-6" />

                <div className="flex flex-row mb-6">
                  <div className="w-[482px] mr-4">
                    <label
                      htmlFor="username"
                      className="block mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      value={Values.username}
                      name="username"
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required="true"
                      onChange={Onchange}
                      type="text"
                      id="username"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Username"
                    />
                    <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>
                  </div>
                  <div className="w-[200px] mr-4">
                    <button className="btn__secondary py-[9px] px-4 mt-8">
                      Generate Username
                    </button>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="w-[482px] mr-4">
                    <label
                      htmlFor="password"
                      className="block mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      value={Values.password}
                      name="password"
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required="true"
                    //   required="false"
                      onChange={Onchange}
                    //  pattern={"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!ctic|FNF|chicagotitle).{8,}$"}
                    //  pattern={"^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)|(?ctic|FNF|chicagotitle)*/i$"}
                     minLength={(passwordValidity.minChar && passwordValidity.lowerCase && passwordValidity.upperCase && passwordValidity.number && passwordValidity.specialChar && passwordValidity.websiteName)?"8":"999"}
                    
                     
                      type="password"
                      id="password_quickregister"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Password"

                    />
                    <span className="errorMessage">
                      {errorMessages.requiredErrorMessage}
                    </span>

                    <label
                      htmlFor="confirmpassword"
                      className="block mt-6 mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      value={Values.confirmpassword}
                      name="confirmpassword"
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required="true"
                      onChange={Onchange}
                      type="password"
                      id="password"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Confirm Password"
                      pattern={Values.password}
                    />
                    <span className="errorMessage">
                      {errorMessages.ConfmPassErrorMessage}
                    </span>
                  </div>

                  <PasswordStrengthIndicator validity={passwordValidity} />
                </div>
              </div>

              <div className="flex flex-row justify-end mt-[42px]">
                <div className="buttons">
                  <button
                    type="button"
                    className="text-secondary-red bg-[transparent] rounded-[2px] px-5 py-2.5 mr-2 mb-2
                            hover:bg-[#ECECEC]
                            focus:ring-4 focus:ring-transparent focus:bg-[#F8F8F8;]
                            outline-transparent"
                  >
                    Clear
                  </button>
                  <button
                    id="quick_submit"
                    type="submit"
                    className="btn__primary rounded-[2px] px-5 py-2.5 mr-2 mb-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <script>//display missing password requeriment when password input value is > 0
// and remove when the input is empty
var password_quickregister = document.getElementById("password_quickregister");
password_quickregister.addEventListener("keyup", function(event) {
    if (password_quickregister.value.length == 0) {
        console.log("im empty");
        document.querySelector(".pw-item:nth-child(2)").classList.remove("pw-error");
    } else document.querySelector(".pw-item:nth-child(2)").classList.add("pw-error");
});

</script> */}
      </div>
    </>
  );
}
