package com.teamright.brokurly.customer.mapper;

public interface LoginMapper {
	   // ���̵� üũ
	   public String idCheck(String customer_id);
	   
	   // ��й�ȣ üũ
	   public String pwCheck(String customer_id);
	   
	   // �̸� ��������
	   public String getName(String customer_id);
}
