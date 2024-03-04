let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let msg = [
    "First Name cannot be empty",
    "Last Name cannot be empty",
    "E-mail cannot be empty",
    "Password cannot be empty",
    "Looks like this is not an E-mail",
    "Password must be more than  8 characters"
]
let icon = document.querySelectorAll(".f-cont img")
let msgContainer = document.querySelectorAll(".msg");
let inputs = document.querySelectorAll("input");
function handleSubmit() {
    inputs.forEach(
        (input, index) => {
            input.value.trim();
            if (input.value === "") {
                icon[index].style.display = "block";
                msgContainer[index].style.display = "block"
                msgContainer[index].innerHTML = msg[index];
            }
            else {
                icon[index].style.display = "none";
                msgContainer[index].style.display = "none"
            }
        }
    )
    if (!inputs[2].value.match(emailRegex) || !inputs[2].value === "") {
        icon[2].style.display = "block";
        msgContainer[2].style.display = "block";
        msgContainer[2].innerHTML = msg[4];
    }
    else if (inputs[3].value.length < 8) {
        icon[3].style.display = "block";
        msgContainer[3].style.display = "block";
        msgContainer[3].innerHTML = msg[5];
    }
    else {
        icon[index].style.display = "none";
        msgContainer[index].style.display = "none";
    }

}