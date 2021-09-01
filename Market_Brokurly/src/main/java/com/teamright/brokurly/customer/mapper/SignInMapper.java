  
package com.teamright.brokurly.customer.mapper;

import java.util.List;

import com.teamright.brokurly.model.AddressVO;

public interface SignInMapper {
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