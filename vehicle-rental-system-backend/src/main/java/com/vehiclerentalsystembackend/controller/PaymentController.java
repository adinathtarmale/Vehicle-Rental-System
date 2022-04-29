package com.vehiclerentalsystembackend.controller;


import java.util.Map;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.*;

@RestController
@RequestMapping("/payment_gateway")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class PaymentController {

	@PostMapping("/create_order")
	@ResponseBody
	public String createOrder (@RequestBody Map<String, Object> data) throws RazorpayException {
		System.out.println(data);
		int amt = Integer.parseInt(data.get("amount").toString());
		System.out.println(amt);
		RazorpayClient client = new RazorpayClient("rzp_test_pKIfVbWssiMvY1", "K0djVt5sjGFNh8Z7B2aYvcHI");
		JSONObject ob = new JSONObject();
		ob.put("amount", amt);
		ob.put("currency", "INR");
		ob.put("receipt", "txn_235425");
		
		Order order = client.Orders.create(ob);
		System.out.println(order);		
		return order.toString();
	}
	
	@PostMapping("/success")
	public void onSuccess (@RequestBody Map<String, Object> data) throws RazorpayException {
		System.out.println(data);
			
		
	}
}
