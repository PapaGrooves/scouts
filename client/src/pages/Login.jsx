import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
        <form className="form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="example@inbox.com" />

            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" placeholder="************" />

            <button type="submit">Login</button>

            <p>Dont have an account? Become a helper <Link className="anchor" to="/signup">here.</Link> </p>
        </form>
        </>
    );
}

export default Login;