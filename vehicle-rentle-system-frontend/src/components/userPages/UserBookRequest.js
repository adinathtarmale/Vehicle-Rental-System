import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Images/speed-car-logo.png';

import '../../App.css';
import UserService from '../../services/UserService';


function UserBookRequest() {
    const [userAllVehicles, setAllVehicles] = useState([]);
    const [vehicleReqestId, setvehicleReqestId] = useState('');

    //const vehicleChassisNumber = ReactSession.get("vehicleChassisNumber");
    const vehicleChassisNumber = localStorage.getItem("vehicleChassisNumber");
    const navigate = useNavigate('');

    useEffect(() => {
        UserService.getAllVehicles().then((res) => {
            setAllVehicles(res.data);
        })
        .catch((err) => {
            console.error(err);
            alert(err);
        });
    }, []);

    console.log("testing link: "+JSON.stringify(userAllVehicles))
    //console.log("Test"+vehicleChassisNumber)

    console.log("testing link: "+userAllVehicles);
    //console.log("testing link: "+{userAllVehicles});


    function mybookingsClick() {
        navigate("/UserBookVehiclesList")
    }

    // Logout
    function logout() {
        navigate("/")
    }
    // booking request
    function bookVehicleOnRent() {
        var formData = JSON.stringify({ vehicleReqestId, vehicleChassisNumber });

        // Send data to the backend via POST
        fetch('http://localhost:9090/bookVehicle', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            mode: 'cors',
            body: formData // body data type must match "Content-Type" header
        }).then(navigate("/UserBookVehiclesList"));
        window.location.reload(false);
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
                    <h1 className="text-center">All Available Vehicles</h1>
                    <br></br><br></br>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Vehicle Id</td>
                                <td>Vehicle Status</td>
                                <td>Vehicle Name</td>
                                <td>Vehicle Number</td>
                                <td>Vehicle Image</td>
                            </tr>
                        </thead>
                        <tbody>
                        {/* <p>{console.log("test "+typeof(userAllVehicles))}</p> */}
                            {
                                userAllVehicles.map(
                                    vehicles =>
                                        <tr key={vehicles.vehicleReqestId}>
                                            <td> {vehicles.vehicleReqestId}</td>
                                            <td> {vehicles.vehicleReqestStatus}</td>
                                            <td> {vehicles.vehicleName}</td>
                                            <td> {vehicles.vehicleNumber}</td>
                                             <td><img src={"data:image/jpeg;base64,"+vehicles.vehicleImage} style={{ height: 200, width: 200}}/></td>
                                        </tr>
                                        
                                )
                            }
                        </tbody>
                    </table>
                    <div class="pull-left">
                        <tr>
                            <td >
                                <h2><span class="pull-left badge badge-light ">Enter vehicle Id and Book Vehicle On Rent</span></h2>
                                <div class="w-50">
                                    <input
                                        style={{ border: '1px rgb(32, 31, 31)' }} type="text"
                                        name="vehicleReqestId"
                                        value={vehicleReqestId}
                                        onChange={(event) => {
                                            setvehicleReqestId(event.target.value);
                                        }}
                                        placeholder='Vehicle ID ' required
                                    >
                                    </input>
                                    <button onClick={bookVehicleOnRent} type="submit" class="btn btn-primary btn-sm">Book</button>
                                    <div class="pull-left">
                                    <p class="text-white" >
                                        {/* do not delete the STYLE TAG its causing page render error */}
                                    <span STYLE="font-size:70%">* check if vehicle ID is valid and status is Aceepted</span></p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </div>
                </div>
                <div class="pull-right">
                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <button class=" btn btn-warning btn-md pull-right "  onClick={mybookingsClick}>  &nbsp;&nbsp;&nbsp;My Bookings</button>
                    </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br />
        </body>
    )
}

export default UserBookRequest;