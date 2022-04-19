import React from 'react';
import UserService from '../../services/UserService';

class UserGetAllVehicles extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            vehicles:[]
        }
    }

    componentDidMount(){
        UserService.getAllVehicles().then((response) => {
            this.setState({ vehicles: response.data})
            console.log(this.state.data)
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center">List Of Vehicles</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>vehicleReqestId</td>
                            <td>vehicleReqestStatus</td>
                            <td>vehicleName</td>
                            <td>vehicleNumber</td>
                            <td>vehicleImage</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.vehicles.map(
                                vehicles => 
                                <tr key = {vehicles.vehicleReqestId}>
                                     <td> {vehicles.vehicleReqestId}</td>
                                     <td> {vehicles.vehicleReqestStatus}</td>
                                     <td> {vehicles.vehicleName}</td>
                                     <td> {vehicles.vehicleNumber}</td>
                                     <td> {vehicles.vehicleImage}</td>
                                     <td> {vehicles.vehicleChassisNumber}</td>
                                     <td> {vehicles.ownerid.ownerid}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserGetAllVehicles;