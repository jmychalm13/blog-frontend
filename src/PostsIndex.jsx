export function PostsIndex(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="an image" />
          <p>{post.body}</p>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
