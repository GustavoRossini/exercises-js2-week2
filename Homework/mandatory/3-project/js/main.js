
    
var jumbotron = document.querySelector(".jumbotron");
var donateBikeBtn = document.querySelector(".btn.btn-primary.btn-lrg");
var volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

var blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", blueBtnFunction);

function  blueBtnFunction () {

    jumbotron.style.backgroundColor = "#588fbd";
    donateBikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
   
}

var orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", orangeBtnFunction);

function orangeBtnFunction () {

    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white"; 

}

var greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", greenBtnFunction);

function greenBtnFunction () {

    jumbotron.style.backgroundColor = "#87ca8a";
    donateBikeBtn.style.backgroundColor = " black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
    
}

var submitBtn = document.querySelector("form .btn.btn-primary");
submitBtn.addEventListener("click", checkFormFunction);



function checkFormFunction () {

    var inputIsValid = true;

    var formInputs = document.querySelectorAll(".form-control");
    var isInputValid = true;
    for (var i = 0; i < formInputs.length; i++) {
        var formInput = formInputs[i];
        if (formInput.value.length == 0) {
            formInput.style.borderColor = "red";
            isInputValid = false;
        }
        // If there is a value then set the border to light grey, in case it was red from a previous call to Submit
        else {
            formInput.style.borderColor = "lightgrey";
        }
    }
 
    // var nameFormValue = document.querySelector("#example-text-input");

    //if (nameFormValue.value.length == 0) {
    //nameFormValue.style.borderColor = "red;"
    //inputIsValid = false;   
    //} 

    var emailFormValue = document.querySelector("#exampleInputEmail1");

    if (emailFormValue.value.length == 0 || !emailFormValue.value.includes("@")) {
    emailFormValue.style.borderColor = "red";
    inputIsValid = false; 
    }
 
    //var descriptionFormValue = document.querySelector("#exampleTextarea");

    //if (descriptionFormValue.value.length == 0) {
    //descriptionFormValue.style.borderColor = "red";
    //inputIsValid = false; 
    //}

    if (inputIsValid){
        
        alert("Thank you for filling out the form!");
        nameFormValue.value = "";
        emailFormValue.value = "";
        descriptionFormValue.value = "";
        nameFormValue.style.borderColor = "lightgrey";
        emailFormValue.style.borderColor = "lightgrey";
        descriptionFormValue.style.borderColor ="lightgrey";

        

    }
    event.preventDefault();
}


