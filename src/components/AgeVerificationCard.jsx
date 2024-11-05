import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import clsx from "clsx";
import { Navigate, useNavigate } from "react-router-dom";

function AgeVerificationCard({ children, className }) {
  const [inputValue, setInputValue] = useState(false);
  const navigate = useNavigate();

  const Onchange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 0) {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  };

  const onKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className={clsx(`max-w-xl rounded overflow-hidden`, className)}>
      <img src="../logo.png" alt="logo" className="mx-auto" />
      <div className="mt-20  text-3xl text-center text-white">
        <p>Verify Your Age</p>
      </div>

      <div className="mt-10 text-gray-400 px-5">
        <p>Please confirm your birth year. This data will not be stored</p>
      </div>

      <div className="flex mt-5 justify-center">
        <Input
          type="text"
          maxLength={4}
          onChange={Onchange}
          onKeyPress={onKeyPress}
          className="w-3/4 bg-blue-500 text-white border-none outline-none py-3 px-5 "
          placeholder="Your Birth year"
        />
      </div>
      <div className="flex mt-10 justify-center">
        <Button
          disabled={!inputValue}
          onClick={() => navigate("/email")}
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

export default AgeVerificationCard;
