package com.teamright.brokurly.product.mapper;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.teamright.brokurly.model.ProductDetailVO;

import lombok.extern.log4j.Log4j;

@Log4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class TestProductDetailMapper {

	@Autowired
	private ProductDetailMapper detailMapper;
	
	@Test
	public void test() {
		ProductDetailVO detailInfo = detailMapper.getProductDetail(10);
		
		// CLOB�� ������ � ������� �ɰ������� Ȯ��. split()�̿��ؼ� ������ ó������
		// true, false �̿��ؼ� ������ ��� true�� �����ؼ� ���̺� ����� ��
		String[] arr = detailInfo.getDetail_content().split("\n");
		for(int i = 0; i < arr.length; i++) {
			log.info(i + " : " + arr[i]);
		}
	}
}
