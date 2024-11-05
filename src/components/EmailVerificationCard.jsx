import clsx from "clsx";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function EmailVerification({ className }) {
  const [inputValue, setInputValue] = useState(false);
  const navigate = useNavigate();

  const Onchange = (e) => {
    if (e.target.value.length > 0) {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  };
  return (
    <div
      className={clsx("max-w-xl w-[448px] rounded overflow-hidden ", className)}
    >
      <img src="../logo.png" alt="logo" className="mx-auto" />

      <div className="mt-16 text-white text-center text-3xl  px-5">
        <p>Let's get Started</p>
      </div>

      <div className="flex mt-10 justify-center">
        <Input
          onChange={Onchange}
          type="text"
          placeholder="Email"
          className="w-3/4 py-3 px-5  bg-blue-500 text-white border-none outline-none"
        ></Input>
      </div>

      <div className="flex mt-5 justify-center">
        <Button
          disabled={!inputValue}
          onClick={() => navigate("/otp")}
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

export default EmailVerification;
