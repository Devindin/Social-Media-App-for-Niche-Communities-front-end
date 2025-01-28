import React from "react";
import bgimage from "../assets/bgImage.jpg";
import profile from "../assets/profile.jpg";
import InputField from "../Componnents/InputField.jsx";
import { Formik, Field, Form } from "formik";
import Button from "../Componnents/Button.jsx";
import * as Yup from "yup";

function SignIn() {

  const LoginSchema = Yup.object().shape({
     email: Yup.string().required("Required"),
     password: Yup.string()
      .min(6,("Password must be atleast 6 characters"))
      .min(/[0-9]/,("Password requires a number"))
      .min(/[a-z]/,("Password requires a lower case latter"))
      .min(/[A-Z]/,("Password requires a upper case latter"))
      .min(/[^\w]/,("Password requires a symbol"))
      .required("Required")

  })

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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log("Form Values:", values);
        }}
        validationSchema={LoginSchema}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-[500px] rounded-lg bg-white/30 backdrop-blur-sm text-[#E82561] p-8 space-y-4"
          >
            {/* Email Input */}
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            {/* Password Input */}
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />

            

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button label="Login" type="submit" />

            </div>
            <div className="flex flex-col items-center justify-end">
            <p className="text-[#8B5DFF] text-[12px]">Haven't you an account? <span className="text-[#E82561]">Sign up now </span></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
