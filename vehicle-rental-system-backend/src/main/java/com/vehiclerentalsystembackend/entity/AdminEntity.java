package com.vehiclerentalsystembackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "AdminDetails")
public class AdminEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int adminId;
	
	private String userName;
	
	private String password;

	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public AdminEntity(int adminId, @NotNull String userName, @NotNull String password) {
		super();
		this.adminId = adminId;
		this.userName = userName;
		this.password = password;
	}

	public AdminEntity() {
		super();
	}

	@Override
	public String toString() {
		return "AdminEntity [adminId=" + adminId + ", userName=" + userName + ", password=" + password + "]";
	}
	
	
}
