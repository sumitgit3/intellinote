import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import alertContext from '../Context/Alert/alertContext';
const Login = () => {
    const {showAlert} = useContext(alertContext);
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const onChange = (e) => {
        //... spread operator so other properties remain intact
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
            });
            if (response.ok) {
                const Login_Response = await response.json(); // parses JSON response into native JavaScript objects-> 
                localStorage.setItem("authToken", Login_Response.authToken);
                navigate("/");
                showAlert("Logged in successfully","success");
            }
            else {
                const errorMessage = await response.text();//response is not json
                showAlert("Login Failed: " + errorMessage,"warning");
            }
        } catch (error) {
            console.log(error);
            showAlert("Error","danger");
        }


    }
    return (
        <div className='container-fluid'>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} autoComplete='username' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password" name="password" onChange={onChange} value={credentials.password} autoComplete="current-password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login
