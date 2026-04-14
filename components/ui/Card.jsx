import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={`terminal-panel rounded-2xl p-6 ${className}`}
    >
      {children}
    </div>
  );
}

