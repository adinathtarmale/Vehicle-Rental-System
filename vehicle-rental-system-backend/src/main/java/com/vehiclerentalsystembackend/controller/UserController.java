package com.vehiclerentalsystembackend.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vehiclerentalsystembackend.entity.BookingEntity;
import com.vehiclerentalsystembackend.entity.UserEntity;
import com.vehiclerentalsystembackend.entity.VehicleEntity;
import com.vehiclerentalsystembackend.service.OwnerService;
import com.vehiclerentalsystembackend.service.UserService;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class UserController {

	@Autowired
	OwnerService ownerService;

	@Autowired
	UserService usrService;
	
	// user Registration Request	
	@PostMapping("/userRegistration")
	public ResponseEntity<?> userRegistration(@RequestParam("userAdhaar")MultipartFile Image,
														@RequestParam("userFirstName") String userFirstName,
														@RequestParam("userLastName") String userLastName,
														@RequestParam("userPassword") String userPassword,
														@RequestParam("userEmail") String userEmail,
														@RequestParam("userMobile") String userMobile
														){
		try {
				String fileName = StringUtils.cleanPath(Image.getOriginalFilename());
				if (fileName.contains("..")) {
					System.out.println("not a a valid file");
				}
				MultipartFile userAdhaarDetails = Image;
				usrService.newUserRegistration(userAdhaarDetails.getBytes(), userFirstName, userLastName, userPassword, userEmail, userMobile);
		        return ResponseEntity.ok().build();
			} catch (IOException e) {
				e.printStackTrace();
			}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();	
		}
	

	// user login
	@PostMapping("/userLogin")
	public ResponseEntity<List<UserEntity>> userAuthentication(@RequestBody @Valid UserEntity request) {

		List<UserEntity> user = usrService.userLogin(request.getUserEmail());
		if (!user.isEmpty()) {
			UserEntity validUser = user.get(0);
			if (validUser.getUserPassword().equals(request.getUserPassword())
					&& validUser.getUserEmail().equals(request.getUserEmail())) {
				try {
					return ResponseEntity.status(HttpStatus.OK).body(user);
				} catch (Exception e) {
					e.getStackTrace();
					return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
				}
			}
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	// get all the vehicles
	@GetMapping("/homePage")
	public ResponseEntity<List<VehicleEntity>> getAllVehicales() {
		return ResponseEntity.ok(ownerService.showAllVehicles());
	}

	// User Booking vehicle
	@PostMapping("/bookVehicle")
	public ResponseEntity<BookingEntity> userBooking(@RequestBody @Valid VehicleEntity request) {

		List<VehicleEntity> vehicle = usrService.getVehicleById(request.getVehicleReqestId());
		String userEmail = request.getVehicleChassisNumber(); // holds userEmail
		if (!vehicle.isEmpty()) {

			VehicleEntity record = vehicle.get(0);
			if (record.getVehicleReqestStatus().equals("accepted")) {
				int vehicleId = record.getVehicleReqestId();
				String vehicleName = record.getVehicleName();
				String vehicleNumber = record.getVehicleNumber();
				String paymentStatus = "Pending";
				BookingEntity bookingObj = new BookingEntity(vehicleId, userEmail, vehicleName, vehicleNumber,
						paymentStatus);
				BookingEntity result = usrService.insertUserBooking(bookingObj);
				try {
					return ResponseEntity.status(HttpStatus.OK).body(result);
				} catch (Exception e) {
					e.getStackTrace();
					return ResponseEntity.status(HttpStatus.CONFLICT).build();
				}
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build();
	}

	// show user bookings
	@PostMapping("/showUserBookings")
	public ResponseEntity<List<BookingEntity>> getAllBooking(@RequestBody VehicleEntity request) {
		String userEmail = request.getVehicleChassisNumber();
		return ResponseEntity.ok(usrService.showAlluserBookings(userEmail));
	}

	// delete booking
	@DeleteMapping("/deleteBooking")
	public ResponseEntity<Boolean> getAllBooking(@RequestBody BookingEntity request) {

		List<BookingEntity> entityBookId = (List<BookingEntity>) usrService
				.showAlluserBookingsById(request.getBookingId());
		BookingEntity userBookId = entityBookId.get(0);
		if (userBookId.getBookingId() == request.getBookingId()) {
			usrService.deleteUserBooking(request.getBookingId());
			boolean res = true;
			return ResponseEntity.status(HttpStatus.OK).body(res);
		}
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(false);
	}

	// user password update
	@PostMapping("/userForgotPassword")
	public ResponseEntity<Boolean> getAllBooking(@RequestBody UserEntity request) {

		if (request.getUserEmail() != null && request.getUserPassword() != null) {
			List<UserEntity> validUser = usrService.findByuserEmail(request.getUserEmail());
			UserEntity user = validUser.get(0);

			if (user.getUserEmail().equals(request.getUserEmail())) {
				usrService.updatePassword(request.getUserEmail(), request.getUserPassword());
				boolean result = true;
				return ResponseEntity.status(HttpStatus.OK).body(result);
			}
			boolean res = false;
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(res);
		}
		boolean res = false;
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(res);
	}

	// payment info validation and updation
	@PostMapping("/paymentInformation")
	public ResponseEntity<String> paymentInfo(@RequestBody BookingEntity request) {
		try {
			List<BookingEntity> entityBookId = usrService.getPaymentInfo(request.getBookingId());
			BookingEntity userBookId = entityBookId.get(0);

			if (userBookId.getBookingId() == request.getBookingId()) {

				if (userBookId.getPaymentStatus().equals("Pending")) {
					usrService.acceptPayment(userBookId.getBookingId());
					return ResponseEntity.status(HttpStatus.OK).body("Payment successful.");
				} else {
					return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Paid Already.");
				}
			}
		} catch (Exception e) {
			e.getStackTrace();
			System.out.println("HANDLED EXECPTION USER 162 line:" + e);
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Check Booking Id");
	}

}
