package com.vehiclerentalsystembackend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.vehiclerentalsystembackend.entity.OwnerEntity;


public interface OwnerRepository extends JpaRepository<OwnerEntity, Integer>{

		// owner login
		@Query("select owner from OwnerEntity owner where owner.ownerEmail=:ownerEmail")
		List<OwnerEntity> findOwnerByOwnerEmail(@Param("ownerEmail") String ownerEmail);
		
		@Transactional
		@Modifying
		@Query("update OwnerEntity owner set owner.ownerPassword=:ownerPassword where owner.ownerEmail=:ownerEmail")
		void updateOwnerPasswd(@Param("ownerEmail") String ownerEmail, @Param("ownerPassword") String ownerPassword);	
		
}
