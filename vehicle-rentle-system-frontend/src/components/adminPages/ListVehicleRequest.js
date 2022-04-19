import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

import AdminService from '../../services/AdminService';


function ListVehicleRequest() {
    const [userAllVehicleRequest, setAllRequest] = useState([]);
    const [vehicleReqestId, setvehicleReqestId] = useState("");
    const navigate = useNavigate('');

    useEffect(() => {
        AdminService.showAllVehicleRequests().then((res) => {
            setAllRequest(res.data);
        })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // accepting request
    function acceptRequest() {
        var formData = JSON.stringify({ vehicleReqestId });
        // Send data to the backend via POST
        fetch('http://localhost:9090/acceptVehicalRequest', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'PUT',
            mode: 'cors',

            body: formData // body data type must match "Content-Type" header
        });
        window.location.reload(false);
    }

    // deleting request
    function deleteRequest() {
        var formData = JSON.stringify({ vehicleReqestId });
        // Send data to the backend via POST
        fetch('http://localhost:9090/deleteVehicleRequest', {

            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'DELETE',
            mode: 'cors',

            body: formData // body data type must match "Content-Type" header
        }).then(navigate("/ListVehicleRequest"));
        window.location.reload(false);

    }
    function back() {
        navigate("/AdminDashboard")
    }
    function logout() {
        navigate("/")
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
                    <br /><br /><br />
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Vehicle Id</th>
                                <th scope="col">Vehicle Status</th>
                                <th scope="col">Vehicle Name</th>
                                <th scope="col">Vehicle Number</th>
                                <th scope="col">Vehicle Chassis Number</th>
                                <th scope="col">Vehicle Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userAllVehicleRequest.map(
                                    request =>
                                        <tr key={request.vehicleReqestId}>
                                            <td scope="row"> {request.vehicleReqestId}</td>
                                            <td> {request.vehicleReqestStatus}</td>
                                            <td> {request.vehicleName}</td>
                                            <td> {request.vehicleNumber}</td>
                                            <td> {request.vehicleChassisNumber}</td>
                                            <td><img src={"data:image/jpeg;base64,"+request.vehicleImage} style={{ height: 150, width: 150}}/></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div class="pull-left">
                        <tr>
                            <td >
                                <div class="w-50">
                                    <input
                                        style={{ border: '1px rgb(32, 31, 31)' }} type="text"
                                        name="vehicleReqestId"
                                        value={vehicleReqestId}
                                        onChange={(event) => {
                                            setvehicleReqestId(event.target.value);
                                        }}
                                        placeholder='Vehicle ID'>
                                    </input>
                                    <button onClick={acceptRequest} type="submit" class="btn btn-primary btn-sm">Accept</button>
                                </div>
                            </td>
                            <td>
                                <div class="w-50">
                                    <input
                                        style={{ border: '1px rgb(32, 31, 31)' }} type="text"

                                        name="vehicleReqestId"
                                        value={vehicleReqestId}
                                        onChange={(event) => {
                                            setvehicleReqestId(event.target.value);
                                        }}
                                        placeholder='Vehicle ID'>
                                    </input>
                                    <button onClick={deleteRequest} type="submit" class="btn btn-primary btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <div> &nbsp;</div> <div> &nbsp; </div> <div> &nbsp; </div> <div>&nbsp; </div>
                    </div>
                    <div class="pull-right">
                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <button class=" btn btn-warning btn-md pull-right "  onClick={back}>  &nbsp;&nbsp;&nbsp;Back</button>
                        </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br></br>
        </body>
    )
}

export default ListVehicleRequest;