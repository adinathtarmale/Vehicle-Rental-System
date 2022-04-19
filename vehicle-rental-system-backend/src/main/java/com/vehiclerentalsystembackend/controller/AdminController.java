package com.vehiclerentalsystembackend.controller;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehiclerentalsystembackend.entity.AdminEntity;
import com.vehiclerentalsystembackend.entity.VehicleEntity;
import com.vehiclerentalsystembackend.service.AdminService;
import com.vehiclerentalsystembackend.service.OwnerService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@Autowired
	OwnerService ownerService;
	
	//admin login 
	@PostMapping("/adminLogin")
	public ResponseEntity<List<AdminEntity>> userAuthentication(@RequestBody  @Valid AdminEntity request){
		
		List<AdminEntity> admin = adminService.adminLogin(request.getUserName());
		if(!admin.isEmpty()) {
			AdminEntity validUser =  admin.get(0);
			if(validUser.getPassword().equals(request.getPassword()) && validUser.getUserName().equals(request.getUserName())) {
				try {
					return ResponseEntity.status(HttpStatus.OK).body(admin);	
				}catch(Exception e) {
				  	e.getStackTrace(); 
				  	return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); 
				} 
			}
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();	
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();	
	}
	

	// get all the users(Admin operation)
	 @GetMapping("/listAllUsers") 
	 public ResponseEntity<?> getAllUsers(){ 
		 return ResponseEntity.ok(adminService.showAllUsers());
	 }
	 
	 
	// get all the vehicles (Admin operation)
	 @GetMapping("/listAllOwners") 
	 public ResponseEntity<?> getAllOwners(){ 
		 return ResponseEntity.ok(adminService.showAllOwners());
	 }
	 
	 // getting all vehicles and their status
	 @GetMapping("/listAllVehicles")
	 public ResponseEntity<?> getAllVehicles(){ 
		 
		 return ResponseEntity.ok(adminService.showAllVehicles());
	 }
	 
	 
	 // get all vehicles of a particular owner (Admin operation)
	 @GetMapping("/listVehicles/{ownerId}")
	 public ResponseEntity<List<VehicleEntity>> getVehicles(@PathVariable("ownerId")  int ownerId) {
		 
		 List<VehicleEntity> vehicle = ownerService.selectVehicleByownerId(ownerId);
		 if(vehicle == null) {
			 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		 }
		 return ResponseEntity.of(Optional.of(vehicle));
	 }
	 
	// ----Accept owner vehicle request ( Admin operation)
	@PutMapping("/acceptVehicalRequest")		 
	public ResponseEntity<Void> acceptVehicalRequest(@RequestBody VehicleEntity request) {
		try{
			this.adminService.vehicalRequest(request.getVehicleReqestId());
				return ResponseEntity.status(HttpStatus.CREATED).build();
		}catch(Exception e) {
			e.getStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	 
	//---delete the vehicle add request of owner
	 @DeleteMapping("/deleteVehicleRequest")
	 public ResponseEntity<Void> deleteVehicleRequest(@RequestBody VehicleEntity request) {
		try{
			this.adminService.deleteVehicleRequestByvehicleReqestId(request.getVehicleReqestId());
			return ResponseEntity.status(HttpStatus.OK).build();
		}catch(Exception e) {
			e.getStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	 
	 @GetMapping("/listAllBookings")
	 public ResponseEntity<?> getAllBookings(){ 
		 return ResponseEntity.ok(adminService.showAllBooking());
	 }
	 
	 
	 
	// (PENDING)-----------------------------------------
	 // security
	 // optional --> if deleted owner then all of its vehicles should also be deleted
	 // (PENDING)-------------------------------------------
	 
}
