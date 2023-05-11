
import { Link } from "react-router-dom";


const Login = () => {

  return (
    <>
      <form className="form" action="POST" >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@inbox.com"
          onChange={(e) => {
            // setEmail(e.target.value);
          }}
 
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="************"
          onChange={(e) => {
            // setPassword(e.target.value);
          }}

        />

        <button type="submit">Login</button>

        <p>
          Dont have an account? Become a helper{" "}
          <Link className="anchor" to="/signup">
            here.
          </Link>{" "}
        </p>
      </form>
    </>
  );
};

export default Login;
