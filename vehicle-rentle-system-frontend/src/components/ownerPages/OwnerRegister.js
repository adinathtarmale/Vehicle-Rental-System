import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

function OwnerRegister() {

    const [ownerFirstName, setFirstName] = useState('');
    const [ownerLastName, setLastName] = useState('');
    const [ownerPassword, setPassword] = useState('');
    const [ownerAdhaarDetails, setAdhaarNo] = useState('');
    const [ownerMobile, setMobileNo] = useState('');
    const [ownerEmail, setEmail] = useState('');
    const navigate = useNavigate('');

    //-----------------
  //user registration form

  const handleImageFile = (event) =>{
    setAdhaarNo(event.target.files[0]);
}

function uploadFile() {
let formData = new FormData(); 
formData.append('ownerAdhaar', ownerAdhaarDetails);
formData.append('ownerFirstName', ownerFirstName);   //append the values with key, value pair
formData.append('ownerLastName', ownerLastName);
formData.append('ownerPassword', ownerPassword);
formData.append('ownerEmail', ownerEmail);
formData.append('ownerMobile', ownerMobile);

axios.post('http://localhost:9090/ownerRegistration', formData, {
    headers: {
            'Content-Type': 'multipart/form-data'
        }
  }).then(navigate("/OwnerLogin"));
}

    //----------------



    function handleErrors() {

        if (this.state.userFirstName.length === " ") {
            this.setState({ userFirstNameerror: " " });
        }
        else if (this.state.userLastName.length === " ") {
            this.setState({ userLastNameerror: " " });
        }
        else if (this.state.userPassword.length === " ") {
            this.setState({ userPassworderror: " " });
        }
        else if (this.state.userAdhaarDetails.length === " ") {
            this.setState({ userAdhaarDetailserror: " " });
        }
        else if (this.state.userMobile.length === " ") {
            this.setState({ userMobileerror: " " });
        }
        else if (this.state.userEmail.length === " ") {
            this.setState({ userEmaileerror: " " });
        }
    }

    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{ backgroundColor: '#1A374D' }}>
            <br /><br /><br />
            <div className="container py-3 pt-0 pb-2" >

                <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white h3 display-7" style={{ backgroundColor: 'black' }}>
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
                <div className="text-center m-3-auto pt-1 mb-1" id='userLogin'>
                    <h1>Owner Sign-up</h1>

                    <form action="/home" class="was-validated">

                        <div className="row g-2">
                            <div className="col-5">
                                <label for="validationTooltip01" id='userdetails'>First name</label>
                                <input
                                    class="form-control"
                                    placeholder="Enter FirstName"
                                    name="ownerFirstName" id="registerwidth"
                                    style={{ border: '2px solid rgb(32, 31, 31)' }}
                                    type="text" className="form-control"
                                    value={ownerFirstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                    }}
                                    required />


                            </div>
                            <div className="col-5">
                                <label for="validationTooltip02" id='userdetails'>Last name</label>
                                <input class="form-control"
                                    placeholder="Enter LastName"
                                    name="ownerLastName"
                                    style={{ border: '2px solid rgb(32, 31, 31)' }}
                                    type="text" className="form-control"
                                    value={ownerLastName}
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                    }}
                                    required />

                            </div>
                        </div>
                        <div className="col-6">


                            <label id='userdetails'>Set Password</label>
                            <input
                                class="form-control"
                                placeholder="Enter Password" name="ownerPassword"
                                style={{ border: '2px solid rgb(32, 31, 31)' }}
                                type="password" className="form-control"
                                value={ownerPassword}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required />



                        </div>

                        <div className="col-6">
                            <label for="validationTooltip03" id='userdetails'>Adhaar Image</label>
                            <input class="form-control"
                            type="file"
                            name="ownerAdhaarDetails"  
                            accept='image/*' 
                            onChange={handleImageFile}
                            required />
                        </div>


                        <div className="col-6">
                            <label for="validationTooltip03" id='userdetails'>Contact No </label>
                            <input class="form-control"
                                placeholder="Enter ContactNo"
                                name="ownerMobile"
                                style={{ border: '2px solid rgb(32, 31, 31)' }}
                                type="text"
                                className="form-control"
                                value={ownerMobile}
                                onChange={(event) => {
                                    setMobileNo(event.target.value);
                                }}
                                required />



                        </div>

                        <div className="col-6">
                            <label for="validationTooltip04" id='userdetails'>Email </label>
                            <input class="form-control"
                                placeholder="Enter Email"
                                name="ownerEmail"
                                style={{ border: '2px solid rgb(32, 31, 31)' }}
                                type="text" className="form-control"
                                value={ownerEmail}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                required />



                        </div>

                        <div className="col-12">
                            <button id="sub_btn"
                                onClick={uploadFile}
                                type="submit">Register</button>
                        </div>

                    </form >
                    <footer>
                        <p><b>Allready registered?</b>  <Link to="/OwnerLogin"><b>Login</b></Link>.</p>
                        <p><Link to="/"><b>Back to Homepage</b></Link>.</p>
                        <br />
                    </footer>
                </div>
            </div></body>

    );
}

export default OwnerRegister;
