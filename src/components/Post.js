import React from "react";

const Post = ({ post }) => {
  return (
    <div className="mx-auto w-2/4 max-h-52 p-5 mb-2 bg-white">
      <div className="flex justify-between align-items">
        <h1 className="truncate text-2xl text-black font-bold max-w-md">
          {post.title}
        </h1>
        <h2 className="text-sm text-gray-600 font-thin pt-1">
          {post.username}
        </h2>
      </div>
      <div>
        <p className="text-sm text-gray-600 font-thin pb-2">
          {post.time} hours ago
        </p>
        <p className="truncate text-md text-gray-400">{post.desc}</p>
      </div>
    </div>
  );
};

export default Post;
