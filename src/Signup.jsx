export function Signup() {
  return (
    <div id="signup">
      <h1>Signup</h1>
      <form action="http://localhost:3000/users.json" method="POST">
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
