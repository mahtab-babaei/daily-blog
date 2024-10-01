import Link from "next/link";
import React from "react";
import { PiNotePencilBold } from "react-icons/pi";

const EditPostButton = ({ postId }: { postId: number }) => {
  return (
    <button>
      <Link href={`/blog/${postId}/edit`}>
        <PiNotePencilBold className="text-center w-6 h-6 text-light hover:text-dark transition-colors" />
      </Link>
    </button>
  );
};

export default EditPostButton;
