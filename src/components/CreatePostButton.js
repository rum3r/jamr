import React from "react";

const CreatePostButton = () => {
  return (
    <button
      type="button"
      className="mt-20 ml-10 fixed rounded-full border-solid border-2 border-black w-36 h-10 text-1xl font-semibold bg-black text-white hover:bg-gray-800"
    >
      + Create Post
    </button>
  );
};

export default CreatePostButton;
