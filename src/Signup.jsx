import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("ERROR", error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  }

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
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
        <button type="submit" className="btn btn-secondary">
          Signup
        </button>
      </form>
    </div>
  );
}
