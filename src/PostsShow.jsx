export function PostsShow(props) {
  return (
    <div>
      <img width="300px" src={props.post.image} alt="" />
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  );
}
