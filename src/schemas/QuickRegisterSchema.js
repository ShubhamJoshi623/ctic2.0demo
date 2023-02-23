import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const isNumberRegx = /\d/;
  const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const upperCaseRegx = /[A-Z]/;
  const LowerCaseRegx = /[a-z]/;
  const websiteNameRegex = /^((?!ctic|FNF|chicagotitle).)*$/i;

export const QuickRegistervalidationSchema= Yup.object({
language_type:Yup.string().required("* required"),
firmname:Yup.string().required("* required"),
firstname:Yup.string().required("* required"),
lastname:Yup.string().required("* required"),
email:Yup.string().email(),
phonenumber:Yup.string().required("* required").matches(phoneRegExp, 'Phone number is not valid'),
ext:Yup.string().required("* required").min(4).max(4).matches(isNumberRegx),
username:Yup.string().required("* required"),
password:Yup.string().required("* required").matches(isNumberRegx,"Password in not valid").matches(specialCharacterRegx,"Password in not valid").matches(upperCaseRegx,"Password in not valid").matches(LowerCaseRegx,"Password in not valid").matches(websiteNameRegex,"Password in not valid"),
confirmpassword:Yup.string().required("* required").oneOf([Yup.ref('password')],"Passwords don't match"),
 provinceSelect:Yup.string().required("* required").test("provinceSelect",'Please Select the correct Province',(value)=>{return value && value!=='0'})


});