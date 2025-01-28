import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaChevronDown } from "react-icons/fa";

function DropDownInputField({ label, name, placeholder, options }) {
  return (
    <div className="form-field-container flex flex-col sm:mt-5 w-full space-y-2">
      {/* Label and Error Message */}
      <div className="form-field-lable sm:flex justify-between w-full hidden">
        <label className="text-[#8B5DFF] text-[12px] uppercase font-semibold">
          {label}
        </label>
        <ErrorMessage
          name={name}
          component="span"
          className="text-red-600 text-[12px]"
        />
      </div>
      
      {/* Dropdown Field */}
      <div className="relative w-full rounded-[6px] h-[38px] border-[1px] border-[#E82561] border-opacity-20 flex items-center">
        <Field
          as="select"
          name={name}
          className="w-full h-full p-2 bg-transparent outline-none text-[16px] appearance-none"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <FaChevronDown className="absolute right-2 text-gray-400 pointer-events-none" />
      </div>
      <ErrorMessage
        name={name}
        component="span"
        className="text-red-600 text-[12px]"
      />
    </div>
  );
}

export default DropDownInputField;
