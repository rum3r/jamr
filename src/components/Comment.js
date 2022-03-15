import React from 'react'

const Comment = ({post}) => {
  return (
    <div className="mx-auto w-2/4 max-h-52 p-3 mb-2 bg-white">
      <div className="flex align-items">
        <h1 className="truncate text-lg text-gray-600 font-normal max-w-md">
          {post.username}
        </h1>
        
        <h2 className="text-sm text-gray-400 ml-5 pt-1 font-thin">
          {post.time} hours ago
        </h2>
      </div>
      <div>
        <p className="text-md text-black">{post.desc}</p>
      </div>
    </div>
  )
}

export default Comment