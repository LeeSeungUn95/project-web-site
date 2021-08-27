package com.teamright.brokurly.customer.mapper;

import java.util.List;

import com.teamright.brokurly.model.AddressVO;
import com.teamright.brokurly.model.DeliveryVO;
import com.teamright.brokurly.model.DetailOrderVO;
import com.teamright.brokurly.model.OrderVO;
import com.teamright.brokurly.model.ProductVO;

public interface MyPageMapper {
	public List<OrderVO> getOrder(String customer_id);
	public List<DetailOrderVO> getTotalPrice(String customer_id); 
	public List<DetailOrderVO> getOrderList(String customer_id);
	public List<DetailOrderVO> getOrderIdAndCount(String customer_id);
	public List<ProductVO> getListByOrder(String customer_id);
	public List<DeliveryVO> getDeliStatus(String customer_id);
	public void insertNewAddr(AddressVO addressVo); // �� ����� ���
	public void updateAddrChk(String customer_id);  // �� ����� �߰��� �⺻ ������� üũ�ϸ�, ��ϵǾ��ִ� ����� ��� 0���� ����
	public void updatePopup1(AddressVO addressVo);  // �⺻ ����� �˾������� ���� ������Ʈ
	public void updatePopup0(AddressVO addressVo);	// ������ ����� �˾������� ���� ������Ʈ
	public void deletePopup0(AddressVO addressVo);
}
