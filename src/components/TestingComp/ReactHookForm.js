import React from "react";
import { useFieldArray, useForm,Controller } from "react-hook-form";
import { signUpSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;



export default function ReactHookForm() {
  renderCount++;
  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      password: "",
      name:"",
      amount:""
    },
    resolver: yupResolver(signUpSchema),
  });
  //  console.log("🚀 ~ file: ReactHookForm.js:18 ~ ReactHookForm ~ errors", errors)

  

  const onSubmit = (test) => {
    console.log("🚀 ~ file: TestingComp.js:14 ~ onSubmit ~ test", test);
  };

  return (
    <div>
      <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
        <span className="text-xl font-bold">React-hook-form</span>
        <button
          className="text-white float-right bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          disabled
        >
          Render Count : {renderCount}
        </button>

        <div className="container p-login-container max-w-login-container w-2/4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6 mw-20">
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("fullname", { required: true })}
                id="fullname"
                name="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="fullname"
              />
              {errors.fullname && (
                <p className="text-red-600">{errors.fullname.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="phonenumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                {...register("phonenumber", { required: true })}
                id="phonenumber"
                name="phonenumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phonenumber"
              />
              {errors.phonenumber && (
                <p className="text-red-600">{errors.phonenumber.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="password"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <button
              id="btn-login"
              type="submit"
              className="btn__primary bg-primary-yellow w-full py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
