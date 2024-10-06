import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-9 h-9 bg-dark bg-opacity-30 rounded-full animate-bounce"></div>
      <div className="w-9 h-9 mx-2 bg-light bg-opacity-30 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-9 h-9 bg-accent bg-opacity-30 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    </div>
  );
};

export default LoadingPage;
