import httpClient from '../http-common';
import { ReactSession } from 'react-client-session';
import axios from 'axios';


//const ownerEmail = ReactSession.get("ownerEmail"); 
//const ownerEmail = "owner2@gmail.com";
const getOwnerId = () => {
    //return httpClient.post('http://localhost:9090/getOwnerIdbyEmail');
    
    return httpClient.post('http://localhost:9090/homePage');
  
  };

 
  // const upload=(data) =>{
  //         return axios.post("http://localhost:9090/VehicalRequest", data);
  // }


  
export default {getOwnerId};