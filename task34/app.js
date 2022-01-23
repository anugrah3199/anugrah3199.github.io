const userInput = document.getElementById("username")
const pswdInput = document.getElementById("pswd")
const btn = document.querySelector("button")

const regexpswd = "(?=.*?[A-Z])(?=.*?[@])(?=.*?[0-9])"
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn.addEventListener("click", validate)

userInput.addEventListener("change", () => {
    let inputemail = userInput.value
    if (!(inputemail.match(emailregex))) {
        alert("enter valid email")
    }
})
pswdInput.addEventListener("change", () => {
    let pswdval = pswdInput.value
    if (!(pswdval.match(regexpswd))) {
        alert("password must contain only \n @ \n at least one lower case \n at least one lower cas ")
    }
})

function validate() {
    if (pswdInput.value.match("SmartServTest@123") && userInput.value) {
        location.href = "https://anugrah3199.github.io/task4/"
    } else {
        alert("wrong password or invalid username");
    }
}