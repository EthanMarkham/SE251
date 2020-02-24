// JavaScript Document


window.addEventListener("load", initialize);

function validate(){
	var first = document.getElementById("first-name").value;
	var last = document.getElementById("last-name").value;
	var email = document.getElementById("email").value;
	var cemail = document.getElementById("cemail").value;
	var phone = document.getElementById("phone").value;
	console.log(first + " " + last + " " + email + " " + phone);
	
	if(email == cemail && validateEmail(email) && validateName(first) && validateName(last) && validatePhone(phone)){
		displayResults();
	}
	else if (email != cemail){
		alert("Emails Do Not Match");
	}
	else if (!validateEmail(email)){
		alert("Please enter a valid email");
	}
	else if (!validateName(first) || !validateName(last)){
		alert("Your name must not include special characters");
	}
	else if (!validatePhone(phone)){
		alert("Please enter a phone number in the following format: xxxxxxxxxx");
	}
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}
function validatePhone(phone) {
    var re = /^\d{3}\d{3}\d{4}$/;
    return re.test(String(phone));
}
function validateName(name) {
    var re = /[!@#$%^&*(),.?":{}|<>_]/;
    if (re.test(String(name))){return false}
	else {return true}
}
function displayResults(){
	var first = document.getElementById("first-name").value;
	var last = document.getElementById("last-name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	
	var form = document.getElementById("form");
	form.style.visibility = "hidden";
	
	var confirm = document.getElementById("confirmation");
	confirm.style.display = "block";
	
	var info = document.getElementById("info");
	var person = {
 		fname:first,
 		lname:last,
 		emailAdr:email,
 		phoneNum:phone
	}	
	
	
	info.innerHTML = "Name: " + person.fname + " " + person.lname + "<br/>";
	info.innerHTML += "Email: " + person.emailAdr + "<br/>";
	info.innerHTML += "Phone: " + person.phoneNum + "<br/>";
	
	
}
function submitForm(){
	var pTags = document.querySelectorAll("form p");
	var spans = document.querySelectorAll("span");
	var textFields = document.querySelectorAll("input[type='text']");
	var blanks = false;
	for(var i = 0; i < textFields.length; i++){
		if(textFields[i].value == ""){
			spans[i].innerHTML = "*";
			pTags[i].classList.add("red");
			blanks = true;
		}
	}
	if (blanks){alert("Please enter all fields");}
	if(blanks == false){
		validate();
	}
}
function initialize(){
	var submitButton = document.getElementById("submitButton");
	submitButton.addEventListener("click", submitForm);
}


