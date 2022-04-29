package com.vehiclerentalsystembackend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.vehiclerentalsystembackend.entity.VehicleEntity;

public interface VehicleRepository extends JpaRepository<VehicleEntity, Integer>{

	// selecting vehicle all vehicles of a owner by owner id (admin operation)
	@Query("select vehicle from VehicleEntity vehicle where vehicle.ownerEntity.ownerid=:ownerId")
	List<VehicleEntity> findByownerId(@Param("ownerId") int ownerId);

	// for accepting owner request(Admin operation)
	@Transactional
	@Modifying
	@Query("update VehicleEntity vehicle set vehicle.vehicleReqestStatus='accepted' where vehicle.vehicleReqestId=:vehicleReqestId")
	void vehicleReqestId(@Param("vehicleReqestId") int vehicleReqestId);

	// selection for user booking(user operation) 
	@Query("select vehicle from VehicleEntity vehicle where vehicle.vehicleReqestId=:vehicleReqestId")
	List<VehicleEntity> findByReqestId(@Param("vehicleReqestId") int vehicleReqestId);
	
}