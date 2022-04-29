package com.vehiclerentalsystembackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "VehicleDetails", 
uniqueConstraints = @UniqueConstraint(columnNames = { "vehicleNumber", "vehicleChassisNumber"}))
public class VehicleEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int vehicleReqestId;
	
	private String vehicleReqestStatus;
	
	@Column(length = 30)
	private String  vehicleName;
	
	@Column(length = 30)
	private String vehicleNumber;
	
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private byte[] vehicleImage;
	
	
	public byte[] getVehicleImage() {
		return vehicleImage;
	}

	public void setVehicleImage(byte[] vehicleImage) {
		this.vehicleImage = vehicleImage;
	}

	public OwnerEntity getOwnerEntity() {
		return ownerEntity;
	}

	public void setOwnerEntity(OwnerEntity ownerEntity) {
		this.ownerEntity = ownerEntity;
	}


	@Column(length = 20)
	private String vehicleChassisNumber;

	public int getVehicleReqestId() {
		return vehicleReqestId;
	}

	public void setVehicleReqestId(int vehicleReqestId) {
		this.vehicleReqestId = vehicleReqestId;
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

	public String getVehicleChassisNumber() {
		return vehicleChassisNumber;
	}

	public void setVehicleChassisNumber(String vehicleChassisNumber) {
		this.vehicleChassisNumber = vehicleChassisNumber;
	}

	public String getVehicleReqestStatus() {
		return vehicleReqestStatus;
	}

	public void setVehicleReqestStatus(String vehicleReqestStatus) {
		this.vehicleReqestStatus = vehicleReqestStatus;
	}
	
	
	
	
	public VehicleEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public VehicleEntity(String vehicleReqestStatus, String vehicleName, String vehicleNumber, byte[] vehicleImage,
		String vehicleChassisNumber, OwnerEntity ownerEntity) {
	super();
	this.vehicleReqestStatus = vehicleReqestStatus;
	this.vehicleName = vehicleName;
	this.vehicleNumber = vehicleNumber;
	this.vehicleImage = vehicleImage;
	this.vehicleChassisNumber = vehicleChassisNumber;
	this.ownerEntity = ownerEntity;
}


	// foreign key primary key of OwnerEntity
	@ManyToOne
    @JoinColumn(name="ownerid")
    private OwnerEntity ownerEntity;

	public OwnerEntity getOwnerid() {
		return ownerEntity;
	}

	public void setOwnerid(OwnerEntity ownerEntity) {
		this.ownerEntity = ownerEntity;
	}

	@Override
	public String toString() {
		return "VehicleEntity [vehicleReqestId=" + vehicleReqestId + ", vehicleReqestStatus=" + vehicleReqestStatus
				+ ", vehicleName=" + vehicleName + ", vehicleNumber=" + vehicleNumber + ", vehicleImage=" + vehicleImage
				+ ", vehicleChassisNumber=" + vehicleChassisNumber + ", ownerEntity=" + ownerEntity + "]";
	}
	
	

}
