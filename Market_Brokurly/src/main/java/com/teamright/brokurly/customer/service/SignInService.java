package com.teamright.brokurly.customer.service;

import java.util.List;

import com.teamright.brokurly.model.AddressVO;

public interface SignInService {
	// ��й�ȣ ��ȣȭ
	public String getSHA512(String customer_pw) throws Exception;
	// ���̵� üũ
	public String idCheck(String customer_id);
	// ��й�ȣ üũ
	public String pwCheck(String customer_id);
	// �̸� ��������
	public String getName(String customer_id);
	// �ּ� ��������
	public List<AddressVO> getAddress(String customer_id);
	// ��� ��������
	public String getGrade(String customer_id);
}