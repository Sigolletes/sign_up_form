const   
    alertInfo = document.querySelector("#alertInfo"),
    submitButton = document.querySelector("#submitButton"),
    firstName = document.querySelector("#name"),
    lastName = document.querySelector("#lastName"),
    email = document.querySelector("#email"),
    phone = document.querySelector("#phone"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirmPassword"),
    log = document.querySelector("#log"),
    logInDiv = document.querySelector("#logInDiv"),
    back = document.querySelector("#back"),
    hint = document.querySelector("#hint"),
    logIn = document.querySelector("#logIn"),
    userName = document.querySelector("#userName"),
    psswrd = document.querySelector("#psswrd"),
    infoLog = document.querySelector("#infoLog");

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



log.addEventListener("click", () => {
    logInDiv.style.display = "flex";
});

back.addEventListener("click", () => {
    logInDiv.style.display = "none";
    userName.value = "";
    psswrd.value = "";
    infoLog.classList.remove("correct");
    infoLog.classList.remove("error");
    infoLog.textContent = "";
});

hint.addEventListener("click", () => {
    hint.innerText = "Admin 1234";
});

logIn.addEventListener("click", () => {
    if (userName.checkValidity() && psswrd.checkValidity()) {
        infoLog.textContent = "You have succesfully entered";
        infoLog.classList.add("correct");
    } else if (userName.value == "" || psswrd.value == "") {
        infoLog.textContent = "Fulfill all the required parameters";
        infoLog.classList.add("error");
    } else if (userName.checkValidity() && !psswrd.checkValidity()) {
        infoLog.textContent = "The password is incorrect";
        infoLog.classList.add("error");
    } else if (!userName.checkValidity() && psswrd.checkValidity()) {
        infoLog.textContent = "The username is incorrect";
        infoLog.classList.add("error");
    } else {
        infoLog.textContent = "The user doesn't exists";
        infoLog.classList.add("error");
    }
});
