import React from "react";
import Button from "./Button";
import Input from "./Input";

function Card({ children, className }) {
  return (
    <div
      className={`max-w-xl rounded overflow-hidden shadow-lg bg-green-400 ${className}`}
    >
      <div>
        <Input />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default Card;
