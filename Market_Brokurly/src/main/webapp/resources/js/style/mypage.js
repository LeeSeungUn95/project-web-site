$(function() {
	var grade_logo = $('.grade_logo');
	var grade_logo_value = $.trim($('.grade_logo').text());

	/* ��޺� ���� ���� */
	if (grade_logo_value == '����') {
		grade_logo.addClass('class0');
	} else if (grade_logo_value == '�Ϲ�') {
		grade_logo.addClass('class1');
	} else if (grade_logo_value == '������') {
		grade_logo.addClass('class2');
	} else if (grade_logo_value == '�׸�') {
		grade_logo.addClass('class3');
	} else if (grade_logo_value == '�ƽ��Ķ�Ž�') {
		grade_logo.addClass('class4');
	} else if (grade_logo_value == '����ø�') {
		grade_logo.addClass('class5');
	}
	
});