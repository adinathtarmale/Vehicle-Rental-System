import { Link,useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

export default function OwnerRequest() {

    const navigate=useNavigate("");
    const ownerEmail = localStorage.getItem("ownerEmail");
    const [ownerid, setOwnerId] = useState([]);
    const [Image, setvehicleImage] = useState(null);
    const [vehicleName, setvehicleName] = useState('');
    const [vehicleNumber, setvehicleNumber] = useState('');
    const [vehicleChassisNumber, setvehicleChassisNumber] = useState('');
   

    var propertyName;       // this is holding ownerID
    ownerid.map((item) => {
        propertyName = item.ownerid;
    })
    localStorage.setItem("ownerIdentity", propertyName);
    //localStorage.setItem("ownerEmail", ownerEmail);
    // getting ownerID
    useEffect(() => {
        var formData = JSON.stringify({ ownerEmail });
        // Send data to the backend via POST
        fetch('http://localhost:9090/getOwnerIdbyEmail', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            mode: 'cors',

            body: formData // body data type must match "Content-Type" header
        }).then(response => response.json()).then(data => setOwnerId(data));
    }, []);

    


    // // Owner Vehicle Rent request-----------------(OwnerRequest.js)
    // useEffect(() => {
    //     var data = JSON.stringify({ propertyName, Image, vehicleName,vehicleNumber,vehicleChassisNumber });
    //     console.log("Data :"+data);
    //     // Send data to the backend via POST
    //     fetch('http://localhost:9090/VehicalRequest', {

    //         headers: {
    //             'content-type': 'multipart/form-data; boundary=gc0p4Jq0M2Yt08jU534c0p'
    //         },
    //         method: 'POST',
    //         mode: 'cors',
    //         body: data // body data type must match "Content-Type" header
    //     });
    // }, []);


    function uploadFile() {
        let formData = new FormData(); 
        formData.append('ownerid', propertyName);   //append the values with key, value pair
        formData.append('Image', Image);
        formData.append('vehicleName', vehicleName);
        formData.append('vehicleNumber', vehicleNumber);
        formData.append('vehicleChassisNumber', vehicleChassisNumber);
        
        let response = fetch('http://localhost:9090/VehicalRequest', {
            headers: {
                    'content-type': 'multipart/form-data; boundary=gc0p4Jq0M2Yt08jU534c0p'
                },
                method: 'POST',
                mode: 'cors',
                body: formData // body data type must match "Content-Type" header
          }); 
        if (response.status == 200) {
           alert("File successfully uploaded.");
        }
      }


    console.log("Test Image "+Image);
    console.log("Test ownerid "+propertyName);
    console.log("Test vehicleName "+vehicleName);
    console.log("Test vehicleNumber "+vehicleNumber);
    console.log("Test vehicleChassisNumber "+vehicleChassisNumber);




    // Logout
    function logout() {
        navigate("/")
    }

    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{ backgroundColor: '#1A374D' }}>
            <br /><br /><br />
            <div className="container py-3 pt-0 pb-2" >
            <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white h3 display-7" style={{ backgroundColor: '#712B75' }}>
                    &nbsp;&nbsp;
                        <img
                            class="d-block w-10 h-3"
                            src={Logo}
                            alt="Image Two"
                        />&nbsp;&nbsp; <span>Vehicle Rental System </span>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="nav navbar-right mx-auto ">
                            <button class="btn btn-primary btn-sm " onClick={logout}>LOGOUT</button>
                        </div>
                    </nav>
                </header>
                    <div className="text-center m-3-auto pt-2 mb-1" id='userLogin'>
                    <h1>Rent Out Your Vehicle</h1>
                    <div class='pull-left'>
                    </div>
                <form>
                    {
                        ownerid.map(
                            bookings =>
                            <div class='pull-center'>
                                <h3>
                                    <b><u>Owner ID : {bookings.ownerid}</u></b>
                                </h3>
                                <br/>
                            </div>
                        )
                    }
                        <div className="row g-2">
                            <div className="col-5">
                                <label for="validationTooltip01" id='userdetails'>Vehicle Name</label>
                                <input 
                                    class="form-control"
                                    placeholder="Enter Vehicle Name"style={{ border: '2px solid rgb(32, 31, 31)' }} type="text" className="form-control" required 
                                    name="vehicleName"
                                    value={vehicleName}
                                    onChange={(event) => {
                                        setvehicleName(event.target.value);
                                    }}
                                />
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <div className="col-5">
                                <label for="validationTooltip02" id='userdetails'>Vehicle Number</label>
                                <input class="form-control"
                                    placeholder="Enter Vehicle Number"
                                    style={{ border: '2px solid rgb(32, 31, 31)' }} type="text" className="form-control" required 
                                    name="vehicleNumber"
                                    value={vehicleNumber}
                                    onChange={(event) => {
                                        setvehicleNumber(event.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 col-md-2 position-relative">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <label for="validationTooltip02" id='userdetails'>UploadImage</label>
                                </div>
                                <div class="custom-file">
                                    <input type="file" 
                                        name="Image"
                                        onChange={(event) => {
                                            setvehicleImage(event.target.files[0]);
                                        }}
                                    />
                                    <label class="custom-file-label" >&nbsp;choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <label for="validationTooltip03" id='userdetails'>Chassis Number </label>
                            <input class="form-control"
                                placeholder="Enter Chassis Number"
                                style={{ border: '2px solid rgb(32, 31, 31)' }} type="text" className="form-control" required
                                name="vehicleChassisNumber"
                                value={vehicleChassisNumber}
                                onChange={(event) => {
                                    setvehicleChassisNumber(event.target.value);
                                }}
                            />
                        </div>
                        <div className="col-12">
                            <button id="sub_btn" onClick={uploadFile} type="submit">Submit Request</button>
                        </div>
                    </form >
                    {/* <footer>
                        <br />
                    </footer> */}
                </div>
            </div></body>
    );
}
