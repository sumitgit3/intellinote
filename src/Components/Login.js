import React, { useState } from 'react'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const onChange = (e) => {
        //... spread operator so other properties remain intact
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
            });
            const Login_Response = await response.json(); // parses JSON response into native JavaScript objects-> 
            if (response.ok) {
                localStorage.setItem("authToken", Login_Response.authToken);
                console.log({ success: "Auth token recieved" });
            }
            else {
                console.log(Login_Response);
            }
        } catch (error) {
            console.log(error);
            // alert("Server Unreachable");
        }


    }
    return (
        <>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} autoComplete='username' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password" name="password" onChange={onChange} value={credentials.password} autoComplete="current-password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
            </form>
        </>
    )
}

export default Login
