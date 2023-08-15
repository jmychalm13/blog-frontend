import axios from "axios";

function handleSubmit(event) {
  event.preventDefault();
  const params = new FormData(event.target);
  axios
    .post("http://localhost:3000/users.json", params)
    .then((response) => {
      console.log(response.data);
      event.target.reset();
    })
    .catch((error) => {
      console.log("ERROR", error.response.data.errors);
    });
}

export function Signup() {
  return (
    <div id="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input type="text" name="name" className="form-control" />
        </div>
        <div>
          Email:
          <input type="email" name="email" className="form-control" />
        </div>
        <div>
          Password:
          <input type="password" name="password" className="form-control" />
        </div>
        <div>
          Password confirmation:
          <input type="password" name="password_confirmation" className="form-control mb-2" />
        </div>
        <button type="submit" className="btn-secondary">
          Signup
        </button>
      </form>
    </div>
  );
}
