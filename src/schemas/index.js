import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const signUpSchema= Yup.object({

fullname:Yup.string().min(2).max(25,"Maximum Length should be 25").required("Name is required"),
email:Yup.string().email().required("email is required"),
phonenumber:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("phonenumber is required"),
password:Yup.string().min(6).required("pass is required"),
name:Yup.string(),
amount:Yup.number()


});