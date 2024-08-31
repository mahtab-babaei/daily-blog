import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center  mr-1">
      <div className="w-3 h-3 border-2 border-t-2 border-neutral border-t-dark rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
