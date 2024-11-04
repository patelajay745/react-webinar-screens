import React from "react";

function Button({ disbaled, children, onClick,className }) {
  return (
    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Click me
    </button>
  );
}

export default Button;
