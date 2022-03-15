import React from "react";
import Button from "./Button";
const Createpost = () => {
  return (
    <div className="flex flex-col w-80 md:w-96 lg:w-144 bg-white mx-auto p-4">
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="Title"
        placeholder="Title"
      />
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
      id="postdesctext"
      rows="3"
      placeholder="Text"
    ></textarea>

    <div className="ml-auto">
    <Button mode="dark" title="Post"/>
    </div>
    </div>
  );
};

export default Createpost;
