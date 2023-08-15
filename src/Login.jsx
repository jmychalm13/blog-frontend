import axios from "axios";

function handleLogin(event) {
  event.preventDefault();
  const params = new FormData(event.target);
  axios
    .post("http://localhost:3000/sessions.json", params)
    .then((response) => {
      console.log(response.data);
      console.log("I worked!!!!!");
      event.target.reset();
    })
    .catch((error) => {
      console.log("ERROR", error.response.data.errors);
    });
}

export function Login() {
  return (
    <div id="login">
      <h1>Login:</h1>
      <form onSubmit={handleLogin}>
        <div>
          Email:
          <input className="form-control" name="email" type="email" />
        </div>
        <div>
          Password:
          <input className="form-control" name="password" type="password" />
        </div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
