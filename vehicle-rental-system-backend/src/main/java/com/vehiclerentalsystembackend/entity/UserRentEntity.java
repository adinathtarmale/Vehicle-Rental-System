package com.vehiclerentalsystembackend.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "UserRentDetails", 
uniqueConstraints = @UniqueConstraint(columnNames = { "driversLicence"}))
public class UserRentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String paymentId;
	
	@Column(length = 30)
	//@NotBlank(message = "Travel Distance is mandatory")
	private String  travelDistance;
	
	@Column(length = 30)
	//@NotBlank(message = "Drivers Licence is mandatory")
	private String  driversLicence;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	//@NotNull
	private LocalDate  bookingDate;

	//@NotNull
	//@Size(min = 2, message = "Paid-Amount must not be empty")
	private double amountPaid;

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getTravelDistance() {
		return travelDistance;
	}

	public void setTravelDistance(String travelDistance) {
		this.travelDistance = travelDistance;
	}

	public String getDriversLicence() {
		return driversLicence;
	}

	public void setDriversLicence(String driversLicence) {
		this.driversLicence = driversLicence;
	}

	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public double getAmountPaid() {
		return amountPaid;
	}

	public void setAmountPaid(double amountPaid) {
		this.amountPaid = amountPaid;
	}

	public UserRentEntity(@NotBlank(message = "Travel Distance is mandatory") String travelDistance,
			@NotBlank(message = "Drivers Licence is mandatory") String driversLicence, @NotNull LocalDate bookingDate,
			@NotNull @Size(min = 2, message = "Paid-Amount must not be empty") double amountPaid) {
		super();
		this.travelDistance = travelDistance;
		this.driversLicence = driversLicence;
		this.bookingDate = bookingDate;
		this.amountPaid = amountPaid;
	}

	public UserRentEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "UserRentEntity [paymentId=" + paymentId + ", travelDistance=" + travelDistance + ", driversLicence="
				+ driversLicence + ", bookingDate=" + bookingDate + ", amountPaid=" + amountPaid + "]";
	}

}
