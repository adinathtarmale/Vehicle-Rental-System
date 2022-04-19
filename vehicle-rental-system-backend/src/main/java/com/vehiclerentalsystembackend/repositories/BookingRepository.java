package com.vehiclerentalsystembackend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.vehiclerentalsystembackend.entity.BookingEntity;

public interface BookingRepository extends JpaRepository<BookingEntity, Integer>{
	
	@Query("select book from BookingEntity book where book.userEmail=:userEmail")
	List<BookingEntity> findByuserEmail(@Param("userEmail") String userEmail);

	@Query("select booking from BookingEntity booking where booking.bookingId=:bookingId")
	List<BookingEntity> findBookingById(@Param("bookingId") int bookingId);

	//payment accepting
	@Transactional
	@Modifying
	@Query("update BookingEntity booking set booking.paymentStatus='Payment Done' where booking.bookingId=:bookingId")
	void updatePaymentById(@Param("bookingId") int bookingId);
	
}
