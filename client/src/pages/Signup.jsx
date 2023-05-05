import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {

    const [email,setEmail]=useState('');
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [dob, setDob] = useState('')
    const [password,setPassword] = useState('');
    const [rpassword, setRpassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/signup", {email,fname,lname,dob,password,rpassword})
            .then(res => {
                if(res.data = "email already exists"){
                    alert("User already exists");
                }
                else if(res.data = "email does not exist"){
                    // history("/",{state:{id:email}})
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

    return (
        <>
        <form className="form" action="POST">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="example@inbox.com" onChange={(e) => { setEmail(e.target.value)}}/>

            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" placeholder="Name"onChange={(e) => { setFname(e.target.value)}} />

            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" placeholder="Surname" onChange={(e) => { setLname(e.target.value)}}/>

            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="date" id="dare" onChange={(e) => { setDob(e.target.value)}}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="************" onChange={(e) => { setPassword(e.target.value)}} />

            <label htmlFor="rpassword">Repeat Password</label>
            <input type="password" name="rpassword" id="rpassword" placeholder="************" onChange={(e) => { setRpassword(e.target.value)}}/>

            <button type="submit">Signup</button>

            <p>Have an account already? Login <Link className="anchor" to="/login">here.</Link> </p>
        </form>
        </>
    );
}

export default Signup;