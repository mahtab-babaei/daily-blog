import React, { PropsWithChildren } from "react";

const MainNavBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flat-gradient w-full">
      {children}
    </div>
  );
};

export default MainNavBar;
