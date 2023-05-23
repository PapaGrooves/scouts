import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, fname, lname, dob, password, rpassword);

    if (rpassword !== password) {
      throw new Error("Password doesn't match");
    }

    alert("Account created successfully")
    navigate("/")
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@inbox.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="Name"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Surname"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          id="date"
          onChange={(e) => setDob(e.target.value)}
          value={dob}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="************"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <label htmlFor="rpassword">Repeat Password</label>
        <input
          type="password"
          name="rpassword"
          id="rpassword"
          placeholder="************"
          onChange={(e) => setRpassword(e.target.value)}
          value={rpassword}
        />

        <button disabled={isLoading} type="submit">
          Signup
        </button>

        {error && <div className="error">{error}</div>}

        <p>
          {" "}
          Have an account already? Login{" "}
          <Link className="anchor" to="/login">
            here.
          </Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
