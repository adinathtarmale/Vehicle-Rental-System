import axios from "axios";
import { ReactSession } from 'react-client-session';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import React, { useState, useEffect } from 'react';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';

class RazorPay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      amount: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.openPayModal = this.openPayModal.bind(this);
  }

  componentDidMount() {
                        
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }

  handleChange(evt) {
    console.log(evt.target.value)
    this.setState({
    amount: evt.target.value
    })
  }

  openPayModal(amt) {
    var amount = amt * 100; //Razorpay consider the amount in paise
    //var amount = 100000; //Razorpay consider the amount in paise
    var options = {
      "key": "yor razor pay key",
      "amount": 0, // 2000 paise = INR 20, amount in paisa
      "name": "Vehicle Rental System",
      "description": "Test Transaction",
      'order_id': "",
      "handler": function (response) {
        console.log(response);
        var values = {
          razorpay_signature: response.razorpay_signature,
          razorpay_order_id: response.razorpay_order_id,
          transactionid: response.razorpay_payment_id,
          transactionamount: amount,
        }
        var paymentType = ReactSession.get("paymentType");
        axios.post('http://localhost:9090/payment_gateway/success', values, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
          }
        })
          .then(res => { alert("Success") }, 
          )
          .catch(e => console.log(e))
      },
      "prefill": {
        "name": 'A T',
        "email": 'yourmail@email.com',
        "contact": '91278',
      },
      "notes": {
        "address": "India"
      },
      "theme": {
        "color": "#528ff0"
      }
    };
    axios.post('http://localhost:9090/payment_gateway/create_order', { amount: amount },{
    
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
    }
    })
      .then(res => {
        options.order_id = res.data.id;
        options.amount = res.data.amount;
        console.log(options)
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
      .catch(e => console.log(e))
  }

  render() {

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
                </div>
                <div class="nav navbar-right mx-auto ">
                  <Link to="/" class="btn btn-primary" >Logout</Link>
                </div>
            </nav>
        </header>
        <br/><br/><br/><br/>
        <div class="container">
            <center><p style={{color:'white'}}><h1><b>Payment Details</b></h1></p></center>
        </div>
        
      <div className="payment_gateway text-center m-3-auto pt-1 mb-1">
        <form className="form-inline justify-content-center" id="paymentid" >
          <div className="mb-3 row justify-content-center mx-4">
            <label className="col-sm-5 col-form-label">Enter Amount In Rupees:</label>
            <div className="col-sm-6">
              <input type="number" name="amount" onChange={this.handleChange} />
            </div>
            <br/><br/><br/>
            <button onClick={(e) => { this.openPayModal(this.state.amount); e.preventDefault(); }}>Pay INR </button>
          </div>
        </form>
      </div>
      <div className="">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                           <center> <Link to="/UserBookVehiclesList" class="btn btn-warning btn-md">Back</Link></center>
                        </div>
      </div>
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/>
      </body>
    );
  }

}


export default RazorPay;
