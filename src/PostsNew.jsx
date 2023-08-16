import axios from "axios";

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input className="form-control" name="title" type="text" />
        </div>
        <div>
          Body:
          <input className="form-control" name="body" type="textarea" />
        </div>
        <div>
          Image:
          <input className="form-control" name="image" type="text" />
        </div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
