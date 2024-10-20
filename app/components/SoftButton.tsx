import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  disabled: boolean;
  onClick: () => void;
}

const SoftButton = ({ children, color, disabled, onClick }: Props) => {
  return (
    <button
      className={`rounded-lg p-2 bg-${color}  bg-opacity-25 text-dark`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SoftButton;
