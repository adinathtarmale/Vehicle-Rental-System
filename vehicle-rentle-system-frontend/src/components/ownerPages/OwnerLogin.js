import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { ReactSession } from 'react-client-session';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';


function OwnerLogin() {

    const [ownerEmail, setEmail] = useState("");
    const [ownerPassword, setPassword] = useState("");
    const navigate = useNavigate('');
    localStorage.setItem("ownerEmail", ownerEmail);

    //localStorage.setItem("name", JSON.stringify(name))
    //ReactSession.set("ownerEmail", ownerEmail);


    function handleClick() {
       // handleErrors();
        var formData = JSON.stringify({ ownerEmail, ownerPassword });
        // Send data to the backend via POST
        fetch('http://localhost:9090/ownerLogin', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            mode: 'cors',
            body: formData // body data type must match "Content-Type" header
        }).then(navigate("/OwnerRequest"));
    }
 
    function handleErrors()
    {
       
        if(this.state.userEmail.length===" ")
        {
            this.setState({emailerror:" "});
        }
        else if(this.state.userPassword.length===" ")
        {
            this.setState({passworderror:" "});
        }
    }
    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{backgroundColor: '#1A374D'}}>
                <br/><br/><br/>
            <div className="container py-3 pt-0 pb-2" >
                <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white h3 display-7" style={{ backgroundColor: 'black'}}>&nbsp;&nbsp;
                        <img class="d-block w-10 h-3" src={Logo} alt="Image Two"/>&nbsp;&nbsp;
                        <span>Vehicle Rental System </span>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    </nav>
                </header>
                <div className="text-center m-3-auto pt-1 mb-1" id='userLogin'>
            
                    <h1>Owner Sign-in</h1>
                    
                    <form class="was-validated">
                        <div className="mb-3 mt-3">

                                    <label id='userdetails'>Email</label><br />

                                    <input class="form-control"
                                        placeholder="Enter Email"
                                        style={{ border: '2px solid rgb(32, 31, 31)' }} type="text"
                                        name="ownerEmail"
                                        value={ownerEmail}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }} required></input>
                                        
                                </div>
                                <div className="mb-3 mt-3">

                                    <label id='userdetails'>Password</label>
                                    <br />
                                    <input class="form-control"
                                        placeholder="Enter Password"
                                        style={{ border: '2px solid rgb(32, 31, 31)' }}
                                        type="password"
                                        name="ownerPassword"
                                        value={ownerPassword}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                        required ></input>
                                        
                                </div>
                                <div className="col-12">

                                    <button onClick={handleClick}
                                        id="sub_btn" type="submit">Login</button>

                                </div>
                            <Link to="/OwnerForgetPassword"><label className="right-label text-white solid" id='forgot'>forget password?</label></Link>
                    </form>
                    <footer>
                        <p><b>First time?</b>  <Link to="/OwnerRegister"><b>Create an account</b></Link>.</p>
                        <p><Link to="/"><b>Back to Homepage</b></Link>.</p>
                        <br/>
                    </footer>
                </div>
            </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </body>
    )
}

export default OwnerLogin;