package com.vehiclerentalsystembackend.controller;

import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vehiclerentalsystembackend.entity.OwnerEntity;
import com.vehiclerentalsystembackend.service.OwnerService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class OwnerController {
	@Autowired
	OwnerService ownerService;
	
//	// insert (owner registration)
//	@PostMapping("/ownerRegistration")
//	public ResponseEntity<OwnerEntity> newOwnerRegistration(@RequestBody @Valid OwnerEntity ownerEntity){
//		try { 
//			return ResponseEntity.status(HttpStatus.CREATED).body(ownerService.addNewOwner(ownerEntity));
//			}
//		catch(Exception e) {
//		  	e.getStackTrace(); 
//		  	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); 
//		} 
//	}
	
	@PostMapping("/ownerRegistration")
	public ResponseEntity<?> userRegistration(@RequestParam("ownerAdhaar")MultipartFile Image,
												@RequestParam("ownerFirstName") String ownerFirstName,
												@RequestParam("ownerLastName") String ownerLastName,
												@RequestParam("ownerPassword") String ownerPassword,
												@RequestParam("ownerEmail") String ownerEmail,
												@RequestParam("ownerMobile") String ownerMobile
												){
		try {
				String fileName = StringUtils.cleanPath(Image.getOriginalFilename());
				if (fileName.contains("..")) {
					System.out.println("not a a valid file");
				}
				MultipartFile ownerAdhaarDetails = Image;
				ownerService.addNewOwner(ownerAdhaarDetails.getBytes(), ownerFirstName, ownerLastName, ownerPassword, ownerEmail, ownerMobile);
		        return ResponseEntity.ok().build();
			} catch (IOException e) {
				e.printStackTrace();
			}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();	
		}
	
	
	
	
	
		
	// owner login
	@PostMapping("/ownerLogin")
	public ResponseEntity<List<OwnerEntity>> userAuthentication(@RequestBody  @Valid OwnerEntity request){
		
		List<OwnerEntity> owner = ownerService.ownerLogin(request.getOwnerEmail());
		if(!owner.isEmpty()) {
			OwnerEntity validUser =  owner.get(0);
			if(validUser.getOwnerPassword().equals(request.getOwnerPassword()) && validUser.getOwnerEmail().equals(request.getOwnerEmail())) {
				try {
					return ResponseEntity.status(HttpStatus.OK).body(owner);	
				}catch(Exception e) {
				  	e.getStackTrace(); 
				  	return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); 
				} 
			}
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();	
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();	
	}
	

	// Owner Vehicle Registration Request	
	@PostMapping("/VehicalRequest")
	public ResponseEntity<?> newVehicleRegisterRequest(@RequestParam("vehicleImage")MultipartFile Image,
														@RequestParam("vehicleName") String vehicleName,
														@RequestParam("vehicleNumber") String vehicleNumber,
														@RequestParam("vehicleChassisNumber") String vehicleChassisNumber,
														@RequestParam("ownerid") OwnerEntity ownerEntity){
											
		
		try {
			    String vehicleReqestStatus = "pending";
				String fileName = StringUtils.cleanPath(Image.getOriginalFilename());
				if (fileName.contains("..")) {
					System.out.println("not a a valid file");
				}
				MultipartFile vehicleImage = Image;
		        ownerService.addNewVehicleRequest(vehicleReqestStatus, vehicleName, vehicleNumber,vehicleImage.getBytes(), vehicleChassisNumber, ownerEntity);
		        return ResponseEntity.ok().build();
			} catch (IOException e) {
				e.printStackTrace();
			}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();	
		}
	
		
	 // owner password update
	 @PostMapping("/ownerForgotPassword")
	 public ResponseEntity<Boolean> getAllBooking(@RequestBody OwnerEntity request ){
	
		 if(request.getOwnerEmail()!=null && request.getOwnerPassword()!=null) {
			 List<OwnerEntity> validOwner = ownerService.findByOwnerEmail(request.getOwnerEmail());
			 OwnerEntity user = validOwner.get(0);
			 
			 if(user.getOwnerEmail().equals(request.getOwnerEmail())) {
				 ownerService.updatePassword(request.getOwnerEmail(), request.getOwnerPassword());
				 boolean result=true;
				 return ResponseEntity.status(HttpStatus.OK).body(result);
			 } 
			 boolean res = false;
			 return ResponseEntity.status(HttpStatus.FORBIDDEN).body(res);
		 }
		 boolean res = false;
		 return ResponseEntity.status(HttpStatus.FORBIDDEN).body(res);
	 }
	
	 
	 // get Ownerid by email
	 @PostMapping("/getOwnerIdbyEmail")
	 public ResponseEntity<List<OwnerEntity>> getOwnerId(@RequestBody OwnerEntity request ){
	
		 if(request.getOwnerEmail()!=null) {
			 List<OwnerEntity> validOwner = ownerService.findByOwnerEmail(request.getOwnerEmail());
			 OwnerEntity owner = validOwner.get(0);
			 
			 if(owner.getOwnerEmail().equals(request.getOwnerEmail())) {
				 return ResponseEntity.status(HttpStatus.OK).body(validOwner);
			 } 
			 return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		 }
		 return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
	 }
	 	 
	
	// (PENDING)-----------------------------------------
	// // security

}
