import axios from "axios";
import { useState, useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title:
          <input type="text" />
        </div>
        <div>
          Body:
          <input type="textarea" />
        </div>
        <div>
          Image:
          <input type="text" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function PostsIndex(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="an image" />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
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

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
