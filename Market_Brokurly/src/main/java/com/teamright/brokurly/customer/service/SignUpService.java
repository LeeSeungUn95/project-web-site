package com.teamright.brokurly.customer.service;

import com.teamright.brokurly.model.CustomerVO;

public interface SignUpService {
	//���̵� �ߺ� üũ
	public String idCheck(String customer_id);
	//�̸��� üũ
	public String emailCheck(String customer_email);
	//��ȭ��ȣ üũ
	public String telCheck(String customer_tel);
	//ȸ�� ����
	public void signUp(CustomerVO customerVO);
}