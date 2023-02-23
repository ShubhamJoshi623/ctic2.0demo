import React from 'react'
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";


const initialValues={
    fullname:"",
    email:"",
    phonenumber:"",
    password:"",
    
    
    };
    let renderCount=0;

export default function FormikFormDemo() {

    renderCount++;
    
const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action) => {
      console.log("🚀 ~ file: TestingComp.js:25 ~ TestingComp ~ values", values)
      action.resetForm();
    }
    
    
    });
    console.log("🚀 ~ file: TestingComp.js:37 ~ TestingComp ~ errors", errors)


  return (
    <div>
      <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
<span className="text-xl font-bold">Formik Form validation</span>
    <button className="text-white float-right bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
disabled
    >Render Count : {renderCount}</button>
<div className="container p-login-container max-w-login-container w-2/4">
<form onSubmit={handleSubmit}  >
  <div className="mb-6 mw-20">
    <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
    {/* <input {...register("firstName")} /> */}
    <input  type="text" value={values.fullname} onChange={handleChange} onBlur={handleBlur}  id="fullname" name="fullname"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fullname" />
    {errors.fullname && touched.fullname ?(<p className="text-red-600">{errors.fullname}</p>):null}
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"  />
    {errors.email && touched.email ?(<p className="text-red-600">{errors.email}</p>):null}


  </div>
  <div className="mb-6">
    <label htmlFor="phonenumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
    <input type="text" value={values.number} onChange={handleChange} onBlur={handleBlur}  id="phonenumber" name="phonenumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phonenumber"  />
    {errors.phonenumber && touched.phonenumber ?(<p className="text-red-600">{errors.phonenumber}</p>):null}


  
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    {errors.password && touched.password ?(<p className="text-red-600">{errors.password}</p>):null}

  
  </div>
  

  <button id="btn-login" type="submit" className="btn__primary bg-primary-yellow w-full py-3">Submit</button>
</form>
</div>


</div>
    </div>
  )
}
