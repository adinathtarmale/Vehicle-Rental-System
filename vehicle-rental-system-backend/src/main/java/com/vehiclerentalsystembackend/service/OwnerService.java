package com.vehiclerentalsystembackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehiclerentalsystembackend.entity.OwnerEntity;
import com.vehiclerentalsystembackend.entity.VehicleEntity;
import com.vehiclerentalsystembackend.repositories.BookingRepository;
import com.vehiclerentalsystembackend.repositories.OwnerRepository;
import com.vehiclerentalsystembackend.repositories.VehicleRepository;

@Service
public class OwnerService {

	@Autowired
	VehicleRepository vehicleRepo;

	@Autowired
	OwnerRepository ownerRepo;

	@Autowired
	BookingRepository bookingRepo;

	
	// owner registration(owner operation)
	public void addNewOwner(byte[] ownerAdhaarDetails, String ownerFirstName, String ownerLastName, String ownerPassword,
			String ownerEmail, String ownerMobile) {
		OwnerEntity owner = new OwnerEntity();
		owner.setOwnerAdhaarDetails(ownerAdhaarDetails);
		owner.setOwnerFirstName(ownerFirstName);
		owner.setOwnerLastName(ownerLastName);
		owner.setOwnerPassword(ownerPassword);
		owner.setOwnerEmail(ownerEmail);
		owner.setOwnerMobile(ownerMobile);
		ownerRepo.save(owner);
	}

	// owner login(Owner Operation)
	public List<OwnerEntity> ownerLogin(String ownerEmail) {
		List<OwnerEntity> owner = ownerRepo.findOwnerByOwnerEmail(ownerEmail);
		return owner;
	}

	// insert (owner operation)
	public void addNewVehicleRequest(String vehicleReqestStatus, String vehicleName, String vehicleNumber,
			byte[] vehicleImage, String vehicleChassisNumber, OwnerEntity ownerEntity) {

		VehicleEntity p = new VehicleEntity();
		p.setVehicleImage(vehicleImage);
		p.setVehicleReqestStatus(vehicleReqestStatus);
		p.setVehicleName(vehicleName);
		p.setVehicleNumber(vehicleNumber);
		p.setVehicleChassisNumber(vehicleChassisNumber);
		p.setOwnerid(ownerEntity);
		vehicleRepo.save(p);
	}

	// select all vehicles (user operation)
	public OwnerService(VehicleRepository vehicleRepository) {
		this.vehicleRepo = vehicleRepository;
	}

	public List<VehicleEntity> showAllVehicles() {
		List<VehicleEntity> list = (List<VehicleEntity>) vehicleRepo.findAll();
		return list;
	}

	// for selecting vehicle(user operation)
	public Optional<VehicleEntity> selectVehicleById(int vehicleId) {
		Optional<VehicleEntity> vehicle = vehicleRepo.findById(vehicleId);
		return vehicle;
	}

	// for selecting all vehicles of a particular owner(admin operation)
	public List<VehicleEntity> selectVehicleByownerId(int ownerId) {
		List<VehicleEntity> ownerVehicles = vehicleRepo.findByownerId(ownerId);
		return ownerVehicles;
	}

	public List<OwnerEntity> findByOwnerEmail(String ownerEmail) {
		List<OwnerEntity> usr = ownerRepo.findOwnerByOwnerEmail(ownerEmail);
		return usr;
	}

	public void updatePassword(String ownerEmail, String ownerPassword) {
		ownerRepo.updateOwnerPasswd(ownerEmail, ownerPassword);
	}

	

}
