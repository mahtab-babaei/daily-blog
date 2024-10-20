import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  disabled: boolean;
}

const SoftButton = ({ children, color, disabled }: Props) => {
  return (
    <button className={`rounded-lg p-2 bg-${color}  bg-opacity-25 text-dark`} disabled={disabled}>
      {children}
    </button>
  );
};

export default SoftButton;
