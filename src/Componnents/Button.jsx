import React from 'react';

function Button({ label, type }) {
  return (
    <button
      type={type}
      className="rounded-md w-[500px] h-[48px] px-6 text-white bg-[#E82561] hover:bg-[#c41e52] transition cursor-pointer"
    >
      {label}
    </button>
  );
}

export default Button;
