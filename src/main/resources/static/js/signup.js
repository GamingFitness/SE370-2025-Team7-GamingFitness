function signup() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPasswordInput = document.getElementById("confirm-password");
    const confirmPassword = confirmPasswordInput.value.trim();
    const userDisplay = document.getElementById("user-display");
    const authBtn = document.getElementById("auth-button");

    // Show confirm password input if it's hidden
    if (confirmPasswordInput.style.display === "none") {
        confirmPasswordInput.style.display = "block";
        document.getElementById("login-message").innerText = "Please confirm your password.";
        return;
    }

    if (!username || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const account = { username, password };
    localStorage.setItem(username, JSON.stringify(account));
    localStorage.setItem("loggedInUser", username);

    userDisplay.innerText = `${username}`;
    authBtn.innerText = "Logout";
    authBtn.onclick = logout;

    alert("Account created successfully!");
    confirmPasswordInput.style.display = "none";
    confirmPasswordInput.value = "";

 // Using a POST Request to store this user data in the database
 fetch('http://localhost:8080/app_users', { //making a fetch request to pull all the users
    method: 'POST', //we have to declare the POST method to use it. A POST creates a new instance, while a PUT request changes whats there
    //method: 'PATCH',
    headers: { 
    'Content-Type': 'application/json' //declaring content type as json
  },
  body: JSON.stringify({ //this is setting up the JSON we want to pass
    userName: username, //this sets up the user's userName
    password: password, //setting password, NOT TECHNICALLY SECURE
    //style: 'BodyBuilding', //setting user style
    //shots: SHOTS
  })
})
    closeLogin();
}
