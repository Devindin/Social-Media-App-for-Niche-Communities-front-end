import React,{useState} from "react";
import bgimage from "../assets/bgImage.jpg";
import profile from "../assets/profile.jpg";
import InputField from "../Componnents/InputField.jsx";
import { Formik, Form } from "formik";
import Button from "../Componnents/Button.jsx";
import * as Yup from "yup";
import DropDownInputField from "../Componnents/DropDownInputField.jsx";
import axios from "axios";
import {Link} from "react-router-dom";


function SignUp() {
  const[successMessage , setSuccessMessage] = useState(false);

  const handleSignUp = async(values,{resetForm})=>{
    try {
      console.log("Form data:",values);
      const response = await axios.post("http://localhost:3001/addNewuser",values);
      console.log("response:" ,response.data);

      if(response.data.message=='user registered successfully'){
        setSuccessMessage(true);
      }
      console.log("Form reset");
      resetForm();
    } catch (error) {
      console.log("error",error);
    }
  };

  const countryOptions = [
    { label: "Sri Lanka", value: "SL" },
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "Canada", value: "CA" },
    { label: "Australia", value: "AU" },
  ];

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <div
      className="h-screen w-full flex bg-no-repeat bg-center bg-cover items-center justify-center flex-col"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Profile Image */}
      <img
        src={profile}
        alt="Profile"
        className="rounded-full w-[150px] h-[150px] border-[10px] border-[#E82561] object-cover mb-6"
      />

      {/* Formik Form */}
      <Formik
       initialValues={{
        name: "",
        email: "",
        gender: "",
        country: "",
        password: "",
        confirmpassword: "",
      }}
        validationSchema={SignupSchema}
        onSubmit={handleSignUp}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-[1000px] rounded-lg bg-white/30 backdrop-blur-sm text-[#E82561] p-8 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Input Fields */}
              <InputField
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <InputField
                label="Gender"
                name="gender"
                type="text"
                placeholder="Enter your gender"
              />
              {/* Country Dropdown */}
              <DropDownInputField
                label="Country"
                name="country"
                type="select"
                placeholder="Select your country"
                options={countryOptions}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <InputField
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>

           

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button label="Sign Up" type="submit" />
             
            </div>

            <div className="flex flex-col items-center justify-end">
              <p className="text-[#8B5DFF] text-[12px]">
                Already have an account?{" "}
                <span className="text-[#E82561]">
                  <Link to='/signin'>Sign in now</Link>
                  
                  </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-end">
            {
              successMessage &&(
                <span className="text-green-600 text-[16px] mt-2">User Registered Successfully!</span>
              )
            }
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
