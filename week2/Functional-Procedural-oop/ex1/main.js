const form = document.getElementById("user-input");

signUpHandler = (event) => {
    event.preventDefault();
    const userInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const usernameValue = userInput.value;
    const passwordValue = passwordInput.value;

    if (usernameValue.trim().length === 0 || passwordValue.trim().length === 0) {
        alert("User name or password is field required");
        return;
    }

    if (passwordValue.trim().length <= 5) {
        alert('Invalid input - password must be six characters or longer.');
        return;
    }

    const user = {
        username: usernameValue,
        password: passwordValue
    }

    console.log(user);
}

form.addEventListener("submit", signUpHandler)