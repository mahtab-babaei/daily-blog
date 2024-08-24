import React, { PropsWithChildren } from "react";

const MainNav = ({ children }: PropsWithChildren) => {
  return (
    <div className="flat-gradient w-full">
      {children}
    </div>
  );
};

export default MainNav;
