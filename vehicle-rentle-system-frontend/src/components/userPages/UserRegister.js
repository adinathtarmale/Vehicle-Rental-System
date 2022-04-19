import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import '../../App.css';
import Logo from '../Images/speed-car-logo.png';
import axios from 'axios';


function UserRegister() {   
    const [userFirstName, setFirstName] = useState('');
    const [userLastName, setLastName] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userAdhaarDetails, setAdhaarNo] = useState('');
    const [userMobile, setContactNo] = useState('');
    const [userEmail, setEmail] = useState('');
    const navigate = useNavigate('');

  //user registration form

    const handleImageFile = (event) =>{
        setAdhaarNo(event.target.files[0]);
    }

  function uploadFile() {
    let formData = new FormData(); 
    formData.append('userFirstName', userFirstName);   //append the values with key, value pair
    formData.append('userLastName', userLastName);
    formData.append('userPassword', userPassword);
    formData.append('userAdhaar', userAdhaarDetails);
    formData.append('userMobile', userMobile);
    formData.append('userEmail', userEmail);
    
    axios.post('http://localhost:9090/userRegistration', formData, {
        headers: {
                'Content-Type': 'multipart/form-data'
            }
      }).then(navigate("/UserLoginComponent"));
  }
  



 
  function handleErrors()
  {
     
      if(this.state.userFirstName.length===" ")
      {
          this.setState({userFirstNameerror:" "});
      }
      else if(this.state.userLastName.length===" ")
      {
          this.setState({userLastNameerror:" "});
      }
      else if(this.state.userPassword.length===" ")
      {
          this.setState({userPassworderror:" "});
      }
      else if(this.state.userAdhaarDetails.length===" ")
      {
          this.setState({userAdhaarDetailserror:" "});
      }
      else if(this.state.userMobile.length===" ")
      {
          this.setState({userMobileerror:" "});
      }
      else if(this.state.userEmail.length===" ")
      {
          this.setState({userEmaileerror:" "});
      }
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
                </nav>
            </header>
            <div className="text-center m-3-auto pt-1 mb-1" id='userLogin'>
                <h1>User Sign-up</h1>

                <form action='#' class="was-validated">

                    <div className="row g-2">
                        <div className="col-5">
                            <label for="validationTooltip01" id='userdetails'>First name</label>
                            <input class="form-control"
                             placeholder="Enter FirstName"
                            name="userFirstName" id="registerwidth" 
                            style={{ border: '2px solid rgb(32, 31, 31)' }} 
                            type="text" className="form-control"
                            value={userFirstName}
                            onChange={(event) => {
                                setFirstName(event.target.value);
                              }}
                            required />
                         
                        </div>
                        <div className="col-5">
                            <label for="validationTooltip02" id='userdetails'>Last name</label>
                            <input class="form-control"
                             placeholder="Enter LastName"
                             name="userLastName" 
                            style={{ border: '2px solid rgb(32, 31, 31)' }} 
                            type="text" className="form-control" 
                            value={userLastName}
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                            required />
                            
                        </div>
                       
                    </div>
                    <div className="col-6">
                            <label for="validationTooltip03" id='userdetails'>Set Password</label>
                              <input 
                            name="userPassword" 
                            class="form-control"
                             placeholder="Enter Password"
                            style={{ border: '2px solid rgb(32, 31, 31)' }} 
                            type="password"   
                            value={userPassword}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            required />                    
                      
                    </div>

                    <div className="col-6">
                        <label for="validationTooltip03" id='userdetails'>Adhaar Card No </label>
                        <input class="form-control"
                             type="file"
                            name="userAdhaarDetails"  
                            accept='image/*' 
                            onChange={handleImageFile}
                            required />
                        
                    </div>


                    <div className="col-6">
                        <label for="validationTooltip03" id='userdetails'>Contact No </label>
                        <input class="form-control"
                             placeholder="Enter ContactNumber"
                        name="userMobile"
                        style={{ border: '2px solid rgb(32, 31, 31)' }}
                       type="text"
                        className="form-control"
                        value={userMobile}
                        onChange={(event) => {
                            setContactNo(event.target.value);
                        }}
                        required />
                      
                        
                    </div>

                    <div className="col-6">
                        <label for="validationTooltip04" id='userdetails'>Email </label>
                        <input class="form-control"
                             placeholder="Enter Email"
                        name="userEmail" 
                        style={{ border: '2px solid rgb(32, 31, 31)' }} 
                        type="text" className="form-control" 
                        value={userEmail}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        required />
                        
                        
                    </div>

                    <div className="col-12">
                        <button 
                        onClick={uploadFile}
                        id="sub_btn" type="submit">Register</button>
                    </div>

                </form >
                <footer>
                    <p><b>Allready registered?</b>  <Link to="/UserLoginComponent"><b>Login</b></Link>.</p>
                    <p><Link to="/"><b>Back to Homepage</b></Link>.</p>
                    <br />
                </footer>
            </div>
        </div>

    </body>
);
}
export default UserRegister;

// IMP format

// import React, { useState } from 'react';
// import { Link, useNavigate} from 'react-router-dom';

// import '../../App.css';
// import Logo from '../Images/speed-car-logo.png';
// import axios from 'axios';


// import UserService from '../../services/UserService';


// function UserRegister() {   
//   var jsonData1 = {

//     "userFirstName": "john", 
//     "userLastName": "doe",
//     "userPassword": "12345673",
    
//     "userMobile": "98765432145",
//     "userAdhaarDetails": "129374546569",
//     "userEmail": "johny@gamil.com"

//   }

//   function handleClick() {
    
//     var formData = JSON.stringify(jsonData1);
//     // Send data to the backend via POST
//     fetch('http://localhost:9090/userRegistration', {

//         headers: {
//             'Accept': 'application/json, text/plain',
//             'Content-Type': 'application/json;charset=UTF-8'
//         },
//       method: 'POST', 
//       mode: 'cors', 
      
//       body: formData // body data type must match "Content-Type" header

//     })
//   }

//   return (
//     <div onClick={handleClick} style={{
//       textAlign: 'center',
//       width: '100px',
//       border: '1px solid gray',
//       borderRadius: '5px'
//     }}>
//       Send data to backend
//     </div>
//   );
// }

// export default UserRegister;
