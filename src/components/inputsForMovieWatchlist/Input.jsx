import React from "react";
import { forwardRef } from "react";
import { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`${className}`}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Input);
