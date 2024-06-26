import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import alertContext from '../Context/Alert/alertContext';
const SignUp = () => {
    const { showAlert } = useContext(alertContext);
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", email: "", password: "" });
    const onChange = (e) => {
        //... spread operator so other properties remain intact
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/createuser', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ name: credentials.username, email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
            });
            if (response.ok) {
                const SignUp_Response = await response.json(); // parses JSON response into native JavaScript objects-> 
                localStorage.setItem("authToken", SignUp_Response.authToken);
                showAlert("Sign up successfully", "success");
                navigate("/");
            }
            else {
                const errorMessage = await response.text();//response is not json
                console.log(errorMessage);
                showAlert("Sign up Failed: " + errorMessage, "warning");
            }
        } catch (error) {
            console.log(error);
            showAlert("Error", "danger");
            // alert("Server Unreachable");
        }
    }
    return (
        <>
            <div className='container-fluid'>
                <h2>Create an account to use intelliNote</h2>
                <form>
                    <div className="mb-3 mt-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="email" className="form-control" id="username" name='username' aria-describedby="emailHelp" onChange={onChange} value={credentials.username} autoComplete='username' />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} autoComplete='username' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={credentials.password} autoComplete="new-password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" autoComplete='new-password' />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp
