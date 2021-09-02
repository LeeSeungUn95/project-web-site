package com.teamright.brokurly.product.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.teamright.brokurly.model.CustomerVO;
import com.teamright.brokurly.model.MainCategoryVO;
import com.teamright.brokurly.model.ProductDetailVO;
import com.teamright.brokurly.model.ProductVO;

public interface ProductDetailMapper {
	public ProductDetailVO getProductDetail(int id);
	//��� �󼼼��� �ִ� ����
	public int create_product_detail(@Param("product_id")int product_id, @Param("detail_content")String detail_content);
	//��ǰ �󼼼��� �������� ����
	public List<ProductDetailVO> select_product_detail(int product_id);
	//�ϳ��� ��ǰ ������ ��ȸ(���������� �Ѹ��� ����)
	public List<ProductVO> select_product(int product_id);
	//Ư�� ��ǰ�� ����ī�װ� ��ȸ�ϴ� ����
	public MainCategoryVO select_main_category(int product_id);
	//���� ��ǰ ���� ��ȸ
	public List<ProductVO> select_product_discount(int product_id);
	//��ٱ��Ͽ� ���� �ֱ�
	public int set_detail_cart(@Param("cart_count") int cart_count, 
			@Param("product_id") int product_id,
			@Param("customer_id") String customer_id);
	public List<CustomerVO> get_customer_grade_percent(String customer_id);
	//��ٱ��� ī��Ʈ �����ͼ� ���� �����ܿ� ����
	public int get_cart_count_share(String customer_id);
	//��ٱ��� ī��Ʈ �����ͼ� 0�̸� �μ�Ʈ, 0�̻��̸� ������Ʈ ó���ϱ�
	public int get_count(@Param("customer_id") String customer_id,@Param("product_id") int product_id);
	//��ٱ��� ��ǰ �ߺ��ÿ� ���� ������Ʈ�ϱ�
	public int set_cart_count(@Param("quantity") int quantity, 
			@Param("customer_id") String customer_id,
			@Param("product_id") int product_id);

}
