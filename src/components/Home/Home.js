import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Post from "../Post/Post";

const Home = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <Header></Header>
      {post.map((newPost) => (
        <Post newPost={newPost} key={newPost.id}></Post>
      ))}
    </div>
  );
};

export default Home;
