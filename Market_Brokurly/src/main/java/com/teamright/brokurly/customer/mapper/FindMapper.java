package com.teamright.brokurly.customer.mapper;

import org.apache.ibatis.annotations.Param;

public interface FindMapper {
	// ���̵� ã��(��������)
	public String getID(@Param("customer_name")String customer_name, 
						@Param("customer_email")String customer_email);
	
	// ��й�ȣ ã��(��������)
	public String getPW(@Param("customer_name")String customer_name,
						@Param("customer_id")String customer_id,
						@Param("customer_email")String customer_email);
	
	// ��й�ȣ ����
	public void changePW(@Param("customer_pw")String customer_pw,
			 			 @Param("customer_id")String cusotmer_id);
}