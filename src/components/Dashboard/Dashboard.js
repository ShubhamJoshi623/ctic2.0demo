import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="">
        <header className="bg-header-black flex justify-between h-header">
          <a href="../../index.html">
            {" "}
            <img
              src="../../images/ctic-logo-white.bf83e0e3.svg"
              alt="CTIC Logo"
            />
          </a>

          <div className="header__container flex h-full flex-row">
            <div className="relative flex align-middle mr-4">
              <input
                id="header-search"
                className="align-middle rounded-sm border-b pl-12 my-2 h-10 bg-transparent w-64 text-white font-normal font-sans hover:text-header-black  hover:bg-white focus:border-0 focus-visible:border-0 focus-visible:inset-0 border-0 focus:bg-white focus:text-header-black focus:ring-white transition ease-in-out duration-500"
                onfocus="this.value=''"
                type="search"
                value="Search by Order /"
              />

              <div className="search__container-white  flex absolute  ml-2 hover:ml-5  top-4 left-0 pointer-events-none delay-1000">
                <img src="../../images/search.acca3785.svg" alt="Seach Icon" />
              </div>

              <div className="search__container-black hidden  absolute ml-2 hover:ml-5  top-4 left-0 pointer-events-none ">
                <img
                  src="../../images/search-black.feb868a2.svg"
                  alt="Seach Icon"
                />
              </div>
            </div>

            <ul className="flex">
              <li className="bg-secondary-blue">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full px-8 py-4 text-white outline-none
                        border-[1px] border-transparent
                        focus-visible:border focus-visible:border-primary-yellow
                        focus:border focus:border-primary-yellow
                        hover:bg-secondary-blue-link
                      "
                >
                  Menu of Services
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 w-[217px] "
                >
                  <ul
                    className="py-1 text-sm text-neutrals-black w-full"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/dsa"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-[/E8F3FA] hover:text-shadow
                                focus:bg-[/E8F3FA] focus:text-shadow
                                focus-visible:outline-none
                              "
                      >
                        Quotes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-[/E8F3FA]  hover:text-shadow
                                focus:bg-[/E8F3FA] focus:text-shadow
                                focus-visible:outline-none
                              "
                      >
                        Title Insurance
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-[/E8F3FA]  hover:text-shadow
                                focus:bg-[/E8F3FA] focus:text-shadow
                                focus-visible:outline-none
                              "
                      >
                        Inquiry Order
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-[/E8F3FA]  hover:text-shadow
                                focus:bg-[/E8F3FA] focus:text-shadow
                                focus-visible:outline-none
                            "
                      >
                        ID Verification
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-[/E8F3FA]  hover:text-shadow
                                focus:bg-[/E8F3FA] focus:text-shadow
                                focus-visible:outline-none
                              "
                      >
                        PPSA
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-[/E8F3FA] hover:text-shadow
                                focus:bg-[/E8F3FA] focus:text-shadow
                                focus-visible:outline-none
                            "
                      >
                        Title/Title Off Searches
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="h-full ">
                <button
                  href="/"
                  className="btn__header bg-secondary-burgundy h-header hover:bg-secondary-burgundy-hover hover:border-transparent"
                >
                  EN/FR
                </button>
              </li>

              <li className="bg-secondary-green">
                <button
                  id="dropdownNavbarLink-2"
                  data-dropdown-toggle="dropdownNavbar-2"
                  className="flex items-center justify-between w-full px-8 py-4 text-white outline-none
                        border-[1px] border-transparent
                        focus-visible:border focus-visible:border-primary-yellow
                        focus:border focus:border-primary-yellow
                        hover:bg-secondary-green-hover 
                      "
                >
                  Lindsay
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar-2"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100  w-[187px] "
                >
                  <ul
                    className="py-1 text-sm text-neutrals-black w-full"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/"
                        className="block w-full px-4 py-2 text-neutrals-black 
                                hover:bg-primary-yellow-100 hover:text-shadow focus-visible:outline-none
                                focus:bg-primary-yellow-100 focus:text-shadow
                              "
                      >
                        Account Summary
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block w-full px-4 py-2 text-neutrals-black 
                                hover:bg-primary-yellow-100  hover:text-shadow focus-visible:outline-none
                                focus:bg-primary-yellow-100 focus:text-shadow
                              "
                      >
                        Make a payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-primary-yellow-100 hover:text-shadow focus-visible:outline-none 
                                focus:bg-primary-yellow-100 focus:text-shadow
                                "
                      >
                        Review Payments
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-primary-yellow-100 hover:text-shadow focus-visible:outline-none
                                focus:bg-primary-yellow-100 focus:text-shadow
                              "
                      >
                        Manage Contact Info
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block  w-full px-4 py-2 text-neutrals-black 
                                hover:bg-primary-yellow-100 hover:text-shadow focus-visible:outline-none
                                focus:bg-primary-yellow-100 focus:text-shadow
                              "
                      >
                        Manage Billing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block w-full mt-4 px-4 py-2 underline text-secondary-blue 
                              hover:text-shadow focus-visible:outline-none focus:text-shadow
                              "
                      >
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block w-full px-4 py-2 text-neutrals-black font-semibold
                                focus-visible:outline-none focus:text-shadow hover:text-shadow
                                "
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </header>

        <div className="flex mb-6 mx-[50px] mt-14">
          <div className="flex-col mr-6 basis-1/2">
            <h1 className="font-bold text-1xl font-montserrat">
              Welcome, Lindsay
            </h1>
            <h2 className="font-semibold text-[32px]">December 21, 2022</h2>

            <div className=" rounded border border-secondary-red text-secondary-red px-6 pt-3 pb-4 mt-2">
              <p>
                Urgent Announcement: 2022 Holidays - Our business will be closed
                for Christmas Holidays from December 22nd to January 1. All
                orders have to be picked up by December 22nd 12:00pm.
              </p>
            </div>
          </div>
          <div className="flex  basis-1/2">
            <div
              className="
                bg-secondary-yellow-dashboard flex items-center
                py-[28px] px-[22px] rounded text-center 
                border-2 border-transparent cursor-pointer
                hover:border-2 hover:border-black 
              "
            >
              <h3 className="font-semibold text-1xl mt-5">
                <span className="font-bold text-[64px] relative top-[-10px]">
                  3
                </span>
                <br />
                Needs Attention
              </h3>
            </div>

            <span className="h-[152px] border relative top-[15px]"></span>

            <div
              className="
                bg-secondary-yellow-dashboard flex items-center
                py-[28px] px-[22px] rounded text-center 
                relative border-2 border-transparent
                cursor-pointer
                hover:border-2 hover:border-black
              "
            >
              <h3 className="font-semibold text-1xl mt-5">
                <span className="font-bold text-[64px] relative top-[-10px]">
                  100
                </span>
                <br />
                Not yet submitted
              </h3>
              <span
                className="
                      block rounded-full bg-secondary-red text-white w-[22px] 
                      h-[22px] absolute leading-[22px] top-[35px] right-[35px]
                    "
              >
                4
              </span>
            </div>

            <span className="h-[152px] border relative top-[15px]"></span>

            <div
              className="
                bg-secondary-yellow-dashboard flex items-center
                py-[28px] px-[22px]
                rounded text-center border-2 border-transparent cursor-pointer
                hover:border-2 hover:border-black
                "
            >
              <h3 className="font-semibold text-1xl mt-5">
                <span className="font-bold text-[64px] relative top-[-10px]">
                  59
                </span>
                <br />
                Ready for Pickup
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-6 mb-8 mx-[50px]">
          <button
            className="
        rounded bg-accordion-bg border-t-[12px] border-secondary-blue pl-6 pr-[22px] pr- pt-4 pb-11  text-left border-b border-x border-b-transparent border-x-transparent
        hover:border-x-box-stroke hover:border-b hover:border-b-box-stroke hover:bg-white hover:border-x
        outline-box-stroke"
          >
            <h3 className="font-bold text-1xl pb-[14px] border-b border-b-neutrals-black ">
              Get a Quote
            </h3>
            <p className=" pt-4">
              Order new policies with quick turn around times
            </p>
          </button>

          <button
            className="
        rounded bg-accordion-bg border-t-[12px] border-primary-yellow pl-6 pr-[22px] pt-4 pb-11 hover:border-x text-left border-b border-x border-b-transparent border-x-transparent
        hover:border-x-box-stroke hover:border-b hover:border-b-box-stroke hover:bg-white outline-box-stroke"
          >
            <h3 className="font-bold text-1xl pb-[14px] border-b border-b-neutrals-black ">
              Title Insurance
            </h3>
            <p className=" pt-4">
              Order new policies with quick turn around times
            </p>
          </button>

          <button
            className="
        rounded bg-accordion-bg border-t-[12px] border-secondary-green pl-6 pr-[22px] pt-4 pb-11 hover:border-x text-left border-b border-x border-b-transparent border-x-transparent
         hover:border-x-box-stroke hover:border-b hover:border-b-box-stroke hover:bg-white outline-box-stroke"
          >
            <h3 className="font-bold text-1xl pb-[14px] border-b border-b-neutrals-black ">
              Inquiry Orders
            </h3>
            <p className=" pt-4">
              Order new policies with quick turn around times
            </p>
          </button>

          <button
            className="rounded bg-accordion-bg border-t-[12px] border-secondary-burgundy pl-6 pr-[22px] pt-4 pb-11 border-b border-x border-b-transparent border-x-transparent
         hover:border-x text-left hover:border-x-box-stroke hover:border-b hover:border-b-box-stroke hover:bg-white outline-box-stroke"
          >
            <h3 className="font-bold text-1xl pb-[14px] border-b border-b-neutrals-black">
              Order Status
            </h3>
            <p className=" pt-4">
              Pick up your policies and check on Order Status
            </p>
          </button>
        </div>

        <div className="mx-[50px] mb-16 ">
          <div className="bg-neutrals-black w-full pt-4 pb-[14px] pl-10 rounded-t-md">
            <p className=" text-white font-bold font-montserrat">
              Latest News & Special Announcements
            </p>
          </div>

          <div
            id="indicators-carousel"
            className="relative border border-[/D9D9D9;]"
            data-carousel="static"
          >
            <div className="relative h-[500px] overflow-hidden border border-gray-200">
              <div
                className="hidden duration-700 ease-in-out bg-white"
                data-carousel-item="active"
              >
                <div className="flex flex-flow pt-11 pb-16">
                  <div className="basis-1/4 pl-28 mr-6">
                    <h3 className="font-bold">Special Announcement</h3>
                    <p>08/31/2022</p>
                  </div>

                  <div className="basis-10/12 leading-[22px] pl-[74px] border-l border-black pr-[183px] ">
                    <p>
                      Please note that, effective July 20th, 2015, the
                      additional premium to issue a Loan Policy in favour of a
                      private lender as Insured will be $75.00 plus applicable
                      taxes.
                      <br />
                      <br />
                      For your reference, Chicago Title defines a private lender
                      as a lender that is not a Chartered Bank, Trust Company,
                      Credit Union, Insurance Company or a CMHC approved Finance
                      Company under the National Housing Act. Premiums for all
                      other title insurance products remain unchanged and
                      continue to be the best in market title insurance policy
                      pricing for your clients..Please note that, effective July
                      20th, 2015, the additional premium to issue a Loan Policy
                      in favour of a private lender as Insured will be $75.00
                      plus applicable taxes. For your reference, Chicago Title
                      defines a private lender as a lender that is not a
                      Chartered Bank, Trust Company, Credit Union, Insurance
                      Company or a CMHC approved Finance Company under the
                      National Housing Act. Premiums for all other title
                      insurance products remain unchanged and continue to be the
                      best in market title insurance policy pricing for your
                      clients..Please note that, effective July 20th, 2015, the
                      additional premium to issue a Loan Policy in favour of a
                      private lender as Insured will be $75.00 plus applicable
                      taxes. For your reference, Chicago Title defines a private
                      lender as a lender that is not a Chartered Bank, Trust
                      Company, Credit Union, Insurance Company or a CMHC
                      approved Finance Company under the National Housing Act.
                      Premiums for all other title insurance products remain
                      unchanged and continue to be the best in market title
                      insurance policy pricing for your clients.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden duration-700 ease-in-out bg-white"
                data-carousel-item=""
              >
                <div className="flex flex-flow pt-11 pb-16">
                  <div className="basis-1/4 pl-28 mr-6">
                    <h3 className="font-bold">Special Announcement 2</h3>
                    <p>09/10/2022</p>
                  </div>

                  <div className="basis-10/12 leading-[22px] pl-[74px] border-l border-black pr-[183px] ">
                    <p>
                      Please note that, effective July 20th, 2015, the
                      additional premium to issue a Loan Policy in favour of a
                      private lender as Insured will be $75.00 plus applicable
                      taxes.
                      <br />
                      <br />
                      For your reference, Chicago Title defines a private lender
                      as a lender that is not a Chartered Bank, Trust Company,
                      Credit Union, Insurance Company or a CMHC approved Finance
                      Company under the National Housing Act. Premiums for all
                      other title insurance products remain unchanged and
                      continue to be the best in market title insurance policy
                      pricing for your clients..Please note that, effective July
                      20th, 2015, the additional premium to issue a Loan Policy
                      in favour of a private lender as Insured will be $75.00
                      plus applicable taxes. For your reference, Chicago Title
                      defines a private lender as a lender that is not a
                      Chartered Bank, Trust Company, Credit Union, Insurance
                      Company or a CMHC approved Finance Company under the
                      National Housing Act. Premiums for all other title
                      insurance products remain unchanged and continue to be the
                      best in market title insurance policy pricing for your
                      clients..Please note that, effective July 20th, 2015, the
                      additional premium to issue a Loan Policy in favour of a
                      private lender as Insured will be $75.00 plus applicable
                      taxes. For your reference, Chicago Title defines a private
                      lender as a lender that is not a Chartered Bank, Trust
                      Company, Credit Union, Insurance Company or a CMHC
                      approved Finance Company under the National Housing Act.
                      Premiums for all other title insurance products remain
                      unchanged and continue to be the best in market title
                      insurance policy pricing for your clients.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hidden duration-700 ease-in-out bg-white"
                data-carousel-item=""
              >
                <div className="flex flex-flow pt-11 pb-16 mr-6">
                  <div className="basis-1/4 pl-28">
                    <h3 className="font-bold">Special Announcement 3</h3>
                    <p>04/07/2023</p>
                  </div>

                  <div className="basis-10/12 leading-[22px] pl-[74px] border-l border-black pr-[183px] ">
                    <p>
                      Please note that, effective July 20th, 2015, the
                      additional premium to issue a Loan Policy in favour of a
                      private lender as Insured will be $75.00 plus applicable
                      taxes.
                      <br />
                      <br />
                      For your reference, Chicago Title defines a private lender
                      as a lender that is not a Chartered Bank, Trust Company,
                      Credit Union, Insurance Company or a CMHC approved Finance
                      Company under the National Housing Act. Premiums for all
                      other title insurance products remain unchanged and
                      continue to be the best in market title insurance policy
                      pricing for your clients..Please note that, effective July
                      20th, 2015, the additional premium to issue a Loan Policy
                      in favour of a private lender as Insured will be $75.00
                      plus applicable taxes. For your reference, Chicago Title
                      defines a private lender as a lender that is not a
                      Chartered Bank, Trust Company, Credit Union, Insurance
                      Company or a CMHC approved Finance Company under the
                      National Housing Act. Premiums for all other title
                      insurance products remain unchanged and continue to be the
                      best in market title insurance policy pricing for your
                      clients..Please note that, effective July 20th, 2015, the
                      additional premium to issue a Loan Policy in favour of a
                      private lender as Insured will be $75.00 plus applicable
                      taxes. For your reference, Chicago Title defines a private
                      lender as a lender that is not a Chartered Bank, Trust
                      Company, Credit Union, Insurance Company or a CMHC
                      approved Finance Company under the National Housing Act.
                      Premiums for all other title insurance products remain
                      unchanged and continue to be the best in market title
                      insurance policy pricing for your clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-10 bottom-5 left-1/2 ">
              <button
                type="button"
                className="indicators w-3 h-3 rounded-full bg-gray-indicators hover:bg-[/628396] focus-visible:outline-none"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="indicators w-3 h-3 rounded-full bg-gray-indicators hover:bg-[/628396] focus-visible:outline-none"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="indicators w-3 h-3 rounded-full bg-gray-indicators hover:bg-[/628396] focus-visible:outline-none"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>
            <button
              type="button"
              className="bg-white absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none 
        hover:bg-[/F8F8F8]
        "
              data-carousel-prev=""
            >
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 
            bg-transparent 
            group-hover:bg-white/50
              hover:border-black hover:border
             focus:border-black focus:border
             focus-visible:border-black focus-visible:border
             group-focus:ring-0 group-focus:ring-transparent  group-focus:outline-none "
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5  sm:w-6 sm:h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="bg-white absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none 
        hover:border-black hover: hover:bg-[/F8F8F8]"
              data-carousel-next=""
            >
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-transparent
            group-hover:bg-white/50  hover:border-black hover:border
            focus:border-black focus:border
            focus-visible:border-black focus-visible:border
           group-focus:ring-transparent  group-focus:outline-none "
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5  sm:w-6 sm:h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
