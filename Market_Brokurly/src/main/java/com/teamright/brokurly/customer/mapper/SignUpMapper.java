package com.teamright.brokurly.customer.mapper;

import com.teamright.brokurly.model.AddressVO;
import com.teamright.brokurly.model.CustomerVO;

public interface SignUpMapper {
	//���̵� üũ
	public String idCheck(String customer_id);
	//�̸��� üũ
	public String emailCheck(String customer_email);
	//��ȭ��ȣ üũ
	public String telCheck(String customer_tel);
	//ȸ������
	public void signUp(CustomerVO customerVO);
	//�ּ��Է�
	public void insertAddress(AddressVO addressVO);

	//Ż���ϱ⿡ ���� ����
	public void deleteId(String customer_id);
	public void deleteCart(String customer_id);
	public void deleteAddress(String customer_id);
	public void deleteCoupon(String customer_id);
}