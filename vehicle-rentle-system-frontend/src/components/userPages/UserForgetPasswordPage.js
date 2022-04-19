import React, { useState}  from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'
import Logo from '../Images/speed-car-logo.png';

function UserForgetPasswordPage() {

    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const navigate = useNavigate('');

    // reset password
    function userPasswordReset() {
        var formData = JSON.stringify({userEmail, userPassword});
        // Send data to the backend via POST
        fetch('http://localhost:9090/userForgotPassword', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            mode: 'cors',
            body: formData // body data type must match "Content-Type" header
        }).then(navigate("/UserLoginComponent"));
    }




    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{backgroundColor: '#1A374D'}}>
        <br/><br/><br/>
        <div className="container py-3 pt-0 pb-2" >

        <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white h3 display-7" style={{ backgroundColor: 'black'}}>
        &nbsp;&nbsp;
                        <img

                            class="d-block w-10 h-3"
                            src={Logo}
                            alt="Image Two"
                        />&nbsp;&nbsp; <span>Vehicle Rental System </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </header>
    <div className="text-center m-5-auto pt-2" id='userLogin'>
            <h2>Reset your password</h2>
            <form action="/login" class="was-validated" >
                <div className='mb-3 mt-3'>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input class="form-control"
                             placeholder="Enter Email"
                                style={{ border: '1px rgb(32, 31, 31)' }} type="text"
                                name="userEmail"
                                value={userEmail}
                                onChange={(event) => {
                                    setuserEmail(event.target.value);
                                }}
                                 required>
                            </input>
                </div>
                <div className='mb-3 mt-3'>
                    <label id="reset_pass_lbl">Set New password</label><br/>
                    <input class="form-control"
                             placeholder="Enter NewPassword"
                                style={{ border: '1px rgb(32, 31, 31)' }} type="password"
                                name="userPassword"
                                value={userPassword}
                                onChange={(event) => {
                                    setuserPassword(event.target.value);
                                }}
                                required>
                            </input>
                </div>
                <p>
                    <button onClick={userPasswordReset} id="sub_btn" type="submit">Submit</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/UserRegister">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
                <br/><br/><br/>                <br/><br/><br/>
                <br/><br/><br/>

            </footer>
        </div>
        </div></body>
    )
}

export default UserForgetPasswordPage;