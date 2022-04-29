package com.vehiclerentalsystembackend.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name = "UserDetails", 
uniqueConstraints = @UniqueConstraint(columnNames = {"userEmail"}))
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userid;
	
	@Column(length = 30)
	private String userFirstName;
	
	@Column(length = 30)
	private String userLastName;
	
	@Column(length = 40)
	private String userPassword;
	
	@Column(length = 30, unique=true, nullable = false)
	private String userEmail;
	
	@Column(length = 12)
	private String userMobile;
	
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private byte[] userAdhaarDetails;

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUserFirstName() {
		return userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	public String getUserLastName() {
		return userLastName;
	}

	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}


	public byte[] getUserAdhaarDetails() {
		return userAdhaarDetails;
	}

	public void setUserAdhaarDetails(byte[] userAdhaarDetails) {
		this.userAdhaarDetails = userAdhaarDetails;
	}
	

	public UserEntity(String userFirstName, String userLastName, String userPassword, String userEmail,
			String userMobile, byte[] userAdhaarDetails) {
		super();
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.userMobile = userMobile;
		this.userAdhaarDetails = userAdhaarDetails;
	}

	public UserEntity() {
		super();
	}

	@Override
	public String toString() {
		return "UserEntity [userid=" + userid + ", userFirstName=" + userFirstName + ", userLastName=" + userLastName
				+ ", userPassword=" + userPassword + ", userEmail=" + userEmail + ", userMobile=" + userMobile
				+ ", userAdhaarDetails=" + Arrays.toString(userAdhaarDetails) + "]";
	}
	
}
