import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {


    // const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/login", {email,password})
            .then(res => {
                if(res.data = "email exists"){
                    // history("/",{state:{id:email}})
                }
                else if(res.data = "email does not exist"){
                    alert("User does not exist")
                }
            })
            .catch(e => {
                alert("Wrong email or password");
                console.log(e)
            })
        }
        catch(e) {
            console.log(e);
        }
    }

    return(
        <>
        <form className="form" action="POST">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="example@inbox.com" onChange={(e) => { setEmail(e.target.value)}}/>

            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" placeholder="************" onChange={(e) => { setPassword(e.target.value)}}/>

            <button type="submit">Login</button>

            <p>Dont have an account? Become a helper <Link className="anchor" to="/signup">here.</Link> </p>
        </form>
        </>
    );
}

export default Login;