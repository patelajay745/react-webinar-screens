import React from "react";

function Container({ children }) {
  return (
    <div className="bg-green-500 min-h-screen flex items-center justify-center">
      <div className="bg-blue-400 space-x-4">{children}</div>
    </div>
  );
}

export default Container;
