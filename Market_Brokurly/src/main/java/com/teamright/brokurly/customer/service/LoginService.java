package com.teamright.brokurly.customer.service;

public interface LoginService {
   
	  //��й�ȣ ��ȣȭ
	   public String getSHA512(String customer_pw) throws Exception ;
	   
	   // ���̵� üũ
	   public String idCheck(String customer_id);
	   
	   // ��й�ȣ üũ
	   public String pwCheck(String customer_id);
	   
	   // �̸� ��������
	   public String getName(String customer_id);

}
