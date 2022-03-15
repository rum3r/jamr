import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, mode, tolink , onClick}) => {
  return (
    <>
      {mode === "light" ? (
        <button
          type="button"
          className="rounded-full border-solid border-2 border-black w-28 h-9 text-1xl font-semibold bg-white hover:bg-gray-50"
          onClick={()=>onClick()}
        >
          {title}
        </button>
      ) : (
        <button
          type="button"
          className="rounded-full w-28 h-9 text-1xl font-semibold bg-black text-white hover:bg-gray-800"
          onClick={()=>onClick()}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
