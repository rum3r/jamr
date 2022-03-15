import React from "react";
import Button from "./Button";

const CreateComment = () => {
  return (
    <div className="flex flex-col max-h-fit w-full bg-white mx-auto p-5">
      <textarea
        class="
        form-control
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        block border border-grey-light w-full p-3 rounded mb-4
        transition
        ease-in-out
        m-0
      "
        id="postcomment"
        rows="3"
        placeholder="Text"
      ></textarea>

      <div className="ml-auto">
        <Button mode="light" title="Comment" />
      </div>
    </div>
  );
};

export default CreateComment;
