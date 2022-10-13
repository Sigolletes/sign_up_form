let 
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirmPassword");

const   
    alertInfo = document.querySelector("#alertInfo"),
    submitButton = document.querySelector("#submitButton");

function matchPassword() {
    if (password !== confirmPassword) {
        alertInfo.textContent("The passwords aren't the same");
    } 
}

submitButton.addEventListener("click", () => {
    submitButton.preventDefault();
    matchPassword();
});