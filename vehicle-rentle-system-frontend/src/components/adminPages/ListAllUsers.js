import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

import AdminService from '../../services/AdminService';


function ListAllUsers() {
    const [getAllUsers, setAllUser] = useState([]);
    const navigate = useNavigate('');

     useEffect(() => {
        AdminService.showAllUsers().then((res) => {
            setAllUser(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
  }, []);

  function logout() {
    navigate("/")
}
function back() {
    navigate("/AdminDashboard")
}
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
                    <h1 className="text-center ">All Users</h1>
                    <br></br><br></br>
                    <table class="table table-striped">
                        <thead class="thead-dark ">
                            <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile No.</th>
                            <th scope="col">Aadhaar Image</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                            getAllUsers.map(
                                user =>
                                <tr key = {user.userid}>
                                     <td scope="row"> {user.userid} </td>
                                     <td> {user.userFirstName}</td>
                                     <td> {user.userLastName}</td>
                                     <td> {user.userEmail}</td>
                                     <td> {user.userMobile}</td>
                                     <td><img src={"data:image/jpeg;base64,"+user.userAdhaarDetails} style={{ height: 200, width: 200}}/></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
            </div>
            <div class="pull-right">
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <button class=" btn btn-warning btn-md pull-right " onClick={back}>&nbsp;&nbsp;&nbsp;Back</button>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
    </body>
    )
}

export default ListAllUsers;