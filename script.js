const   
    alertInfo = document.querySelector("#alertInfo"),
    submitButton = document.querySelector("#submitButton"),
    firstName = document.querySelector("#name"),
    lastName = document.querySelector("#lastName"),
    email = document.querySelector("#email"),
    phone = document.querySelector("#phone"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirmPassword");

function matchPassword() {
    if (password.value !== confirmPassword.value) {
        return false;
    } else {
        return true;
    }
}

function validation() {
    if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && phone.checkValidity() && password.checkValidity() && confirmPassword.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

submitButton.addEventListener("click", () => {

    let pass = matchPassword();
    let check = validation();

    if (check === true && pass === true) {
        alertInfo.innerText = "The account was created";
        alertInfo.classList.add("correct");
    } else if (check === false && pass === false) {
        alertInfo.textContent = "Fulfill all the required parameters";
        alertInfo.classList.add("error");
    } else if (check === true && pass === false) {
        alertInfo.innerHTML = "The passwords aren't the same";
        alertInfo.classList.add("error");
    } else {
        alertInfo.textContent = "Fulfill all the required parameters";
        alertInfo.classList.add("error");
    }
});