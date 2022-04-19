import httpClient from '../http-common';

const showAllUsers = () => {
    return httpClient.get('http://localhost:9090/listAllUsers');
  };

  const showAllOwners = () => {
    return httpClient.get('http://localhost:9090/listAllOwners');
  };

  const showAllVehicleRequests = () => {
    return httpClient.get('http://localhost:9090/listAllVehicles');
  };

  const showAllVehiclesPerOwner = (ownerId) => {
    return httpClient.get('http://localhost:9090/listVehicles/' + ownerId);
  };
  

  const acceptVehicalRequest = () => {
    return httpClient.get('http://localhost:9090/listAllUsers');
  };

  const deleteVehicleRequest = () => {
    return httpClient.get('http://localhost:9090/listAllUsers');
  };

// Admin module Show all bookings
const showAllBookings = () => {
  return httpClient.get('http://localhost:9090/listAllBookings');
};


export default {showAllUsers, showAllOwners, showAllVehicleRequests, 
                showAllVehiclesPerOwner, acceptVehicalRequest, deleteVehicleRequest, showAllBookings}