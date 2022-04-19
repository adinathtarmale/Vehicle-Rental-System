import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

import AdminService from '../../services/AdminService';
import OwnersVehiclesList from './OwnersVehiclesList';





function ListAllOwners() {
    const [getAllOwners, setAllOwners] = useState([]);
    const [ ownerId, setOwnerId ] = useState("");


    const navigate = useNavigate('');



     useEffect(() => {
        AdminService.showAllOwners().then((res) => {
            setAllOwners(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
  }, []);

  // sending owner id
    
  const setUpdateOwnerId = (e) =>{
    setOwnerId(e.target.value)
}
function back() {
    navigate("/AdminDashboard")
}

    const sendOwnerIdHandleClick = (e) => {
        e.preventDefault();
        navigate('/OwnersVehiclesList/'+ownerId);
      };
    
      // Logout
      function logout() {
         navigate("/")
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
                    <h1 className="text-center">All Owners</h1>
                    <br></br> <br></br>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Owner Id</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Mobile No.</td>
                                <td>Aadhaar-Image</td>
                            </tr>

                        </thead>
                        <tbody>
                        

                        {
                            getAllOwners.map(
                                owner =>
                                <tr key = {owner.ownerid}>
                                    <td>  {owner.ownerid} </td>
                                     <td>{owner.ownerFirstName}</td>
                                     <td> {owner.ownerLastName}</td>
                                     <td> {owner.ownerEmail}</td>
                                     <td> {owner.ownerMobile}</td>
                                     <td><img src={"data:image/jpeg;base64,"+owner.ownerAdhaarDetails} style={{ height: 200, width: 200}}/></td>
                                </tr>
                            )
                        }
                        
                        </tbody>
                        
                    </table>
                    
                                {/* <div class="pull-left">             // SELECTING ALL VEHICLES OF SEPECIFIED OWNER NOT DONE!!!
                                    <td>
                                    <div class="w-50">
                                     <input
                                        style={{ border: '1px rgb(32, 31, 31)' }} type="text"
                                        
                                        name="ownerId"
                                        value={ownerId}
                                        onChange={(e) => {
                                            setUpdateOwnerId(e)
                                        }}

                                        placeholder="Owner ID"
                                        ></input>
                                        <button onClick={(e)=>sendOwnerIdHandleClick(e)}  type="submit">Search</button>
                                        
                                        
                                        </div>
                                     </td>
                                </div> */}
                                
                </div>
                <div class="pull-right">
                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <button class=" btn btn-warning btn-md pull-right "  onClick={back}>  &nbsp;&nbsp;&nbsp;Back</button>
                        </div>
        </div>
      
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
    </body>
    )
}

export default ListAllOwners;