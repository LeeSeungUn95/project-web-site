package com.teamright.brokruly.model;

import org.apache.log4j.Logger;
import org.junit.Test;

public class ModelConstructorTest {

	Logger log = Logger.getLogger(this.getClass());
		
	@Test
	public void TestCartVO() {
		CartVO cart = new CartVO(3, 21, "customer1");
		log.info(cart);
	}
	
	@Test
	public void TestCouponVO() {
		CouponVO coupon = new CouponVO(1, "[ä��]�׸� 70% ����");
		log.info(coupon);
	}
	
	@Test
	public void TestCustomerVO() {
		CustomerVO customer = new CustomerVO("customer22", "12ä��12", "ȫ�浿", 
									"gildong@naver.com", "010-4444-1241", "���� ����");
		log.info(customer);
	}
	
	@Test
	public void TestCustomerBbsVO() {
		CustomerBbsVO cusBbs = new CustomerBbsVO(10, "��۹���", "��۳�¥ ���� �����մϴ�", "customer31");
		log.info(cusBbs);
	}

	@Test
	public void TestCustomerCouponVO() {
		CustomerCouponVO cusCoupon = new CustomerCouponVO("customer1", 85, "���Ϸ�");
		log.info(cusCoupon);
	}

	@Test
	public void TestDeliveryVO() {
		
	}
	
	@Test
	public void TestEventVO() {
		
	}
	
	@Test
	public void TestMainCategoryVO() {
		
	}
	
	@Test
	public void TestManagerVO() {
		
	}
	
	@Test
	public void TestMileageHistoryVO() {
		
	}
	
	@Test
	public void TestOrderVO() {
		
	}
	
	@Test
	public void TestProductBbsVO() {
		
	}
	
	@Test
	public void TestProductVO() {
		
	}
	
	@Test
	public void TestReplyVO() {
		
	}
	
	@Test
	public void TestSalesVO() {
		
	}
	
	@Test
	public void TestStockVO() {
		
	}
	
	@Test
	public void TestSubCategoryVO() {
		
	}
}
