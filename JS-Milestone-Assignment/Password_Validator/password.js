function togglePassword(inputId, buttonId) {
    var passwordField = document.getElementById(inputId);
    var showPasswordBtn = document.getElementById(buttonId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordBtn.textContent = "Hide";
    } else {
        passwordField.type = "password";
        showPasswordBtn.textContent = "Show";
    }
  }

function validatePassword() {

    // Get password and confirmation values from input fields
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Get the message div
    var messageDiv = document.getElementById("message");

    // Check if passwords match
    if (password === confirmPassword) {
        messageDiv.textContent = "Password Matched. You are succesfully login";
        messageDiv.className = "success";
    } else {
        messageDiv.textContent = "Password didn't match. Enter a right password";
        messageDiv.className = "error";
    }
}
