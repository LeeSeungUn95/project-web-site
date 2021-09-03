package com.teamright.brokurly.product.mapper;

import static org.junit.Assert.*;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.Charset;

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
	
	//��� ��ǰ���� ���� ����
	//@Ignore
	@Test
	public void test1() throws IOException {
	
		File file = new File("D:\\1)�󼼼���\\[�߹̾�] �������� 64g.txt");
		StringBuilder sb = new StringBuilder();
	
		try (
				FileReader reader = new FileReader(file, Charset.forName("UTF-8"));		
				BufferedReader bf = new BufferedReader(reader);
			){
			String line = "";
			while((line = bf.readLine()) != null) {
				sb.append(line);
				sb.append(System.getProperty("line.separator"));
			}
			
			//��ǰ���̵� �� Ȯ��!!!!!!!!!!!!!!!
			detailMapper.create_product_detail(675, sb.toString());
		
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		
	}
}
