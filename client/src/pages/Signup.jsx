import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext";
import axios from 'axios';


const Signup = () => {
  const { dispatch } = useUsersContext();

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { fname, lname, email, dob, password, rpassword };
    try {
      const response = await axios.post('http://localhost:4000/api/users/signup', user);
      const json = await response.json();
  
      console.log(response.data); // Access the response data

      setLname("");
      setFname("");
      setDob("");
      setPassword("");
      setRpassword("");
      setError(null);
      console.log("New user created", json);
      dispatch({ type: "CREATE_USER", payload: json });
      alert("Account created successfully")
      navigate("/login")
    } catch (error) {
      console.error(error); // Handle error
    }
    // const response = await fetch("/api/users", {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // 

  //   if (!response.ok) {
  //     setError(json.error);
  //     // // setEmptyFields(json.emptyFields)
  //   }
  //   if (response.ok) {
  //     setEmail("");
      // setLname("");
      // setFname("");
      // setDob("");
      // setPassword("");
      // setRpassword("");
      // setError(null);
      // console.log("New user created", json);
      // dispatch({ type: "CREATE_USER", payload: json });
      // alert("Account created successfully")
      // navigate("/login")
  //   }
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
          // className={emptyFields.includes("email") ? 'error' : ""}
        />

        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="Name"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
          // className={emptyFields.includes("fname") ? 'error' : ""}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Surname"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
          // className={emptyFields.includes("lname") ? 'error' : ""}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => setDob(e.target.value)}
          value={dob}
          // className={emptyFields.includes("dob") ? 'error' : ""}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="************"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          // className={emptyFields.includes("password") ? 'error' : ""}
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

        <button type="submit">Signup</button>

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
