import httpClient from '../http-common';

const getAllVehicles = () => {
    return httpClient.get('http://localhost:9090/homePage');
  };

  
export default {getAllVehicles};
