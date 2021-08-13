package com.teamright.brokurly.product.mapper;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.teamright.brokurly.model.MainCategoryVO;
import com.teamright.brokurly.model.SubCategoryVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class TestCategoryMapper {

	@Autowired
	private MainCategoryMapper mainCategoryMapper;
	@Autowired
	private SubCategoryMapper subCategoryMapper;
	
	@Test
	public void getMainCateListTest() {
		List<MainCategoryVO> mainCateList = mainCategoryMapper.getMainCateList();
		
		for (MainCategoryVO mainCate : mainCateList) {
			System.out.println(mainCate);
		}
	}
	
	@Test
	public void getSubCateListTest() {
		List<SubCategoryVO> subCateList = subCategoryMapper.getSubCateList();
		
		for (SubCategoryVO subCate : subCateList) {
			System.out.println(subCate);
		}
	}
	
	@Test
	public void searchByMainCategoryTest() {
		// ���� ī�װ��� 10���� ���� ī�װ��� �˻�
		List<SubCategoryVO> subCateList = subCategoryMapper.searchByMainCategory(10);

		for (SubCategoryVO subCate : subCateList) {
			System.out.println(subCate);
		}
	}

}
