import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
        <form className="form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="example@inbox.com" />

            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" placeholder="Name" />

            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" placeholder="Surname" />

            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="date" id="dare" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="************" />

            <label htmlFor="rpassword">Repeat Password</label>
            <input type="password" name="rpassword" id="rpassword" placeholder="************" />

            <button type="submit">Signup</button>

            <p>Have an account already? Login <Link className="anchor" to="/login">here.</Link> </p>
        </form>
        </>
    );
}

export default Signup;