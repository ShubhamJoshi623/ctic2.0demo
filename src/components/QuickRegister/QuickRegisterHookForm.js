import React, { useState, useEffect } from "react";
import "../QuickRegister/index.0827da48.css";
import { Link } from "react-router-dom";
import PasswordStrengthIndicator from "./PasswordstrengthIndicator";
import axios, { formToJSON } from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { QuickRegistervalidationSchema } from "../../schemas/QuickRegisterSchema";
import CustomSelect from "../shared/CustomSelect";

let renderCount = 0;

export default function QuickRegisterHookForm() {
  renderCount++;

  const options = [
    { label: "Select Province", value: "0" },
    { value: "ON", label: "Ontario" },
    { value: "AB", label: "Alberta" },
    { value: "BC", label: "British Columbia" },
    { value: "QC", label: "Quebec" },
    { value: "NL", label: "NewFound Land" },
    { value: "MB", label: "Manitoba" },
  ];

  useEffect(() => {
    const response = async () => {
      let result = await axios.post(
        "/api/CTICQuestionsAdmin/ReadUnifiedQuestions",
        {
          RequestObject: {
            FileID: 437349,
            LanguageCode: "en-CA",
          },
        }
      );
      alert(JSON.stringify(result.data));
    };
    // response();
  }, []);

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

  const onSubmit = async (test) => {
    console.log("🚀 ~ file: TestingComp.js:14 ~ onSubmit ~ test", test);
    let response = await axios.post(
      "https://my-json-server.typicode.com/ShubhamJoshi623/DemoServer/posts",
      { test }
    );
    alert(JSON.stringify(response));
    console.log(response);
  };

  const {
    register,
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firmname: "",
      firstname: "",
      middlename: "",
      lastname: "",
      phonenumber: "",
      ext: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
    },
    resolver: yupResolver(QuickRegistervalidationSchema),
  });

  const Onchange = (e) => {
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
      <div className="font-sans bg-[#F8F8F8] ">
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
              <button
                className="text-white float-right bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                disabled
              >
                Render Count : {renderCount}
              </button>
            </header>

            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
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
                  value="English"
                  {...register("language_type", { required: true })}
                />
                <label htmlFor="english_language">English</label>
                <input
                  id="french_language"
                  className="custom__radio"
                  type="radio"
                  name="language_type"
                  value="French"
                  {...register("language_type", { required: true })}
                />
                <label htmlFor="french_language">French</label>

                <span className="text-red-600">
                  {errors.language_type && errors.language_type.message}
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
                      id="law_firm"
                      {...register("firmname")}
                      name="firmname"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                    />
                    <span className="text-red-600">
                      {errors.firmname && errors.firmname.message}
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
                      id="first_name"
                      {...register("firstname")}
                      name="firstname"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="First Name"
                    />
                    <span className="text-red-600">
                      {errors.firstname && errors.firstname.message}
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
                      id="last_name"
                      {...register("middlename")}
                      name="middlename"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Middle Name"
                    />
                    <span className="text-red-600">
                      {errors.middlename && errors.middlename.message}
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
                      name="lastname"
                      {...register("lastname")}
                      id="last_name"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last Name"
                    />
                    <span className="text-red-600">
                      {errors.lastname && errors.lastname.message}
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
                      name="phonenumber"
                      {...register("phonenumber")}
                      id="phone_num"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="000 000 0000"
                    />
                    <span className="text-red-600">
                      {errors.phonenumber && errors.phonenumber.message}
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
                      name="ext"
                      {...register("ext")}
                      id="ext_num"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0000"
                    />
                    <span className="text-red-600">
                      {errors.ext && errors.ext.message}
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
                      name="email"
                      id="email"
                      {...register("email")}
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0000000"
                    />
                    <span className="text-red-600">
                      {errors.email && errors.email.message}
                    </span>
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
                      className="custom__dropdown "
                      name="Province"
                      {...register("Province")}
                    >
                      <option>ON</option>
                      <option>AB</option>
                      <option>BC</option>
                      <option>MB</option>
                      <option>QC</option>
                    </select>
                  </div>
                </div>

                <Controller
                  control={control}
                  name="provinceSelect"
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <CustomSelect
                      onBlur={onBlur} // notify when input is touched
                      onChange={onChange} // send value to hook form
                      checked={value}
                      inputRef={ref}
                      value={value}
                      name="provinceSelect"
                      options={options}
                    />
                  )}
                />
                <span className="text-red-600">
                  {errors.provinceSelect && errors.provinceSelect.message}
                </span>

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
                      name="username"
                      type="text"
                      id="username"
                      {...register("username")}
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Username"
                    />
                    <span className="text-red-600">
                      {errors.username && errors.username.message}
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
                      name="password"
                      type="password"
                      id="password_quickregister"
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Password"
                      {...register("password", {
                        onChange: (e) => {
                          Onchange(e);
                        },
                      })}
                    />
                    <span className="text-red-600">
                      {errors.password && errors.password.message}
                    </span>

                    <label
                      htmlFor="confirmpassword"
                      className="block mt-6 mb-2 font-semibold text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      name="confirmpassword"
                      type="password"
                      id="password"
                      {...register("confirmpassword")}
                      className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Confirm Password"
                    />
                    <span className="text-red-600">
                      {errors.confirmpassword && errors.confirmpassword.message}
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
