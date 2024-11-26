import React from "react";

const Layer = ({ children, className, ...props }) => {
  return (
    <div
      className={`relative max-w-[1200px] text-primary mx-auto bg-white rounded-[7px] ${className} shadow-navbar mb-10 xs:rounded-none`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Layer;
