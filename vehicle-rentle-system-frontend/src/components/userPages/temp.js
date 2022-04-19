import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session';

import Carousel from 'react-bootstrap/Carousel';

import Image1 from '../Images/download.jpg';
import Image2 from '../Images/elantra.jpg';
import Image3 from '../Images/palisade-lx2-highlights-kv-pc.jpg';
import Image4 from '../Images/tucson.jpg';
import Image5 from '../Images/hyundai-story.jpg';
import Logo from '../Images/speed-car-logo.png';

import '../../App.css';
import OwnerService from '../../services/OwnerService';


function VehicleRentDetails() {
    const ownerEmail = ReactSession.get("ownerEmail"); 

    const [ownerid, setOwnerId] = useState('');
    //const [userBookings, setAllBookings] = useState([]);

    //const vehicleChassisNumber = ReactSession.get("vehicleChassisNumber");

    const navigate = useNavigate('');


    useEffect(() =>{
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


    },[]);

    console.log("owner Id "+ownerid.ownerid);
    // const test = (ownerid[0].ownerid);
    // console.log("testing "+test)

    // Logout
    function logout() {
        navigate("/")
    }
    // Owner request for vehicle on rent
    function ownerAddVehicle() {
        var formData = JSON.stringify({ownerid});

        // Send data to the backend via POST
        fetch('http://localhost:9090/VehicalRequest', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            mode: 'cors',

            body: formData // body data type must match "Content-Type" header
        }).then(navigate("/OwnerRequest"));
    }

    function ownerSearchVehicle() {
        var formData = JSON.stringify({ownerid});

        // Send data to the backend via POST
        fetch('http://localhost:9090/VehicalRequest', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            mode: 'cors',

            body: formData // body data type must match "Content-Type" header
        })
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
                <div className="text-center m-5-auto pt-2" id='userLogin'>
                    <h1 className="text-center">All Booked Vehicles</h1>

                    <h3>Owner ID: {ownerid[0].ownerid}</h3>
                    <br></br><br></br>
                    {/* <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Vehicle Id</td>
                                <td>Vehicle Name</td>
                                <td>Vehicle Number</td>
                                <td>Owner Id</td>
                            </tr>
                        </thead>
                        <tbody>

                        <p>{console.log(typeof(userAllVehicles))}</p>
                            {
                                userBookings.map(
                                    bookings =>
                                        <tr key={bookings.vehicleReqestId}>
                                            <td> {bookings.vehicleReqestId}</td>
                                            <td> {bookings.vehicleName}</td>
                                            <td> {bookings.vehicleNumber}</td>
                                            <td> {bookings.ownerid}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table> */}

                    {/* <div class="pull-left">
                        <tr>
                            <td >
                                <h3><span class="pull-left badge badge-light ">Enter Owner-Id to set your vehicle for rent</span></h3>

                                <div class="w-25">
                                    <input
                                        style={{ border: '1px rgb(32, 31, 31)' }} type="text"
                                        name="ownerid"
                                        value={ownerid}
                                        onChange={(event) => {
                                            setOwnerId(event.target.value);
                                        }}
                                        placeholder='Owner ID' required

                                    >
                                    </input>
                                   
                                    <button onClick={ownerAddVehicle} type="submit" class="btn btn-primary btn-sm">Add Vehicle</button>
                                    <div class="pull-left">
                                    <p class="text-white" >
                                    <span STYLE="font-size:70%"></span></p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </div> */}

                    
                    {/* <div class="pull-right">
                        <tr>
                                    
                            <td >
                            <h3><span class="pull-right badge badge-light  ">Enter Owner-ID to search all bookings</span></h3>

                                <div class="w-25 pull-right">
                                    <input
                                        style={{ border: '1px rgb(32, 31, 31)' }} type="text"
                                        name="ownerid"
                                        value={ownerid}
                                        onChange={(event) => {
                                            setOwnerId(event.target.value);
                                        }}
                                        placeholder='Owner ID' required

                                    >
                                    </input>
                                   
                                    <button onClick={ownerSearchVehicle} type="submit" class="btn btn-primary btn-sm">Search</button>
                                    <div class="pull-right">
                                    <p class="text-white" >
                                    <span STYLE="font-size:70%"></span></p>
                                    </div>
                                </div>
                               
                            </td>
                          
                        </tr>
                    </div> */}
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br />

        </body>
    )
}

export default VehicleRentDetails;