var input = document.getElementById("focusedElement");
var modal = document.getElementById("skipmodal");
input.addEventListener("focus", function () {
  modal.style.marginLeft = "0%";  
});

input.addEventListener("blur", function () {
  modal.style.marginLeft = "100%";  
});

function FormSent() {

var FormName;
var FormLastName;
var FormRadio;
var FormDepartment;

FormName = document.getElementById("fname").value;
FormLastName = document.getElementById("lname").value;
FormRadio = document.querySelector('input[name="fav_language"]:checked').value;
FormDepartment = document.getElementById("depart").value;

document.getElementById("responsebox").innerHTML = "<p>Your name is " + FormName + " " + FormLastName + ".</p>" + "<p>You work " + FormRadio + ".</p>" + "<p>Your department is " + FormDepartment + ".</p>";

document.getElementById("responsebox").setAttribute("role", "alert");

//document.getElementById("responsebox").innerHTML = FormRadio;


//return true;

};





// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.getElementById("responsebox").innerHTML = FormName;