package com.vehiclerentalsystembackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "UserBookings")
public class BookingEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;
	
	private int vehicleId;
	
	@Column(nullable = false)
	private String userEmail;  
	
	private String vehicleName;
	
	private String vehicleNumber;

	
	public String paymentStatus;

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	public int getBookingId() {
		return bookingId;
	}
	

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public int getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getVehicleName() {
		return vehicleName;
	}

	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}


	public BookingEntity(int bookingId, int vehicleId, String userEmail, String vehicleName, String vehicleNumber) {
		super();
		this.bookingId = bookingId;
		this.vehicleId = vehicleId;
		this.userEmail = userEmail;
		this.vehicleName = vehicleName;
		this.vehicleNumber = vehicleNumber;
	}
	
	public BookingEntity(int vehicleId, String userEmail, String vehicleName, String vehicleNumber, String paymentStatus) {
		super();
		this.vehicleId = vehicleId;
		this.userEmail = userEmail;
		this.vehicleName = vehicleName;
		this.vehicleNumber = vehicleNumber;
		this.paymentStatus = paymentStatus;
	}

	public BookingEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookingEntity(int bookingId, int vehicleId, String userEmail, String vehicleName, String vehicleNumber,
			String paymentStatus) {
		super();
		this.bookingId = bookingId;
		this.vehicleId = vehicleId;
		this.userEmail = userEmail;
		this.vehicleName = vehicleName;
		this.vehicleNumber = vehicleNumber;
		this.paymentStatus = paymentStatus;
	}

	@Override
	public String toString() {
		return "BookingEntity [bookingId=" + bookingId + ", vehicleId=" + vehicleId + ", userEmail=" + userEmail
				+ ", vehicleName=" + vehicleName + ", vehicleNumber=" + vehicleNumber + ", paymentStatus="
				+ paymentStatus + "]";
	}


}
