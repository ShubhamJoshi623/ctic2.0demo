import React from "react";
import "../Registration/index.7be29a4e.css";
import Datepicker from 'flowbite-datepicker/Datepicker';
import $ from 'jquery';
import {  Link } from "react-router-dom";

export default function Registration() {



  var defaultDate = new Date();
  var dd = String(defaultDate.getDate()).padStart(2, "0");
  var mm = String(defaultDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = defaultDate.getFullYear();
  defaultDate = mm + "/" + dd + "/" + yyyy;

  // $(".custom__datepicker").attr("placeholder", defaultDate);

  const setSelectedListItem = (e1) => {
    let currentValue = e1.target.getAttribute("data-value");
    let currentLabel = e1.target.innerHTML;
    let parentSelectButton = e1.target.offsetParent.parentElement.children[0];
    let parentSelectLabel =
      e1.target.offsetParent.parentElement.children[0].children[0];
    // assign values
    parentSelectButton.value = currentValue;
    parentSelectLabel.innerHTML = currentLabel;
  };
  function closeSelectList(e1) {
    let parentSelect = e1.target.offsetParent;
    parentSelect.classList.remove("block");
    parentSelect.classList.add("hidden");
  }

  const dropdownClick=(e)=>{
    setSelectedListItem(e);
    closeSelectList(e);
    let t = e.target.offsetParent;
    t.classList.remove("block");
     t.classList.add("hidden");
     let x = e.target.getAttribute("data-value"),
  n = e.target.innerHTML,
  o = e.target.offsetParent.parentElement.children[0],
  c = e.target.offsetParent.parentElement.children[0].children[0];
o.value = x;
 c.innerHTML = n;


  }

    // $(".custom__dropdown-options > ul li").click(function (e) {
       
    // });

 
 

//   $("#tooltip-existing-client").hover(function () {
//     console.log("hovered");
//     $(".tooltip-registration").toggle();
//   });

function MouseOver(event) {
  $(".tooltip-registration").toggle();
}
function MouseOut(event){
  $(".tooltip-registration").toggle();
}

  $(function() {
      const datepicker1 = document.getElementById('mydatepicker1');
 new Datepicker(datepicker1, {
      Date:defaultDate
  }); 

  

});
//   const datepicker1 = document.getElementById('mydatepicker1');
//  new Datepicker(datepicker1, {
//       Date:defaultDate
//   }); 


  return (
    <>
      <div className="font-open-sans bg-[#F8F8F8]">
        <div className="container max-w-[1060px] mt-[40px] mb-[158px]">
          <div className="flex flex-col">
            <header className="flex-auto">
              <div className="flex flex-row justify-between">
                <h1 className="font-montserrat text-xl font-bold  mb-6">
                  Register
                </h1>
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
            </header>
            <div className="flex flex-col">
              <p className="text-base font-semibold mb-8">
                Thank you for choosing Chicago Title as your Title Insurance
                provider, we look forward to working with you.
              </p>
              <span className="leading-[21px]">
                By registering you will have the ability to:
              </span>
              <ul role="list" className="list-disc pl-6 mb-8">
                <li>
                  Order your policies online 24 hours a day, 7 days a week
                </li>
                <li>
                  Print your policies immediately (if no additional underwriting
                  is needed)
                </li>
                <li>Track your orders (current and historic)</li>
                <li>
                  Manage your billing & account information; even pay by credit
                  card
                </li>
                <li>Receive email notifications pertaining to your order</li>
              </ul>
            </div>
            <form action="" method="get" className="flex-auto">
              <div className="client-selector mb-8 relative flex">
                <span className="sr-only">Select Client Type</span>
                <input
                  id="new_client"
                  className="custom__radio mt-1"
                  type="radio"
                  name="client_type"
                />
                <label htmlFor="new_client">I'm a new client</label>
                <input
                  id="old_client"
                  className="custom__radio mt-1"
                  type="radio"
                  name="client_type"
                  checked=""
                />
                <label htmlFor="old_client">I'm an existing client</label>
                <img
                  src="../../images/tooltip-icon.50417a30.svg"
                  id="tooltip-existing-client"
                  alt="tooltip"
                  className="ml-2 relative left-[-30px]"
                  onMouseOver={MouseOver} onMouseOut={MouseOut}
                />
                <div className="tooltip-registration absolute p-4 bg-primary-yellow-100 w-[482px] left-[385px] top-[10px]">
                  <div className="flex flex-row ">
                    <img
                      src="../../images/tooltip-icon.50417a30.svg"
                      alt="tooltip"
                      className="mr-4 self-start"
                    />
                    <p>
                      You have not ordered a policy from Chicago Title in the
                      last 5 years and therefore your account needs to be
                      reactivated.
                    </p>
                  </div>
                </div>
              </div>
              <div className="province-selector mb-8">
                <div
                  id="province-selector-label"
                  className="font-semibold mb-2"
                >
                  The province or territory you are licensed to practice law is:
                </div>
                <div className="custom__dropdown-wrapper w-[276px]">
                  <button
                    id="dropdownProvince"
                    data-dropdown-toggle="province_dropdown"
                    aria-labelledby="dropdownProvince"
                    className="custom__dropdown rounded-[2px]  px-4 py-2.5 text-center inline-flex items-center"
                    type="button"
                  >
                    <span className="current__label-value">Ontario</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="province_dropdown"
                    className="custom__dropdown-options z-10 hidden"
                  >
                    <ul aria-labelledby="dropdownProvince">
                      <li
                        tabIndex="0"
                        className="block px-4 py-2"
                        id="option-alberta"
                        data-value="alberta"
                        onClick={dropdownClick}
                      >
                        Alberta
                      </li>
                      <li
                        tabIndex="0"
                        className="block px-4 py-2"
                        id="option-bc"
                        data-value="british-columbia"
                        onClick={dropdownClick}
                      >
                        British Columbia
                      </li>
                      <li
                        tabIndex="0"
                        className="block px-4 py-2"
                        id="option-ontario"
                        data-value="ontario"
                        onClick={dropdownClick}
                      >
                        Ontario
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="form-container ">
                <header>
                  <h2 className="text-xl font-bold mt-[32px] ml-[40px] mb-[30px]">
                    Chicago Title Customer Registration Form
                  </h2>
                </header>
                <hr className="mb-[14px]" />

                <div className="mt-[32px] mx-[40px]">
                  <h3 className="font-bold mb-8">
                    Lawyer & Law Firm Information
                  </h3>
                  <h3 className="font-semibold mt-8 mb-6">
                    Preferred Language
                  </h3>
                  <div className="language-selector mb-8">
                    <input
                      id="eng"
                      className="custom__radio"
                      type="radio"
                      name="lang_type"
                    />
                    <label htmlFor="eng" className=" font-normal">
                      English
                    </label>
                    <input
                      id="fr"
                      className="custom__radio"
                      type="radio"
                      name="lang_type"
                      checked=""
                    />
                    <label htmlFor="fr" className="font-normal">
                      French
                    </label>
                  </div>
                  <hr className="mb-6" />
                </div>

                <div className="flex flex-row mx-[40px] mb-6">
                  <div className="salutations-selector mr-4">
                    <div id="salutations-selector-label" className="mb-2">
                      <label> Salutations</label>
                    </div>
                    <div className="custom__dropdown-wrapper w-[138px]">
                      <button
                        id="dropdownSalutations"
                        data-dropdown-toggle="salutations_dropdown"
                        aria-labelledby="dropdownSalutations"
                        className="custom__dropdown px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                      >
                        <span className="current__label-value">Select</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="salutations_dropdown"
                        className="custom__dropdown-options z-10 hidden divide-y"
                      >
                        <ul aria-labelledby="dropdownSalutations">
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="option-mr"
                            data-value="mr"
                          >
                            Mr.
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="option-ms"
                            data-value="ms"
                          >
                            Ms.
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="option-mrs"
                            data-value="mrs"
                          >
                            Mrs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-[234px] mr-4">
                    <label htmlFor="first_name" className="block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div className="w-[234px] mr-4">
                    <label htmlFor="middle_name" className="block mb-2">
                      Middle Name{" "}
                      <span className="font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="middle_name"
                      placeholder="Middle Name"
                    />
                  </div>
                  <div className="w-[234px] mr-4">
                    <label
                      htmlFor="last_name"
                      className="block mb-2  text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex flex-row mx-[40px] mb-6">
                  <div className="w-[482px] mr-4">
                    <label htmlFor="law_firm" className="block mb-2 ">
                      Law Firm
                    </label>
                    <input type="text" id="law_firm" placeholder="Name" />
                  </div>
                </div>
                <div className="flex flex-row mx-[40px] mb-6">
                  <div className="w-[482px] mr-4">
                    <label htmlFor="address" className="block mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Start typing an address, e.g. 123 Yonge..."
                      className="mb-2"
                      required=""
                    />
                    <a
                      href="#"
                      className="mt-2 link link__underlined link outline-secondary-blue
                                    focus-within:outline-secondary-blue
                                    focus-visible:outline-secondary-blue
                                    focus:outline-secondary-blue
                                    hover:decoration-0"
                    >
                      Enter address manually...
                    </a>
                  </div>
                  <div className="w-[138px] mr-4">
                    <label htmlFor="unit_num" className="block mb-2">
                      Unit
                    </label>
                    <input type="text" id="unit_num" placeholder="Unit#" />
                  </div>
                </div>
                <div className="flex flex-row mx-[40px] mb-6">
                  <div className="w-[150px] mr-4">
                    <label htmlFor="phone_number" className="block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone_num"
                      placeholder="000 000 0000"
                    />
                  </div>
                  <div className="w-[90px] mr-4">
                    <label
                      htmlFor="ext_num"
                      className="block font-semibold mb-2"
                    >
                      Ext.
                    </label>
                    <input type="text" id="ext_num" placeholder="0000" />
                  </div>
                  <div className="w-[150px] mr-4">
                    <label htmlFor="fax_num" className="block mb-2">
                      Fax <span className="font-normal">(Optional)</span>
                    </label>
                    <input type="text" id="fax_num" placeholder="0000000" />
                  </div>
                  <div className="w-[388px] mr-4">
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input type="email" id="email" placeholder="0000000" />
                  </div>
                </div>
                <div className="flex flex-row mx-[40px] mb-6 new-client">
                  <div className="w-[482px] mr-4 ">
                    <label htmlFor="realestate_num" className="block mb-2">
                      Number of Real Estate Lawyers in Firm
                    </label>
                    <input
                      type="text"
                      id="realestate_num"
                      className="w-[90px]"
                      placeholder="000 000 0000"
                    />
                  </div>
                </div>

                <div className="flex-col new-client">
                  <div className="residential-selector mx-[40px] mb-8">
                    <div id="residential-selector-label" className="mb-1">
                      <label htmlFor="">
                        Approximate number of residential real estate
                        transaction per month:
                      </label>
                    </div>
                    <div className="custom__dropdown-wrapper w-[138px]">
                      <button
                        id="dropdownResidential"
                        data-dropdown-toggle="residential_dropdown"
                        aria-labelledby="dropdownResidential"
                        className="custom__dropdown rounded-[2px]  px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                      >
                        <span className="current__label-value">Select</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="residential_dropdown"
                        className="custom__dropdown-options z-10 hidden"
                      >
                        <ul aria-labelledby="dropdownResidential">
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="rd__option-one"
                            data-value="option-one"
                          >
                            Please select
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="rd__option-two"
                            data-value="option-two"
                          >
                            Please select
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="rd__option-three"
                            data-value="option-three"
                          >
                            Please select
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="commercial-selector mx-[40px] mb-8">
                    <div id="province-selector-label" className="mb-2">
                      <label>
                        Approximate number of commercial real estate transaction
                        per month
                      </label>
                    </div>
                    <div className="custom__dropdown-wrapper w-[138px]">
                      <button
                        id="dropdownCommerical"
                        data-dropdown-toggle="commerical_dropdown"
                        aria-labelledby="dropdownCommerical"
                        className="custom__dropdown rounded-[2px]  px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                      >
                        <span className="current__label-value">Select</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="commerical_dropdown"
                        className="custom__dropdown-options z-10 hidden"
                      >
                        <ul aria-labelledby="dropdownCommerical">
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="cmd__option-one"
                            data-value="option-one"
                          >
                            Please Select
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="cmd__option-two"
                            data-value="option-two"
                          >
                            Please Select
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="cmd__option-three"
                            data-value="three"
                          >
                            Please Select
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="applicant-selector mx-[40px] mb-8">
                    <div id="dedicated-selector-label" className="mb-1">
                      <label htmlFor="" className="mb-2">
                        % of Applicant’s Practice Dedicated to Real Estate{" "}
                      </label>
                    </div>
                    <div className="custom__dropdown-wrapper w-[138px]">
                      <button
                        id="dropdownDedicated"
                        data-dropdown-toggle="dedicated_dropdown"
                        aria-labelledby="dropdownDedicated"
                        className="custom__dropdown rounded-[2px]  px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                      >
                        <span className="current__label-value">Select</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="dedicated_dropdown"
                        className="custom__dropdown-options z-10 hidden"
                      >
                        <ul aria-labelledby="dropdownDedicated">
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="option-alberta"
                            data-value="alberta"
                          >
                            Please select
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="option-bc"
                            data-value="british-columbia"
                          >
                            Please select
                          </li>
                          <li
                            tabIndex="0"
                            className="block px-4 py-2"
                            id="option-ontario"
                            data-value="ontario"
                          >
                            Please select
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mx-[40px] mb-6">
                  <div className="w-[388px] mr-4">
                    <label htmlFor="referral" className="block mb-2">
                      Referred to CTIC by{" "}
                      <span className="font-normal">(Optional)</span>
                    </label>
                    <input type="text" id="referral" placeholder="Name" />
                  </div>
                </div>
                <div className="flex flex-col mb-6 mx-[40px] title-insurance ">
                  <header className="mb-2">
                    <span
                      role="header"
                      className="text-neutrals-black font-semibold"
                    >
                      Current Title Insurance Supplier(s)
                    </span>
                  </header>
                  <div className="flex flex-row ">
                    <div className="flex items-center mr-8">
                      <input
                        id="fct-checkbox"
                        type="checkbox"
                        value="fct"
                        name="title-insurance-suppliers"
                        className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                      />
                      <label
                        htmlFor="fct-checkbox"
                        className="ml-2 font-normal"
                      >
                        FCT
                      </label>
                    </div>
                    <div className="flex items-center mr-8">
                      <input
                        id="stewart-checkbox"
                        type="checkbox"
                        value="stewart"
                        name="title-insurance-suppliers"
                        className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                      />
                      <label
                        htmlFor="stewart-checkbox"
                        className="ml-2 font-normal"
                      >
                        Stewart
                      </label>
                    </div>
                    <div className="flex items-center mr-8">
                      <input
                        id="title-plus-checkbox"
                        type="checkbox"
                        value="title-plus"
                        name="title-insurance-suppliers"
                        className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                      />
                      <label
                        htmlFor="title-plus-checkbox"
                        className="ml-2 font-normal"
                      >
                        Title Plus
                      </label>
                    </div>
                    <div className="flex items-center mr-8">
                      <input
                        id="none-checkbox"
                        type="checkbox"
                        value="none"
                        name="title-insurance-suppliers"
                        className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                      />
                      <label
                        htmlFor="none-checkbox"
                        className="ml-2 font-normal"
                      >
                        None
                      </label>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="flex flex-col new-client mx-[40px] mb-6 mt-[14px]">
                  <header className="my-2 mb-8">
                    <h3 className="font-bold">
                      List all Real Estate Clerks/Assistants with you/your firm
                    </h3>
                  </header>
                  <div className="flex flex-row ">
                    <div className="salutations-selector mr-4">
                      <div id="salutations-selector-label" className="mb-2">
                        <label> Salutations</label>
                      </div>
                      <div className="custom__dropdown-wrapper w-[138px]">
                        <button
                          id="dropdownSalutationsClerks"
                          data-dropdown-toggle="salutationsClerks_dropdown"
                          aria-labelledby="dropdownSalutationsClerks"
                          className="custom__dropdown px-4 py-2.5 text-center inline-flex items-center"
                          type="button"
                        >
                          <span className="current__label-value">Select</span>
                          <svg
                            className="w-4 h-4 ml-2"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id="salutationsClerks_dropdown"
                          className="custom__dropdown-options z-10 hidden divide-y"
                        >
                          <ul aria-labelledby="dropdownSalutationsClerks">
                            <li
                              tabIndex="0"
                              className="block px-4 py-2"
                              id="scoption-mr"
                              data-value="mr"
                            >
                              Mr.
                            </li>
                            <li
                              tabIndex="0"
                              className="block px-4 py-2"
                              id="scoption-ms"
                              data-value="ms"
                            >
                              Ms.
                            </li>
                            <li
                              tabIndex="0"
                              className="block px-4 py-2"
                              id="scoption-mrs"
                              data-value="mrs"
                            >
                              Mrs.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="w-[234px] mr-4">
                      <label htmlFor="first_name" className="block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="cl_first_name"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div className="w-[234px] mr-4">
                      <label htmlFor="cl_middle_name" className="block mb-2">
                        Middle Name{" "}
                        <span className="font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="cl_middle_name"
                        placeholder="Middle Name"
                      />
                    </div>
                    <div className="w-[234px] mr-4">
                      <label
                        htmlFor="cl_last_name"
                        className="block mb-2  text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="cl_last_name"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mx-[40px] new-client mb-6">
                  <header className="my-2">
                    <h3 className="font-semibold">Years of Service</h3>
                  </header>

                  <div className="flex flex-row ">
                    <div className="w-[90px] mr-4">
                      <label htmlFor="years_service" className="block mb-2">
                        Years
                      </label>
                      <input type="text" id="years_service" placeholder="0" />
                    </div>

                    <div className="w-[90px] mr-4">
                      <label htmlFor="month_service" className="block mb-2">
                        Month
                      </label>
                      <input type="text" id="month_service" placeholder="00" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mx-[40px] new-client">
                  <div className="w-[150px] mr-4">
                    <label htmlFor="c_phone_number" className="block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="c_phone_number"
                      placeholder="000 000 0000"
                    />
                  </div>

                  <div className="w-[388px] mr-4">
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input type="email" id="email" placeholder="email" />
                  </div>
                </div>

                <hr className="my-6 new-client" />

                <div className="flex flex-col mx-[40px] new-client">
                  <div className="flex flex-row ">
                    <div className="salutations-selector mb-6 mr-4">
                      <div id="salutations-selector-label" className="mb-2">
                        <label> Salutations </label>
                      </div>
                      <div className="custom__dropdown-wrapper w-[138px]">
                        <button
                          id="dropdownSalutations1"
                          data-dropdown-toggle="salutations_dropdown"
                          aria-labelledby="dropdownSalutations1"
                          className="custom__dropdown px-4 py-2.5 text-center inline-flex items-center"
                          type="button"
                        >
                          <span className="current__label-value">Select</span>
                          <svg
                            className="w-4 h-4 ml-2"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id="salutations_dropdown1"
                          className="custom__dropdown-options z-10 hidden divide-y"
                        >
                          <ul aria-labelledby="dropdownSalutations1">
                            <li
                              tabIndex="0"
                              className="block px-4 py-2"
                              id="option-mr1"
                              data-value="mr"
                            >
                              Mr.
                            </li>
                            <li
                              tabIndex="0"
                              className="block px-4 py-2"
                              id="option-ms1"
                              data-value="ms"
                            >
                              Ms.
                            </li>
                            <li
                              tabIndex="0"
                              className="block px-4 py-2"
                              id="option-mrs1"
                              data-value="mrs"
                            >
                              Mrs.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="w-[234px] mr-4">
                      <label htmlFor="first_name1" className="block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name1"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div className="w-[234px] mr-4">
                      <label htmlFor="middle_name1" className="block mb-2">
                        Middle Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="middle_name1"
                        placeholder="Middle Name"
                      />
                    </div>
                    <div className="w-[234px] mr-4">
                      <label htmlFor="last_name1" className="block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name1"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mx-[40px] new-client mb-6">
                  <div className="flex flex-row ">
                    <div className="w-[90px] mr-4">
                      <label htmlFor="years_service1" className="block mb-2">
                        Years
                      </label>
                      <input type="text" id="years_service1" placeholder="0" />
                    </div>

                    <div className="w-[90px] mr-4">
                      <label htmlFor="month_service1" className="block mb-2">
                        Month
                      </label>
                      <input type="text" id="month_service1" placeholder="00" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mx-[40px] new-client">
                  <div className="w-[150px] mr-4">
                    <label htmlFor="phone_number1" className="block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone_number1"
                      placeholder="000 000 0000"
                    />
                  </div>

                  <div className="w-[388px] mr-4">
                    <label htmlFor="email2" className="block mb-2">
                      Email
                    </label>
                    <input type="email" id="email2" placeholder="email" />
                  </div>
                </div>

                <div className="new-client relative">
                  <button
                    type="text"
                    className="btn__secondary px-4 py-2 absolute right-10 top-5 flex w-[90px]"
                  >
                    <img
                      src="/plus-icon.2896278b.svg"
                      alt="CTIC Logo"
                      className="mr-3"
                    />
                    Add
                  </button>
                </div>

                <hr className="new-client mt-[42px]" />

                <div className="flex mx-[40px]  flex-col my-6 ">
                  <header className="my-2 mb-20">
                    <h3 className="font-bold">
                      Practice Procedures & Internal Controls
                    </h3>
                  </header>
                  <ul
                    role="list"
                    className="questionnaire__list space-y-4 list-inside"
                  >
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px]"
                          id="question1"
                        >
                          1. Do you personally meet with all clients at the time
                          of signing and verify their identity through valid
                          photo ID?
                        </div>
                        <div
                          className="response flex flex-row items-center"
                          aria-labelledby="question1"
                          role="application"
                        >
                          <input
                            id="q1_yes"
                            className="custom__radio"
                            type="radio"
                            name="question1"
                          />
                          <label htmlFor="q1_yes">Yes</label>
                          <input
                            id="q1_no"
                            className="custom__radio"
                            type="radio"
                            name="question1"
                          />
                          <label htmlFor="q1_no">No</label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px]"
                          id="question2"
                        >
                          2. Do you outsource document preparation and/or
                          registration to a person or entity not in your office
                          or under your direct supervision?
                        </div>
                        <div
                          className="response flex flex-col"
                          aria-labelledby="question2"
                          role="application"
                        >
                          <div className="flex flex-row">
                            <input
                              id="q2_yes"
                              className="custom__radio"
                              type="radio"
                              name="question2"
                            />
                            <label htmlFor="q2_yes">Yes</label>
                            <input
                              id="q2_no"
                              className="custom__radio"
                              type="radio"
                              name="question2"
                            />
                            <label htmlFor="q2_no">No</label>
                          </div>
                          <div className="flex flex-col new-client-hide">
                            <p
                              id="standard_error_help"
                              className="mt-2 text-error-red font-semibold mb-1"
                            >
                              Please provide full particulars of the
                              arrangement.
                            </p>
                            <label htmlFor="message" className="sr-only">
                              Your message
                            </label>
                            <textarea
                              id="message"
                              rows="4"
                              className="size__l"
                              placeholder="Write something"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px]"
                          id="question3"
                        >
                          3. Has a mortgage lender declined to allow you to act
                          for one or more of their mortgage financings?
                        </div>
                        <div
                          className="response flex flex-row items-center"
                          aria-labelledby="question3"
                          role="application"
                        >
                          <input
                            id="q3_yes"
                            className="custom__radio"
                            type="radio"
                            name="question3"
                          />
                          <label htmlFor="q3_yes">Yes</label>
                          <input
                            id="q3_no"
                            className="custom__radio"
                            type="radio"
                            name="question3"
                          />
                          <label htmlFor="q3_no">No</label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px]"
                          id="question4"
                        >
                          4. Has a title insurer ever notified you (informally
                          or formally) of their decision not to accept your
                          title insurance business?
                        </div>
                        <div
                          className="response flex flex-row items-center"
                          aria-labelledby="question4"
                          role="application"
                        >
                          <input
                            id="q4_yes"
                            className="custom__radio"
                            type="radio"
                            name="question4"
                          />
                          <label htmlFor="q4_yes">Yes</label>
                          <input
                            id="q4_no"
                            className="custom__radio"
                            type="radio"
                            name="question4"
                          />
                          <label htmlFor="q4_no">No</label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px]"
                          id="question5"
                        >
                          5. Has a Bar Society undertaken disciplinary action
                          against you, or have you been disbarred or suspended
                          for disciplinary reasons?
                        </div>
                        <div
                          className="response flex flex-row items-center"
                          aria-labelledby="question5"
                          role="application"
                        >
                          <input
                            id="q5_yes"
                            className="custom__radio"
                            type="radio"
                            name="question5"
                          />
                          <label htmlFor="q5_yes">Yes</label>
                          <input
                            id="q5_no"
                            className="custom__radio"
                            type="radio"
                            name="question5"
                          />
                          <label htmlFor="q5_no">No</label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px]"
                          id="question6"
                        >
                          6. In the course of any audit of your practice in the
                          past 15 years, has a Bar Society identified any
                          infractions in relation to your or your firm’s trust
                          accounting?
                        </div>
                        <div
                          className="response flex flex-row items-center"
                          aria-labelledby="question6"
                          role="application"
                        >
                          <input
                            id="q6_yes"
                            className="custom__radio"
                            type="radio"
                            name="question6"
                          />
                          <label htmlFor="q6_yes">Yes</label>
                          <input
                            id="q6_no"
                            className="custom__radio"
                            type="radio"
                            name="question6"
                          />
                          <label htmlFor="q6_no">No</label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px]"
                          id="question7"
                        >
                          7. Have you been turned down in the past 15 years for
                          E&O liability insurance coverage or have your premiums
                          increased during this time as a result of any E&O
                          related matter?
                        </div>
                        <div
                          className="response flex flex-row items-center"
                          aria-labelledby="question7"
                          role="application"
                        >
                          <input
                            id="q7_yes"
                            className="custom__radio"
                            type="radio"
                            name="question7"
                          />
                          <label htmlFor="q7_yes">Yes</label>
                          <input
                            id="q7_no"
                            className="custom__radio"
                            type="radio"
                            name="question7"
                          />
                          <label htmlFor="q7_no">No</label>
                        </div>
                      </div>
                    </li>
                    <li className="new-client">
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px] w-[538px]"
                          id="question8"
                        >
                          8. Date Called to the Bar?
                        </div>
                        <div
                          className="response flex flex-row items-center gap-4"
                          aria-labelledby="question8"
                          role="application"
                        >
                          <div className="custom__dropdown-wrapper w-[138px]">
                            <h3 className="font-bold mb-2">Month</h3>
                            <button
                              id="dropdownMonth"
                              data-dropdown-toggle="month_dropdown"
                              aria-labelledby="dropdownMonth"
                              className="custom__dropdown rounded-[2px]  px-4 py-2.5 text-center inline-flex items-center"
                              type="button"
                            >
                              <span className="current__label-value">
                                Select
                              </span>
                              <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </button>
                            <div
                              id="month_dropdown"
                              className="custom__dropdown-options z-10 hidden"
                            >
                              <ul aria-labelledby="dropdownMonth">
                                <li
                                  tabIndex="0"
                                  className="block px-4 py-2 dropdownlist"
                                  id="option-January"
                                  data-value="January"
                                >
                                  January
                                </li>
                                <li
                                  tabIndex="0"
                                  className="block px-4 py-2 dropdownlist"
                                  id="option-february"
                                  data-value="february"
                                >
                                  February
                                </li>
                                <li
                                  tabIndex="0"
                                  className="block px-4 py-2 dropdownlist"
                                  id="option-March"
                                  data-value="March"
                                >
                                  March
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="custom__dropdown-wrapper w-[138px]">
                            <h3 className="font-bold mb-2">Year</h3>
                            <button
                              id="dropdownYear"
                              data-dropdown-toggle="year_dropdown"
                              aria-labelledby="dropdownYear"
                              className="custom__dropdown rounded-[2px]  px-4 py-2.5 text-center inline-flex items-center"
                              type="button"
                            >
                              <span className="current__label-value">
                                Select
                              </span>
                              <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </button>
                            <div
                              id="year_dropdown"
                              className="custom__dropdown-options z-10 hidden"
                            >
                              <ul aria-labelledby="dropdownyear">
                                <li
                                  tabIndex="0"
                                  className="block px-4 py-2 dropdownlist"
                                  id="option-January"
                                  data-value="January"
                                >
                                  January
                                </li>
                                <li
                                  tabIndex="0"
                                  className="block px-4 py-2 dropdownlist"
                                  id="option-february"
                                  data-value="february"
                                >
                                  February
                                </li>
                                <li
                                  tabIndex="0"
                                  className="block px-4 py-2 dropdownlist"
                                  id="option-March"
                                  data-value="March"
                                >
                                  March
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex space-x-4">
                        <div
                          className="questionnaire font-semibold max-w-[538px] w-full flex"
                          id="question9"
                        >
                          <span className="new-client-hide">8. </span>
                          <span className="new-client">9.</span>Which
                          province(s) are you or have you practiced law in?
                        </div>
                        <div
                          className="response grid grid-cols-4"
                          aria-labelledby="question9"
                          role="application"
                        >
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="ab-checkbox"
                              type="checkbox"
                              value="AB"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="ab-checkbox" className="ml-2">
                              AB
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="bc-checkbox"
                              type="checkbox"
                              value="BC"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="bc-checkbox" className="ml-2">
                              BC
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="mb-checkbox"
                              type="checkbox"
                              value="MB"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="mb-checkbox" className="ml-2">
                              MB
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="nb-checkbox"
                              type="checkbox"
                              value="NB"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="nb-checkbox" className="ml-2">
                              NB
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="nl-checkbox"
                              type="checkbox"
                              value="NL"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="nl-checkbox" className="ml-2">
                              NL
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="ns-checkbox"
                              type="checkbox"
                              value="NS"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="ns-checkbox" className="ml-2">
                              NS
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="nt-checkbox"
                              type="checkbox"
                              value="NT"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="nt-checkbox" className="ml-2">
                              NT
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="nu-checkbox"
                              type="checkbox"
                              value="NU"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="nu-checkbox" className="ml-2">
                              NU
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="on-checkbox"
                              type="checkbox"
                              value="ON"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="on-checkbox" className="ml-2">
                              ON
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="pe-checkbox"
                              type="checkbox"
                              value="PE"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="pe-checkbox" className="ml-2">
                              PE
                            </label>
                          </div>
                          <div className="flex items-center mr-[36px]">
                            <input
                              id="qc-checkbox"
                              type="checkbox"
                              value="QC"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="qc-checkbox" className="ml-2">
                              QC
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="sk-checkbox"
                              type="checkbox"
                              value="SK"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="sk-checkbox" className="ml-2">
                              SK
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="yt-checkbox"
                              type="checkbox"
                              value="YT"
                              name="provinces"
                              className="w-4 h-4 custom__checkbox custom__checkbox-multiple pl-2"
                            />
                            <label htmlFor="yt-checkbox" className="ml-2">
                              YT
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="question__item flex flex-row space-x-4 space-y-4 pb-6 mb-4">
                    <div
                      className="questionnaire my-4 max-w-[538px]"
                      id="question10"
                    >
                      <span className="font-semibold">
                        Preferred Payment Method (for Residential and Commercial
                        Title, Tax and other CTIC Services)
                      </span>
                      <span className="block">
                        *A representative from our accounting department will
                        contact you
                      </span>
                    </div>
                    <div
                      className="response flex flex-col"
                      aria-labelledby="question10"
                      role="application"
                    >
                      <div className="flex flex-row items-center">
                        <input
                          id="cc_ctic"
                          value="cc_ctic"
                          className="custom__radio"
                          type="radio"
                          name="payment_method"
                        />
                        <label htmlFor="cc_ctic">
                          Credit Card Administered by CTIC*
                        </label>
                      </div>
                      <div className="flex flex-row items-center">
                        <input
                          id="eft"
                          value="eft"
                          className="custom__radio"
                          type="radio"
                          name="payment_method"
                        />
                        <label htmlFor="eft">
                          Electronic Funds Transfer (EFT)*
                        </label>
                      </div>
                      <div className="flex flex-row items-center">
                        <input
                          id="cc_sa"
                          className="custom__radio"
                          type="radio"
                          name="payment_method"
                        />
                        <label htmlFor="cc_sa">
                          Credit Card Self-Administered
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question__item flex flex-row space-x-4 py-5">
                    <div
                      className="questionnaire max-w-[538px] w-full"
                      id="question11"
                    >
                      <span className="font-semibold">
                        Monthly Accounting Statements
                      </span>
                    </div>
                    <div
                      className="response flex flex-col"
                      aria-labelledby="question11"
                      role="application"
                    >
                      <div className="flex flex-row items-center">
                        <input
                          id="firm"
                          value="1"
                          className="custom__radio"
                          type="radio"
                          name="statement"
                        />
                        <label htmlFor="firm">To be issued by Firm</label>
                      </div>
                      <div className="flex flex-row items-center">
                        <input
                          id="lawyer"
                          value="2"
                          className="custom__radio"
                          type="radio"
                          name="statement"
                        />
                        <label htmlFor="lawyer">
                          To be issued by Lawyer(s)
                        </label>
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="forward_email"
                          className="block mt-[17px] mb-2 font-semibold semibold"
                        >
                          To be forwarded to the following email address
                        </label>
                        <input
                          type="email"
                          id="forward_email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="question__item flex flex-row py-5">
                    <div
                      className="questionnaire my-4 max-w-[538px] w-full"
                      id="question12"
                    >
                      <span className="font-semibold">
                        Additional Information Section
                      </span>
                    </div>
                    <div
                      className="response flex flex-col"
                      aria-labelledby="question12"
                      role="application"
                    >
                      <label htmlFor="additional_info" className="sr-only">
                        Additional Comments
                      </label>
                      <textarea
                        id="additional_info"
                        className="size__l"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                  </div>
                  <div className="additional__acknowledgement max-w-[814px] mb-6">
                    <header>
                      <h3 className="font-bold mb-2">
                        Application Acknowledgement
                      </h3>
                    </header>
                    <p>
                      I acknowledge that the information above will be used for
                      the purpose of becoming a Chicago Title Insurance Company
                      (“Chicago Title”) client. I hereby authorize Chicago Title
                      to share and verify this information with the applicable
                      organizations/companies noted within this application, in
                      writing or otherwise. I acknowledge that Chicago Title may
                      contact the applicable parties to verify/update this
                      information. Chicago Title reserves the right to cancel a
                      customer’s status based on additional information
                      regarding a customer’s practice. I understand that I am
                      required to adhere to Chicago Title’s search guidelines
                      and other underwriting requirements and will implement
                      procedures within the firm to ensure that all staff is
                      following same.
                    </p>
                  </div>

                  {/* <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-autohide id="mydatepicker1" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div> */}
                  <div className="flex flex-row mb-6">
                    <div className="datepicker relative">
                      <input
                      id="mydatepicker1"
                        datepicker
                        type="text"
                        className="custom__datepicker bg-white border w-full p-2.5"
                        placeholder="mm/dd/yyyy"
                      />
                      <div className="datepicker__icon absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <svg
                          aria-hidden="true"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2142_5044)">
                            <path
                              d="M13.7979 2.48755H3.02058C2.17027 2.48755 1.48096 3.14881 1.48096 3.96451V14.3032C1.48096 15.1189 2.17027 15.7802 3.02058 15.7802H13.7979C14.6482 15.7802 15.3375 15.1189 15.3375 14.3032V3.96451C15.3375 3.14881 14.6482 2.48755 13.7979 2.48755Z"
                              stroke="#595959"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.4888 1.0105V3.96442"
                              stroke="#595959"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M5.33008 1.0105V3.96442"
                              stroke="#595959"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M1.48096 6.91846H15.3375"
                              stroke="#595959"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clippath id="clip0_2142_5044">
                              <path
                                d="M0 1C0 0.447715 0.447715 0 1 0H16.4091V16.7907H0.999999C0.447714 16.7907 0 16.343 0 15.7907V1Z"
                                fill="white"
                              ></path>
                            </clippath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-[42px]">
                    <span className="font-bold">
                      *By pressing “Submit”, I confirm that the information
                      provided is complete and accurate.
                    </span>
                    <div className="buttons">
                      <button
                        type="button"
                        className="text-secondary-red bg-[transparent] rounded-[2px] px-5 py-2.5 mr-2 mb-2 
                                        hover:bg-[#ECECEC]
                                        focus:ring-4 focus:ring-transparent focus:bg-[#F8F8F8;] 
                                        outline-transparent
                                        "
                      >
                        Clear
                      </button>
                      <button
                        id="registration_submit"
                        type="button"
                        className="btn__primary rounded-[2px] px-5 py-2.5 mr-2 mb-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
