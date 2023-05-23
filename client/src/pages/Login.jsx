import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    alert("Logged in successfully")
    navigate("/")
  };
  return (
    <>
      <form className="form" action="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@inbox.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="************"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />

        <button disabled={isLoading}type="submit">Login</button>
        {error && <div className="error">{error}</div>}
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
