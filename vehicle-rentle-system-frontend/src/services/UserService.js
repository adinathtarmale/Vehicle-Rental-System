//import axios from 'axios';
import httpClient from '../http-common';

//const USER_GET_ALL_VEHICLES = "http://localhost:9090/homePage";

//const USER_REGISTRATION = "http://localhost:9090/userRegistration";

//const USER_LOGIN_URL = "http://localhost:9090/userLogin";

//-------------------------------- trying to use class components------------------------------
//export default class UserService {

   // getAllVehicles(){
     //   return httpClient.get(USER_GET_ALL_VEHICLES);
    //}
    
    // userLoginFront(user){
    //     return httpClient.post('/userLogin', user);
    // }

    // userLoginFront(userEmail, userPassword) {
    //     return axios.post('http://localhost:9090/userLogin', {
    //         userEmail: userEmail,
    //         userPassword: userPassword,
    //     });
    // }
//}

const getAllVehicles = () => {
    return httpClient.get('http://localhost:9090/homePage');
  };

  
export default {getAllVehicles};