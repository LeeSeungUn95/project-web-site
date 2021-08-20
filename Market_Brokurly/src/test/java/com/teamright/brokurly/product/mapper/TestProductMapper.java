package com.teamright.brokurly.product.mapper;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.teamright.brokurly.model.ProductVO;

import lombok.extern.log4j.Log4j;

@Log4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class TestProductMapper {

	@Autowired
	ProductMapper productMapper;
	
	@Test
	public void getInfoAsSearchSubCateTest() {
		// ���� ī�װ��� 22���� ��ǰ���� ��ȸ (���� ī�װ��� ��ǰ�� ��ȸ)
		List<ProductVO> productList = productMapper.getListBySub(22);
		
		for (ProductVO product : productList) {
			log.info(product);
		}
	}
		@Test
	public void getListByMainTest() {
		// ���� ī�װ��� 10���� ��ǰ���� ��ȸ (���� ī�װ��� ��ǰ�� ��ȸ)
		List<ProductVO> productList = productMapper.getListByMain(10);
		
		for (ProductVO product : productList) {
			log.info(product);
		}
	}

}
