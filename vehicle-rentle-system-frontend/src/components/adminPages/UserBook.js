import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

import Logo from '../Images/speed-car-logo.png';
import '../../App.css';
import AdminService from '../../services/AdminService';

function UserBook() {
    const navigate = useNavigate('');

    // getting all users Bookings
    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        AdminService.showAllBookings().then((res) => {
            setAllBookings(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);


    // Logout
    function logout() {
        navigate("/")
    }

    function back() {
        navigate("/AdminDashboard")
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
                    <h1 className="text-center">All Booked Vehicles</h1>
                    {/* {people.map((data, idx) => (
                        <p >{data.name}</p>
                    ))} */}

                    <br></br><br></br>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Booking Id</td>
                                <td>Vehicle Id</td>
                                <td>Vehicle Name</td>
                                <td>Vehicle Number</td>
                                <td>Payment Status</td>
                                <td>User Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <p>{console.log(typeof(userAllVehicles))}</p> */}
                            {
                                allBookings.map(
                                    bookings =>
                                        <tr key={bookings.bookingId}>
                                            <td> {bookings.bookingId}</td>
                                            <td> {bookings.vehicleId}</td>
                                            <td> {bookings.vehicleName}</td>
                                            <td> {bookings.vehicleNumber}</td>
                                            <td> {bookings.paymentStatus}</td>
                                            <td> {bookings.userEmail}</td>
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
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br />

        </body>
    )
}

export default UserBook;
