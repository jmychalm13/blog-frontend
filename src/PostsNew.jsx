export function PostsNew() {
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
