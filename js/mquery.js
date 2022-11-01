$.validator.addMethod("pwcheck",function(value) {
	return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[A-Z]/.test(value);
});
$(document).ready(function() {
	$("#formvalidate").validate({
		errorClass: "error fail-alert",
		validClass: "valid success-alert",
		rules : {
			fname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
      			},
			phone: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 10
			},
			password: {
				required: true,
				minlength: 8,
				pwcheck: true
			},
			birthdaytime: {
				required: true
			},
			state: {
				required: true
			},
			address: {
				required: true
			},
			gender: {
				required: true
			},
			quantity: {
				required: true,
				min: 0
			},
			homepage: {
				required: true
			},
			file: {
				required: true
			},			
		},
		errorPlacement: function(error, element) {
			if ( element.is(":radio") ) {
				error.appendTo( element.parents(".formcontrol") );
			}
			else { 
				error.insertAfter( element );
			}
		},
		messages : {
			fname: {
				required: "Please enter your name!",
				minlength: "Name should be at least 2 character!"
			},
			email: {
				required: "Please enter your mail ID!",
				email: "The email should be in the format: abc@domain.tld!"
			},
			phone: {
				required: "Please enter your phone number!",
				number: "Phone number should be a numerical value!",
				minlength: "Phone number should be at least 10 digit!",
				maxlength: "Phone number should not be more than 10 digit!"
			},
			password: {
				required: "Please enter your password!",
				pwcheck: "Password should contain at least one character, one number and a capital letter!",
				minlength: "Password should contain at least 8 character!"	
			},
			birthdaytime: {
				required: "Please enter your Birth date and time!"
			},
			state: {
				required: "Please select your state!"
			},
			address: {
				required: "Please enter your address!"
			},
			gender: {
				required: "Please select your gender!",
			},
			quantity: {
				required: "Please enter a number!",
				min: "Please enter a valid number!"
			},
			homepage: {
				required: "Please enter the URL!"
			},
			file: {
				required: "Please upload your file!"
			}
		}
	});
});