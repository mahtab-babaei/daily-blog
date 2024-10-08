import { ReactNode } from "react";
import Spinner from "./Spinner";

interface Props {
  children: ReactNode;
  isSubmitting: boolean;
}
const DarkButton = ({ children, isSubmitting }: Props) => {
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
          h-10 
          bg-dark
          text-neutral 
          text-sm 
          rounded-lg 
          overflow-hidden
          hover:font-medium"
      >
        {children}
        {isSubmitting && <Spinner />}
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
