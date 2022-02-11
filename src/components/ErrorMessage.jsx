import { useState } from "react";

const ErrorMessage = () => {
  return (
    <div className="bg-red-300 text-black font-medium p-3 my-2">
      <ul>All fields are required.</ul>
    </div>
  );
};

export default ErrorMessage;
