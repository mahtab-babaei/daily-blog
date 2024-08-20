import { ReactNode } from "react";

interface Props {
  isSubmitting: boolean;
  children: ReactNode;
}
const DarkButton = ({ isSubmitting, children }: Props) => {
  return (
    <>
      <button
        disabled={isSubmitting}
        className="
          relative 
          flex
          items-center 
          justify-center 
          w-28 
          h-9 
          bg-dark
          text-neutral 
          text-sm 
          font-medium 
          rounded-lg 
          overflow-hidden"
      >
        {children}
        <span
          className="
          absolute 
          rounded-full 
          bottom-7
          right-1 
          w-16 
          h-16
          bg-accent 
          bg-opacity-70
      "
        />
        <span
          className="
          absolute 
          rounded-full 
          top-7
          left-1 
          w-16 
          h-16
          bg-primary 
          bg-opacity-70
      "
        />
      </button>
    </>
  );
};

export default DarkButton;
