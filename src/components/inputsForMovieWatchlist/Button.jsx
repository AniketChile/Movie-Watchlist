import React, { forwardRef, useId } from "react";

const Button = forwardRef(({ label, type = "submit", className = "", children, ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <button
        type={type}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-blue text-black outline-none ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
});

export default Button;
