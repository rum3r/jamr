import React from "react";
import Button from "./Button";
import CreateComment from "./CreateComment";

const FullPost = ({ post, isLoggedIn, onClick }) => {
  return (
    <div className="flex flex-col mx-auto w-2/4 min-h-fit">
      <div className="p-5 mb-2 bg-white">
        <div className="flex flex-col align-items">
          <h2 className="text-sm text-gray-600 font-thin pt-1">
            {post.username}
          </h2>

          <h1 className="text-2xl text-black font-bold text-justify">
            {post.title}
          </h1>
          <p className="text-sm text-gray-600 font-thin pb-2">
            {post.time} hours ago
          </p>
        </div>
        <div className="pt-10">
          <p className="text-md w-full text-gray-700 font-thin">{post.desc}</p>
        </div>

        {!isLoggedIn ? (
          <div className="mt-10 p-3 flex justify-between border rounded-md h-fit">
            <div className="flex flex-col justify-center">
              <p className="text-1xl text-gray-600 font-bold">
                Log in or sign up to leave a comment
              </p>
            </div>
            <div className="flex">
              <div className="mr-2">
                <Button
                  title="Log In"
                  mode="light"
                  tolink="#"
                  onClick={() => onClick()}
                />
              </div>
              <div className="mr-2">
                <Button
                  title="Sign Up"
                  mode="dark"
                  tolink="#"
                  onClick={() => onClick()}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mx-auto w-full">
        <div className="min-h-fit bg-white">
          <CreateComment />
        </div>
      </div>
    </div>
  );
};

export default FullPost;
