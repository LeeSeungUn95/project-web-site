/**
 * 
 */
$(document).ready(function(e) {
	$('#login_btn').click(function(){

		$.ajax({
			url: "/brokurly/customer/login",
			type: "GET",
			data: {
				"customer_id": $('#customer_id').val(),
				"customer_pw": $('#customer_pw').val()
			},
			success:function(data) {
				if (data == '') {
					alert("���̵� �Ǵ� �н����� ����");
					return;
				} else {
					alert(data + "�� ȯ���մϴ�.");
					$('#login_form').submit();
				}
			},
			error:function() {
				alert("��������");
			}
		});
	}); 

	$('#signup').click(function() {
		$('#signupForm').submit();
	});

	$('#findid').click(function() {
		$('#findidForm').submit();
	});

	$('#findpw').click(function() {
		$('#findpwForm').submit();
	});

});