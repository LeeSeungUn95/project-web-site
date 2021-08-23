$(function() {
	var grade_logo = $('.grade_logo');
	var grade_logo_value = $.trim($('.grade_logo').text());
	var write_available = $('.write_available');
	var write_complete = $('.write_complete');
	var before_view = $('.before_view');
	var after_view = $('.after_view');
	var inp = $('.inp');

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
	
	write_available.click(() => {
		write_available.addClass('on');
		write_complete.removeClass('on');
		before_view.css('display', 'block');
		after_view.css('display', 'none');
	});
	
	write_complete.click(() => {
		write_available.removeClass('on');
		write_complete.addClass('on');
		before_view.css('display', 'none');
		after_view.css('display', 'block');
	});
	
	inp.click(() => {
        inp.css('border', 'solid 2px #ddd');
    });
});