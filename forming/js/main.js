
var path = "http://localhost/exam/";


$(document).on('click', '#clickme', function(){
	var studentname = $('#studentname').val();
	if(!studentname){
		swal("Please Enter Name.");
		return; 
	}
	var fathername = $('#fathername').val();
	if(!fathername){
		swal("Please Enter Name.");
		return; 
	}
	
	var address = $('#address').val();
	if(!address){
		swal("Please Enter Name.");
		return; 
	}
	
	
	var emailid = $('#emailid').val();
	function validateEmail($email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailReg.test( $email );
	}
	
	
	var moblie = $('#moblie').val();
	//var length = cust_mbno.length;	
	if(!moblie){
		moblie = 9971361243;
	}
	if(isNaN(moblie)){
		alert("Please Enter Your Correct Mobile No.");
		return;
	}
	
	/*var stream = $('#class').val();
		
	if(!stream){
		swal("Please Enter Class.");
		return; 
	}*/
	
		
		
	$.ajax({
		url: path + "login.php",
		type: "POST",
		data:{
			"studentname":studentname,
			"fathername":fathername,
			"address":address,
			"emailid":emailid,
			"moblie":moblie
		},	
		success: function (e){
			alert(e);
		}
		
	});
	 
});