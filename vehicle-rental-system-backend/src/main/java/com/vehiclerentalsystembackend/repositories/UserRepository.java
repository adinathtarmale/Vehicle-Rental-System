package com.vehiclerentalsystembackend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.vehiclerentalsystembackend.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	
	//user login related
	@Query("select usr from UserEntity usr where usr.userEmail=:userEmail")
	List<UserEntity> findUserByuserEmail(@Param("userEmail") String userEmail);

	@Transactional
	@Modifying
	@Query("update UserEntity user set user.userPassword=:userPassword where user.userEmail=:userEmail")
	void updateUserPasswd(@Param("userEmail") String userEmail, @Param("userPassword") String userPassword);
	
}
