package com.teamright.brokurly.customer.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.teamright.brokurly.customer.service.SignUpService;
import com.teamright.brokurly.model.CustomerVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/customer")
public class SignUpController {
	
	@Autowired
	SignUpService signupService;
	
	@RequestMapping(value="/signupPage", method=RequestMethod.GET, produces="application/text; charset=utf8") 
	public String signUp(CustomerVO customerVO) {
		customerVO.setCustomer_birth(customerVO.getCustomer_year() + customerVO.getCustomer_month() + customerVO.getCustomer_day());
		signupService.signUp(customerVO);
		
		return "/customer/signin";
	}
	
	//produces�� ajax�� ������ �Ѱܹ����� ���� ����
	@RequestMapping(value="/idcheck", method=RequestMethod.GET, produces="application/text; charset=utf8")
	@ResponseBody
	public String idCheck(HttpServletRequest request) {
		String result = signupService.idCheck(request.getParameter("customer_id"));
		return result;
	}
	
	@RequestMapping(value="/emailcheck", method=RequestMethod.GET, produces="application/text; charset=utf8")
	@ResponseBody
	public String eamilCheck(HttpServletRequest request) {
		String result = signupService.emailCheck(request.getParameter("customer_email"));
		return result;
	}
	
	@RequestMapping(value="/telcheck", method=RequestMethod.GET, produces="application/text; charset=utf8")
	@ResponseBody
	public String telCheck(HttpServletRequest request) {
		String result = signupService.telCheck(request.getParameter("customer_tel"));
		return result;
	}
	
}