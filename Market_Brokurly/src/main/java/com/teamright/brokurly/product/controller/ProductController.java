package com.teamright.brokurly.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.teamright.brokurly.product.mapper.ProductDetailMapper;
import com.teamright.brokurly.product.mapper.ProductMapper;
import com.teamright.brokurly.product.mapper.SubCategoryMapper;

@Controller
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductMapper productMapper;
	@Autowired
	private SubCategoryMapper subCateMapper;
	@Autowired
	private ProductDetailMapper detailMapper;
	
	@GetMapping("/product_list")
	public void searchAllProduct(Model model) {
		// �� ��ȣ���� ���� ī�װ� ��ȣ �����س����� ��ȣ �޾Ƽ� ��Ʈ����Ʈ ����!
		int a = 10;
		model.addAttribute("mainNum", a);
		// ���� ī�װ� �޾Ƽ� ���� �޴��� ������ֱ�
		model.addAttribute("menus", subCateMapper.searchByMainCategory(10));
		// ���� ī�װ��� �˻��ϱ� -> �� ī�װ��� ��ü����
		model.addAttribute("product", productMapper.getListByMain(a));
		// ���� ī�װ��� �˻��ϱ� -> ����ī�װ� ��ȣ �޾Ƽ� �˻��ϱ�
//		model.addAttribute("product", productMapper.getListBySub(53));
	}
	
	@GetMapping("/product_detail")
	public void viewProductDetail(Model model) {
		String[] contents = detailMapper.getProductDetail(10).getDetail_content().split("\n");
		
		model.addAttribute("detail", contents);
	}
}
