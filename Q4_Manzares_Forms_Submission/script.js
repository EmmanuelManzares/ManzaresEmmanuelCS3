let passwordShown = true;

function checkElement(elementId) {
    let element = document.getElementById(elementId);
    if (element.value.trim() == "") {
        element.style.border = "2px solid red";
    } else {
        element.style.border = "2px solid green";
    }
}

function showOrHide() {
    if (passwordShown == false) {
        passwordShown = true;
        document.getElementById("password-display").innerHTML = document.getElementById("password").value;
    } else {
        passwordShown = false;
        newStr = new Array(document.getElementById("password").value.length + 1).join(".");
        document.getElementById("password-display").innerHTML = newStr;
    }
}

function submitData() {
    document.getElementById("name-display").innerHTML = document.getElementById("name").value;
    document.getElementById("username-display").innerHTML = document.getElementById("username").value;
    document.getElementById("gender-display").innerHTML = document.getElementById("gender").value;
    document.getElementById("password-display").innerHTML = document.getElementById("password").value;
    document.getElementById("email-display").innerHTML = document.getElementById("email").value;
    document.getElementById("address-display").innerHTML = document.getElementById("address").value;
    document.getElementById("desc-display").innerHTML = document.getElementById("description").value;
    passwordShown = false;
    showOrHide();
}

function resetData() {
    document.getElementById("name-display").innerHTML = "";
    document.getElementById("username-display").innerHTML = "";
    document.getElementById("gender-display").innerHTML = "";
    document.getElementById("password-display").innerHTML = "";
    document.getElementById("email-display").innerHTML = "";
    document.getElementById("address-display").innerHTML = "";
    document.getElementById("desc-display").innerHTML = "";
    document.getElementById("name").value = "";
    document.getElementById("username").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("description").value = "";
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("username").style.border = "2px solid red";
    document.getElementById("gender").style.border = "2px solid red";
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("address").style.border = "2px solid red";
    document.getElementById("description").style.border = "2px solid red";
    passwordShown = false;
    showOrHide();
}
