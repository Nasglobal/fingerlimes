import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 w-full">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-[#f10000] animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-[#f10000] animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-[#f10000] animate-bounce [animation-delay:-.5s]"></div>
      </div>
     
    </div>
  );
};

export default SpinnerLoader;