function promptUser() {
    alert("You will be redirected to another webpage.");
    window.open("second.html");
}

function changeImage(order) {
    if (order == true) {
        document.getElementById("image").src = "img2.png";
    } else {
        document.getElementById("image").src = "img1.png";
    }
}