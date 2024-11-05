import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";

function OTPVerficationCard({ className, otpLength = 6 }) {
  const [otp, setOtp] = useState(Array(otpLength).fill(""));
  const [timer, setTimer] = useState("10:00");
  const inputRefs = useRef([]);

  useEffect(() => {}, []);

  const handleChange = (index, e) => {};
  return (
    <div
      className={clsx(`max-w-xl w-[448px] rounded overflow-hidden `, className)}
    >
      <img src="../logo.png" alt="logo" className="mx-auto" />
      <div className="text-white text-center  text-3xl mt-20">
        <p>Check Your Email for code</p>
      </div>

      <div className="text-gray-400 text-center mt-16">
        <p>Please enter the verification code sent to your email id </p>
      </div>
      <div className="flex items-center justify-center mt-5">
        {[...Array(otpLength)].map((_, index) => (
          <Input
            key={index}
            value={otp[index]}
            onChange={(e) => handleChange(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            className="text-center max-w-10 px-1 py-3 bg-blue-500 text-white border-none outline-none  mx-1"
          />
        ))}
      </div>

      <div className="text-gray-600 text-center mt-2 text-sm">{timer}</div>
      <div className="flex justify-center  mt-10">
        <Button className={clsx("text-white  px-10 w-3/4", "bg-blue-200")}>
          Verify
        </Button>
      </div>

      <div className="text-gray-400 text-center mt-2 ">
        Can't find the email? Click Here to resend
      </div>
    </div>
  );
}

export default OTPVerficationCard;
