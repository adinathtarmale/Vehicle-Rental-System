package com.vehiclerentalsystembackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehiclerentalsystembackend.entity.BookingEntity;
import com.vehiclerentalsystembackend.entity.UserEntity;
import com.vehiclerentalsystembackend.entity.VehicleEntity;
import com.vehiclerentalsystembackend.repositories.BookingRepository;
import com.vehiclerentalsystembackend.repositories.UserRepository;
import com.vehiclerentalsystembackend.repositories.VehicleRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;

	@Autowired
	VehicleRepository vehicleRepo;

	@Autowired
	BookingRepository bookingRepo;

	public void newUserRegistration(byte[] userAdhaarDetails, String userFirstName, String userLastName, String userPassword,
			String userEmail, String userMobile) {
		
		UserEntity usr = new UserEntity();
		usr.setUserAdhaarDetails(userAdhaarDetails);
		usr.setUserFirstName(userFirstName);
		usr.setUserLastName(userLastName);
		usr.setUserPassword(userPassword);
		usr.setUserEmail(userEmail);
		usr.setUserMobile(userMobile);
		userRepo.save(usr);
	}
	

	// user login
	public List<UserEntity> userLogin(String userEmail) {

		List<UserEntity> usr = userRepo.findUserByuserEmail(userEmail);
		return usr;
	}

	// for user vehicle selection
	public List<VehicleEntity> getVehicleById(int vehicleReqestId) {

		List<VehicleEntity> usr = vehicleRepo.findByReqestId(vehicleReqestId);
		return usr;
	}

	public BookingEntity insertUserBooking(BookingEntity bookingObj) {

		BookingEntity res = bookingRepo.save(bookingObj);
		return res;
	}

	public List<BookingEntity> showAlluserBookings(String userEmail) {
		List<BookingEntity> book = bookingRepo.findByuserEmail(userEmail);
		return book;
	}

	public void deleteUserBooking(int bookingId) {
		bookingRepo.deleteById(bookingId);
	}

	public List<BookingEntity> showAlluserBookingsById(int bookingId) {
		List<BookingEntity> book = bookingRepo.findBookingById(bookingId);
		return book;
	}

	public List<UserEntity> findByuserEmail(String userEmail) {
		List<UserEntity> usr = userRepo.findUserByuserEmail(userEmail);
		return usr;
	}

	public void updatePassword(String userEmail, String userPassword) {
		userRepo.updateUserPasswd(userEmail, userPassword);
	}

	// payment related
	public List<BookingEntity> getPaymentInfo(int bookingId) {
		return bookingRepo.findBookingById(bookingId);
	}

	public void acceptPayment(int bookingId) {
		bookingRepo.updatePaymentById(bookingId);
	}

}
