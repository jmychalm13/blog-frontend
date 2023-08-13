import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";

export function Content() {
  const [posts, setPosts] = useState([]);
  useEffect(handleIndexPosts, []);

  function handleIndexPosts() {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
