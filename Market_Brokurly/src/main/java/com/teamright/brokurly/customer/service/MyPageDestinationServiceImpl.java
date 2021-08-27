package com.teamright.brokurly.customer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamright.brokurly.customer.mapper.MyPageMapper;
import com.teamright.brokurly.model.AddressVO;

@Service
public class MyPageDestinationServiceImpl implements MyPageDestinationService {
/* ���ۿ����� �Ű������� 1���� ���� �� �����Ƿ� ���񽺿��� �������� �Ű������� �޾� �����͸� �������ش�. */
	
	@Autowired
	MyPageMapper myPageMapper;
	
	@Override
	public void insertNewAddr(String customer_id, String address_main, String address_detail, String address_chk) {
		int address_check = 0;
		if (address_chk.equals("true")) {
			// ���� ����ϴ� ������� �⺻������� �����Ѵٰ� ���� �� ��ϵ� �ּ� ��� address_check = 0���� ������Ʈ
			myPageMapper.updateAddrChk(customer_id);
			address_check = 1;
		} else {
			address_check = 0;
		}
		
		AddressVO addressVo = new AddressVO(customer_id, address_main, address_detail, 
											address_check, null, null);
		myPageMapper.insertNewAddr(addressVo);
	}

	@Override
	public void getUpdatePopup1(String customer_id, String address_main, String address_detail, 
							    String receive_customer, String receive_tel) {
		AddressVO addressVo = new AddressVO(customer_id, address_main, address_detail,
											null, receive_customer, receive_tel);
		myPageMapper.updatePopup1(addressVo);
	}

	@Override
	public void getUpdatePopup0(String customer_id, String address_main, String address_detail, 
								String receive_customer, String receive_tel, String address_chk) {
		int address_check = 0;
		if (address_chk.equals("true")) {
			myPageMapper.updateAddrChk(customer_id);
			address_check = 1;
		} else {
			address_check = 0;
		}
		
		AddressVO addressVo = new AddressVO(customer_id, address_main, address_detail,
											address_check, receive_customer, receive_tel);
		myPageMapper.updatePopup0(addressVo);
	}

	@Override
	public void getDeletePopup0(String customer_id, String address_main) {
		AddressVO addressVo = new AddressVO(customer_id, address_main, "", 0, "", "");
		myPageMapper.deletePopup0(addressVo);
	}
}
