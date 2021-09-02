package com.teamright.brokurly.product.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.teamright.brokurly.model.ProductVO;
import com.teamright.brokurly.product.mapper.MainCategoryMapper;
import com.teamright.brokurly.product.mapper.ProductDetailMapper;
import com.teamright.brokurly.product.mapper.ProductMapper;
import com.teamright.brokurly.product.mapper.SubCategoryMapper;
import com.teamright.brokurly.product.service.ProductService;

@Controller
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductMapper productMapper;
	@Autowired
	private SubCategoryMapper subCateMapper;
	@Autowired
	private ProductDetailMapper detailMapper;
	@Autowired
	private MainCategoryMapper mainCateMapper;
	
	int maincate_id;
	int subcate_id;
	
	@GetMapping("/product_list")
	public void searchAllProduct(Model model) {
		// �� ��ȣ���� ���� ī�װ� ��ȣ �����س����� ��ȣ �޾Ƽ� ��Ʈ����Ʈ ����!
		// ���� ī�װ� �޾Ƽ� ���� �޴��� ������ֱ� 
		if(maincate_id == 0) {
			int get_main = subcate_id % 10;
			maincate_id = subcate_id - get_main;
			if(get_main == 0) {
				subcate_id = 0;
			}
		}
		
		
		if(subcate_id == 0) {
			model.addAttribute("product", productMapper.getListByMain(maincate_id));
			// ���� ī�װ��� �˻��ϱ� -> ����ī�װ� ��ȣ �޾Ƽ� �˻��ϱ�
		} else {
			model.addAttribute("product", productService.getSubList(subcate_id));
		}
		model.addAttribute("menus", subCateMapper.searchByMainCategory(maincate_id));
		// ���� ī�װ��� �˻��ϱ� -> �� ī�װ��� ��ü����
		model.addAttribute("mainName", mainCateMapper.getMainCateName(maincate_id));
		// ���� ī�װ� �̸� 
		model.addAttribute("mainId", maincate_id);
		// ���� ī�װ� ���̵�
		model.addAttribute("sub_id", subcate_id);
		// ���� ī�װ� ���̵�
		model.addAttribute("subcate", productService.getSubByMain(maincate_id));
		subcate_id = 0;
		maincate_id = 0;
	}
	
	@GetMapping("/product_main_id")
	@ResponseBody
	public String getMainId(HttpServletRequest request) {
		String get_maincate_id = request.getParameter("maincate_id");
		this.maincate_id = Integer.parseInt(get_maincate_id);
		
		return get_maincate_id;
	}
	
	
	
	
	@GetMapping("/product_detail")
	public void viewProductDetail(Model model) {
		String[] contents = detailMapper.getProductDetail(10).getDetail_content().split("\n");
		
		model.addAttribute("detail", contents);
	}
	
	@RequestMapping("/cart")
	public void cart() {
		
	}
	
	@RequestMapping(value="/search", method=RequestMethod.GET, produces="application/text; charset=utf8")
	@ResponseBody
	public void searchMenu(HttpServletRequest request) {
		String product_name = request.getParameter("search_name");
		List<ProductVO> product_vo = productMapper.getSearch(product_name);
		System.out.println(product_vo);
	}
	
	@GetMapping("/product_subcate")
	@ResponseBody
	public String viewProductSubcategory(HttpServletRequest request) {
		String subcate_id = request.getParameter("subcate_id");
		this.subcate_id = Integer.parseInt(subcate_id);
		
		return subcate_id;
	}
	
	
	@GetMapping("/product_insertCart")
	@ResponseBody
	public String insertCart(HttpServletRequest request, HttpSession session) {
		String product_id = request.getParameter("product_id");
		String customer_id = (String)session.getAttribute("customer_id");
		int get_count = productService.insertCart(Integer.parseInt(product_id), customer_id);
		
		return Integer.toString(get_count);
	}
	
}