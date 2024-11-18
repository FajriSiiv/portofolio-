import React from "react";

const Button = ({ icon, text, className, components = "button", ...props }) => {
  return (
    <>
      {components === "button" ? (
        <button
          className={`py-2 px-5 bg-primary text-secondary font-semibold rounded-md text-lg flex items-center justify-center gap-x-2 border border-primary hover:bg-secondary hover:text-primary transition-all cursor-pointer ${className}`}
          {...props}
        >
          {icon ? icon : null}
          {text}
        </button>
      ) : null}
      {components === "a" ? (
        <a
          className={`py-2 px-5 bg-primary text-secondary font-semibold rounded-md text-lg flex items-center justify-center gap-x-2 border border-primary hover:bg-secondary hover:text-primary transition-all cursor-pointer ${className}`}
          {...props}
        >
          {icon ? icon : null}
          {text}
        </a>
      ) : null}
    </>
  );
};

export default Button;
