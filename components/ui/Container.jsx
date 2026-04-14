import React from "react";

export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-[92%] max-w-6xl ${className}`}>{children}</div>
  );
}

