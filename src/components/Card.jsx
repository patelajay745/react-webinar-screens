import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import clsx from "clsx";

function Card({ children, className }) {
  const [inputValue, setInputValue] = useState(false);

  const Onchange = (e) => {
    if (e.target.value.length > 0) {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  };

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
          onChange={Onchange}
          className="w-3/4 bg-blue-500 border-none outline-none py-3 px-5 text-gray-500"
          placeholder="Your Birth year"
        />
      </div>
      <div className="flex mt-10 justify-center">
        <Button
          className={clsx(
            "text-white  px-10 w-3/4",
            inputValue ? "bg-green-400" : "bg-blue-200"
          )}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Card;
