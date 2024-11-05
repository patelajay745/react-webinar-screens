import React from "react";
import Button from "./Button";
import Input from "./Input";

function Card({ children, className }) {
  return (
    <div className={`max-w-xl rounded overflow-hidden  ${className}`}>
      <img src="../logo.png" alt="logo" className="mx-auto" />
      <div className="mt-20 font-bold text-3xl text-center text-white">
        <p>Verify Your Age</p>
      </div>

      <div className="mt-10 text-gray-400 px-5">
        <p>Please confirm your birth year. This data will not be stored</p>
      </div>

      <div className="flex mt-5 justify-center">
        <Input
          className="w-3/4 bg-blue-500 border-none outline-none py-3 px-5 text-gray-500 "
          placeholder="Your Birth year"
        />
      </div>
      <div className="flex mt-10 justify-center">
        <Button
          className=" bg-blue-200  text-white  px-10 w-3/4"
          disabled={true}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Card;
