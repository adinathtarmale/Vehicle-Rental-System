import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

import AdminService from '../../services/AdminService';
import ListAllOwners from './ListAllOwners'

function OwnersVehiclesList() {
    const[ownerId,setOwnerId]=useState([]);
    const {ownerid} = useParams('');
    const navigate=useNavigate("");
     useEffect(() => {
        AdminService.showAllVehiclesPerOwner(ownerid).then((res) => {
            setOwnerId(res.data);
        })
        .catch((err) => {
        });
  }, []);
  function logout() {
    navigate("/")
}

//   const links = (this.props.link);
// {links.map((item, i) => (
//   {item.router}
// ))}




    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{backgroundColor: '#1A374D'}}>
        <br/><br/><br/>
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
                    <br/><br/><br/><br/>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Owner Id</td>
                                <td>Vehicle Id</td>
                                <td>Vehicle Status</td>
                                <td>Vehicle Name</td>
                                <td>Vehicle Number</td>
                                <td>Vehicle Chassis Number</td>
                                <td>Vehicle Image</td>
                            </tr>

                        </thead>
                        <tbody>
                        

                        {
                            ownerId.map(
                                ((request) =>
                                <tr key = {request.ownerid.ownerid}>
                                    <td>{request.ownerid}</td>
                                     <td> {request.vehicleReqestId}</td>
                                     <td> {request.vehicleReqestStatus}</td>
                                     <td> {request.vehicleName}</td>
                                     <td> {request.vehicleNumber}</td>
                                     <td> {request.vehicleChassisNumber}</td>
                                     <td> {request.vehicleImage}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                
        </div>


        
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
    </body>
    
    )
}

export default OwnersVehiclesList;