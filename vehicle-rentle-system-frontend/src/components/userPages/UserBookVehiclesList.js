import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

export default function UserBookVehiclesList() {
    //const vehicleChassisNumber = ReactSession.get("vehicleChassisNumber");
    const vehicleChassisNumber = localStorage.getItem("vehicleChassisNumber");
    const [userBookings, setUserBookings] = useState([]);
    const navigate = useNavigate('');
    const [bookingId, setBookingId] = useState("");
    

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const getAllUserBookings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vehicleChassisNumber })
        };
        fetch('http://localhost:9090/showUserBookings', getAllUserBookings)
            .then(response => response.json())
            .then(data => setUserBookings(data));
            
    },[]);
   
    
    function logout() {
         navigate("/")
    }

    {
        var xyz = 0;
        userBookings.map(
            vehicles =>
            xyz  = vehicles.bookingId
        )
        console.log(xyz);
    }
    console.log()

        // to payment page
        function toPaymentClick() {
            var data = JSON.stringify({ bookingId });
            
            // Send data to the backend via POST
            fetch('http://localhost:9090/paymentInformation', {
    
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                method: 'POST',
                mode: 'cors',
    
                body: data // body data type must match "Content-Type" header
            }).then(navigate("/payment_gateway"));
        }

        // deleting request
        function deleteBookingClick() {
            var formData = JSON.stringify({ bookingId });
            // Send data to the backend via POST
            fetch('http://localhost:9090/deleteBooking', {
    
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                method: 'DELETE',
                mode: 'cors',
                body: formData
            })
            window.location.reload(false);
        }
        function bookAgainClick() {
            navigate("/UserBookRequest")
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
            <h1 className="text-center">All Bookings</h1>
            <br></br><br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Booking ID</td>
                        <td>Vehicle ID</td>
                        <td>Payment Status</td>
                        <td>Vehicle Name</td>
                        <td>Vehicle Number</td>
                        <td>Email</td>
                        {/* <td>Vehicle Image</td> */}
                        <td></td>
                    </tr>

                </thead>
                <tbody>
               

                    {
                        userBookings.map(
                            vehicles =>
                                <tr key={vehicles.bookingId}>
                                    <td> {vehicles.bookingId}</td>
                                    <td> {vehicles.vehicleId}</td>
                                    <td>{vehicles.paymentStatus}</td>
                                    <td> {vehicles.vehicleName}</td>
                                    <td> {vehicles.vehicleNumber}</td>
                                    <td> {vehicles.userEmail}</td>
                                    {/* <td><img src={"data:image/jpeg;base64,"+vehicles.vehicleImage} style={{ height: 150, width: 150}}/></td> */}
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
                                        name="bookingId"
                                        value={bookingId}
                                        onChange={(event) => {
                                            setBookingId(event.target.value);
                                        }}
                                        placeholder='Booking ID'>
                                    </input>
                                    <button onClick={toPaymentClick} type="submit" class="btn btn-primary btn-sm">Payment Detail</button>
                                </div>

                            </td>
                            <td>
                                <div class="w-50">
                                    <input
                                        style={{ border: '1px rgb(32, 31, 31)' }} type="text"

                                        name="bookingId"
                                        value={bookingId}
                                        onChange={(event) => {
                                            setBookingId(event.target.value);
                                        }}
                                        placeholder='Booking ID'>
                                    </input>
                                    <button onClick={deleteBookingClick} type="submit" class="btn btn-primary btn-sm">Delete Booking</button>
                                </div>
                            </td>
                        </tr>
                        <div> &nbsp;</div> <div> &nbsp; </div> <div> &nbsp; </div> <div>&nbsp; </div>
                    </div>
                    <div class="pull-right">
                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <button class=" btn btn-warning btn-md pull-right "  onClick={bookAgainClick}>  &nbsp;&nbsp;&nbsp;Book Again</button>
                    </div>
        </div>
        
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br />

</body>
  );
}
