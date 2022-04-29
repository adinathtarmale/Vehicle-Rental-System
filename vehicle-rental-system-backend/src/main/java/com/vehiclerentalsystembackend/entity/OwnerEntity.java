package com.vehiclerentalsystembackend.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name = "OwnerDetails", 
uniqueConstraints = @UniqueConstraint(columnNames = { "ownerEmail"}))
public class OwnerEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ownerid;
	
	@Column(length = 30)
	private String ownerFirstName;
	
	@Column(length = 30)
	private String ownerLastName;
	
	@Column(length = 40)
	private String ownerPassword;
	
	@Column(length = 30, unique=true)
	private String ownerEmail;
	
	@Column(length = 12)
	private String ownerMobile;
	
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private byte[]  ownerAdhaarDetails;


	public int getOwnerid() {
		return ownerid;
	}

	public void setOwnerid(int ownerid) {
		this.ownerid = ownerid;
	}

	public String getOwnerFirstName() {
		return ownerFirstName;
	}

	public void setOwnerFirstName(String ownerFirstName) {
		this.ownerFirstName = ownerFirstName;
	}

	public String getOwnerLastName() {
		return ownerLastName;
	}

	public void setOwnerLastName(String ownerLastName) {
		this.ownerLastName = ownerLastName;
	}

	public String getOwnerPassword() {
		return ownerPassword;
	}

	public void setOwnerPassword(String ownerPassword) {
		this.ownerPassword = ownerPassword;
	}

	public String getOwnerEmail() {
		return ownerEmail;
	}

	public void setOwnerEmail(String ownerEmail) {
		this.ownerEmail = ownerEmail;
	}

	public String getOwnerMobile() {
		return ownerMobile;
	}

	public void setOwnerMobile(String ownerMobile) {
		this.ownerMobile = ownerMobile;
	}


	
	
	public byte[] getOwnerAdhaarDetails() {
		return ownerAdhaarDetails;
	}

	public void setOwnerAdhaarDetails(byte[] ownerAdhaarDetails) {
		this.ownerAdhaarDetails = ownerAdhaarDetails;
	}
	
	
	public OwnerEntity(int ownerid) {
		super();
		this.ownerid = ownerid;
	}
	
	@OneToMany(mappedBy = "ownerEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<VehicleEntity> vehicleEntity = new ArrayList<>();

	public OwnerEntity() {
		super();
	}

	public OwnerEntity(String ownerFirstName, String ownerLastName, String ownerPassword, String ownerEmail,
			String ownerMobile, byte[] ownerAdhaarDetails) {
		super();
		this.ownerFirstName = ownerFirstName;
		this.ownerLastName = ownerLastName;
		this.ownerPassword = ownerPassword;
		this.ownerEmail = ownerEmail;
		this.ownerMobile = ownerMobile;
		this.ownerAdhaarDetails = ownerAdhaarDetails;
	}
		
}
