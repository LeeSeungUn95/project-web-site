package com.teamright.brokurly.product.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.teamright.brokurly.model.CustomerVO;
import com.teamright.brokurly.model.ProductDetailVO;
import com.teamright.brokurly.model.ProductVO;
import com.teamright.brokurly.product.mapper.ProductDetailMapper;

@Service
public class ProductDetailServiceImpl implements  ProductDetailService{
	
	@Autowired
	ProductDetailMapper productDetailMapper;
	
	//��� ����� ��ǰ ������ ���پ� �о ArrayList�� �����ϰ� �����ϴ� ����
	@Override
	public ArrayList<String> save_contente(int product_id) {
		
		List<ProductDetailVO> product_detail = productDetailMapper.select_product_detail(product_id);
		ArrayList<String> detail_list = new ArrayList<>();
		
		for (ProductDetailVO detail : product_detail) {
			String content = detail.getDetail_content();
			String reader = "";
			
			//���۷� ���پ� �о arraylist�� ���
			BufferedReader bf = new BufferedReader(new StringReader(content)); 
			try {
				while((reader = bf.readLine()) != null) {
					detail_list.add(reader);
				}
			
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return detail_list;
	}

	//��ǰ id, �� id, ��ǰ������ db cart_table�� ����
	@Override
	public void save_product_info_cart(int cart_count, int product_id, String customer_id) {
		productDetailMapper.set_detail_cart(cart_count, product_id, customer_id);
	}

	//ȸ�� ���, ���� �ۼ�Ʈ ��������
	@Override
	public CustomerVO get_customer_grade_percent(String customer_id) {
		List<CustomerVO> cvo = productDetailMapper.get_customer_grade_percent(customer_id);
		return cvo.get(0);
	}

	//��ٱ��� ī��Ʈ ��������
	@Override
	public int get_cart_count_share(String customer_id) {
		int count = productDetailMapper.get_cart_count_share(customer_id);
		return count;
	}

	@Override
	public int get_count(String customer_id, int product_id) {
		return productDetailMapper.get_count(customer_id, product_id);
	}

	@Override
	public int set_cart_count(int quantity, String customer_id, int product_id) {
		return productDetailMapper.set_cart_count(quantity, customer_id, product_id);
	}

}