import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <img width="300px" src={props.post.image} alt="" />
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <div className="edit">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            Title:
            <input type="text" className="form-control" name="title" defaultValue={props.post.title} />
          </div>
          <div>
            Body:
            <input type="text" name="body" className="form-control" defaultValue={props.post.body} />
          </div>
          <div>
            Image:
            <input type="text" name="image" defaultValue={props.post.image} className="form-control" />
          </div>
          <button type="submit" className="mt-2 btn btn-secondary">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}
