import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';
import AdminService from '../../services/AdminService';


function AdminDashboard() {
    const navigate = useNavigate('');

    function allVehicleRequestsHandleClick(){
        navigate("/ListVehicleRequest");
    }

    function allUsersHandleClick() {
        navigate("/ListAllUsers");
    }

    function allOwnersHandleClick(){
        navigate("/ListAllOwners")
    }
    function allOwnerBookHandleClick(){
        navigate("/UserBook")
    }
    function logout() {
        navigate("/")
    }

    return (
        <body className="mx-auto mt-0 pt-0 m-blank p-auto" style={{backgroundColor: '#1A374D'}}>
        <br/><br/><br/>
        <br/><br/><br/><br/>
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
    <p class='homeHeading'>Admin Dashboard</p>
    <div className='bg-primary'>
        <main>
    


             <div className="row row-cols-1 row-cols-md-4 mb-0 text-center">
                <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-1 text-white bg-primary border-primary">
                    
                    </div>
                    <div className="card-body">
                    <h1 className="card-title pricing-card-title">List<small className="text-muted fw-light"> Vehicle Request</small></h1>
                    
                    <button onClick={allVehicleRequestsHandleClick} type="button" className="w-50 btn btn-outline-primary ">Show</button>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-1 text-white bg-primary border-primary">
                    
                    </div>
                    <div className="card-body">
                    <h1 className="card-title pricing-card-title">List<small className="text-muted fw-light"> all<br/> Owners</small></h1>
                    
                    <button onClick={allOwnersHandleClick} type="button" className="w-50 btn btn-outline-primary ">Show</button>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-1 text-white bg-primary border-primary">
                    
                    </div>
                    <div className="card-body">
                    <h1 className="card-title pricing-card-title">List<small className="text-muted fw-light"> all <br/>Users</small></h1>
                    
                    <button onClick={allUsersHandleClick} type="button" className="w-50 btn btn-outline-primary ">Show</button>
                    </div>
                </div>
                </div>
                <div className="mx-auto center">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-1 text-white bg-primary border-primary">
                    
                    </div>
                    <div className="card-body center">
                    <h1 className="card-title pricing-card-title">List<small className="text-muted fw-light"> all User Bookings</small></h1>
                    
                    <button onClick={allOwnerBookHandleClick} type="button" className="w-50 btn btn-outline-primary ">Show</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-0 text-center">
            
            </div>
        </main>
      </div>
    </div>
    <br/><br/><br/>
    <br/><br/><br/>
    <br/><br/><br/>
  </body>
    )
}

export default AdminDashboard;
