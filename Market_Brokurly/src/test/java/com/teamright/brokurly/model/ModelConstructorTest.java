package com.teamright.brokurly.model;

import static org.junit.Assert.*;

import java.util.Date;

import org.apache.log4j.Logger;
import org.junit.Test;

import com.teamright.brokurly.model.CartVO;
import com.teamright.brokurly.model.CouponVO;
import com.teamright.brokurly.model.CustomerBbsVO;
import com.teamright.brokurly.model.CustomerCouponVO;
import com.teamright.brokurly.model.CustomerVO;
import com.teamright.brokurly.model.DeliveryVO;
import com.teamright.brokurly.model.EventVO;
import com.teamright.brokurly.model.MainCategoryVO;
import com.teamright.brokurly.model.ManagerVO;
import com.teamright.brokurly.model.MileageHistoryVO;
import com.teamright.brokurly.model.OrderVO;
import com.teamright.brokurly.model.ProductBbsVO;
import com.teamright.brokurly.model.ProductVO;
import com.teamright.brokurly.model.ReplyVO;
import com.teamright.brokurly.model.SalesVO;
import com.teamright.brokurly.model.StockVO;
import com.teamright.brokurly.model.SubCategoryVO;

/*
 * �� �����ڿ� ���� �׽�Ʈ ����
 * */
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
									"gildong@naver.com", "010-4444-1241", "���� ����", "202�� 101ȣ");
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
		DeliveryVO delivery = new DeliveryVO(113, "��ۿϷ�", "����� ����", "customer4", 123);
		log.info(delivery);
	}
	
	@Test
	public void TestEventVO() {
		EventVO event = new EventVO(31, "�����׸� 50%����");
		log.info(event);
	}
	
	@Test
	public void TestMainCategoryVO() {
		MainCategoryVO mCate = new MainCategoryVO(12, "����������");
		log.info(mCate);
	}
	
	@Test
	public void TestManagerVO() {
		ManagerVO manager = new ManagerVO("brokurly", "1234", "brokurly");
	}
	
	@Test
	public void TestMileageHistoryVO() {
		MileageHistoryVO mHistory = new MileageHistoryVO(5000, "+5000");
		log.info(mHistory);
	}
	
	@Test
	public void TestOrderVO() {
		OrderVO order = new OrderVO(1322);
		log.info(order);
	}
	
	@Test
	public void TestProductBbsVO() {
		ProductBbsVO proBbs = new ProductBbsVO(1234);
		log.info(proBbs);
	}
	
	@Test
	public void TestProductVO() {
		ProductVO product = new ProductVO(123, "ģȯ�� ���� 250g", "������");
		log.info(product);
	}
	
	@Test
	public void TestReplyVO() {
		ReplyVO reply = new ReplyVO(1234, "�亯�Ϸῡ ���� �����Է�");
		log.info(reply);
	}
	
	@Test
	public void TestSalesVO() {
		Date date = new Date();
		SalesVO sales = new SalesVO(44, 2, date);
		log.info(sales);
	}
	
	@Test
	public void TestStockVO() {
		StockVO stock = new StockVO(1112, 3000);
		log.info(stock);
	}
	
	@Test
	public void TestSubCategoryVO() {
		SubCategoryVO sCate = new SubCategoryVO(22, "�߰���");
		log.info(sCate);
	}

}
