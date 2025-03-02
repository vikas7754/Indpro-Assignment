import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-svh">
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-primary"></div>
      </div>
    </div>
  );
};

export default Loader;
