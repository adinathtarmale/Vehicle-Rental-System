import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';


export default function AdminLogin() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('');

 
    function handleErrors()
    {
       
        if(this.state.userName.length===" ")
        {
            this.setState({usernameerror:" "});
        }
        else if(this.state.password.length===" ")
        {
            this.setState({passworderror:" "});
        }
    }
    function handleClick() {
       // handleErrors();
        var formData = JSON.stringify({ userName, password });
        // Send data to the backend via POST
        fetch('http://localhost:9090/adminLogin', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            mode: 'cors',

            body: formData // body data type must match "Content-Type" header
        }).then(navigate("/AdminDashboard"));

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
            <h1>Admin Sign-in</h1>
            <br/>
            <form action="/home " class="was-validated">
                <div className='mb-3 mt-3'>
                    <label id='userdetails'>Username</label><br/>
                    <input class="form-control"
                             placeholder="Enter Username"
                    style={{border:'2px solid rgb(32, 31, 31)'}} type="text" 
                    name="userName"
                    value={userName}
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                    required />
                </div>
                <div className='mb-3 mt-3'>
                    <label id='userdetails'>Password</label>
                    <br/>
                    <input class="form-control"
                             placeholder="Enter Password"
                    style={{border:'2px solid rgb(32, 31, 31)'}} 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    required />
                </div>
                <p>
                    <button  onClick={handleClick} id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p><Link to="/"><b>Back to Homepage</b></Link>.</p>
                <br/>
            </footer>
        </div>
        </div>
        
        </body>
    )
}
