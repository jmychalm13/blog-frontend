export function PostsIndex(props) {
  return (
    <div id="posts-index" className="mt-3">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h4>{post.title}</h4>
          <img src={post.image} alt="an image" />
          <p>{post.body}</p>
          <button className="btn" onClick={() => props.onShowPost(post)}>
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
