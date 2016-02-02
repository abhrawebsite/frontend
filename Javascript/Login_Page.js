
/* Writing Javascript for Password Verification in Login_Page */


function ValidatePassword(password) {
	
	if (password.length < 5) 
		return 0;
	
	
	else 
		alert("Password Alright");
	
	for (var ch of password) 
		alert(ch);
	
	return 1;
}



function FormInputElementValidation() {
	
	var body_child = document.body.children;
	var parent = document.getElementById("form_content");
	var lst = parent.getElementsByTagName("input");
	var password, flag, element;
	
	var section_element = body_child[1];
	var form_element = section_element.children[1];
	var fieldset_element = form_element.children[0];
	
	
	for (var i=0; i<lst.length; i++) {
		
		if (lst[i].id == "password") {
			
			password = lst[i].value;
			element = fieldset_element.children[2*(i+1)];
			
		}
			
	}
	
	alert("The password is " + password);
	
	// Validating the Entered Password 
	
	flag = ValidatePassword(password);
	
	if (!flag)
		
		element.nextSibling.nextSibling.nextSibling.innerHTML = "(Password too short)";
	
}