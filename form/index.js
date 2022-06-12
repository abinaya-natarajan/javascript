const email = document.getElementById("mail");

email.addEventListener("input", function(event) {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Please give a correct email address");
    } else {
        email.setCustomValidity("");
    }
});