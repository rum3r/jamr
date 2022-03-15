import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FullPost from "./components/FullPost";
import Comment from "./components/Comment";
import CreatePostButton from "./components/CreatePostButton";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const onClick = () => {
    setLoggedIn(!isLoggedIn);
  };
  const posts = [
    {
      id: "1",
      title: "Sample Title",
      username: "Kuljeet",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      time: "3",
    },
    {
      id: "2",
      title: "Sample  tite 2",
      username: "rohan",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      time: "3",
    },
    {
      id: "3",
      title: "Sample Title 3",
      username: "ramesh",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum ",
      time: "3",
    },
    {
      id: "4",
      title: "Sample Title 4",
      username: "Kuljeet",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      time: "3",
    },
    {
      id: "5",
      title: "Sample Title",
      username: "Kuljeet",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      time: "3",
    },
    {
      id: "6",
      title: "Sample Title",
      username: "Kuljeet",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      time: "3",
    },
  ];

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((isLoggedIn) => setLoggedIn(isLoggedIn));
  }, []);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onClick={onClick} />
      {/* <CreatePostButton /> */}

      <div className="min-h-screen pt-20 bg-gray-100 flex flex-col">
      

        {isLoggedIn ? (
          <div className="min-h-screen flex flex-col">
            {posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        ) : (
          <div className="pt-10">
            {/* <Login /> */}
            {/* <Signup /> */}
            <CreatePost />
          </div>
        )}

        {/* <FullPost post={posts[0]} isLoggedIn={isLoggedIn} onClick={onClick} /> */}

        {/* <Comment post={posts[0]} /> */}
      </div>

      <Footer />
    </div>
  );
};

export default App;
