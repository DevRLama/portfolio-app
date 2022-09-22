import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function SignIn() {
    const [credentials, setcredentials] = useState({ EmailId: "", Password: "" });
    let navigate=useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ EmailId: credentials.EmailId, Password: credentials.Password })

        })
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the token and redirect to user page.
           
            localStorage.setItem('user', credentials.EmailId);     
            localStorage.setItem('role', json.role)
            navigate('/home');
            alert("Successfully login")
        } else {
                alert(json.error)           

        }

    }


    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div> </div>
            <div className="d-flex justify-content-between my-10">


                <div className="row ">
                    <div className="col">
                        <img src='/uppcl_logo.png' alt='...' />
                        <img src="/login-side.png" className="img-fluid " alt="..." />
                    </div>
                    <div className="col">
                        <h3>Sign In</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="EmailId" name="EmailId" placeholder="EmailId" onChange={onChange} minLength={8} />
                                <label htmlFor="EmailId">Email Id</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="Password" name="Password" placeholder="Password" onChange={onChange} />
                                <label htmlFor="Password">Password</label>
                            </div>
                            <div className='my-2'><button className='btn btn-primary' >Submit</button></div>
                            {/* <div><a href="/resetPassword" className="card-link">Reset Password</a></div> */}

                        </form>
                        <div>

                        </div>
                    </div>

                </div>
            </div>






        </>
    )
}

export default SignIn