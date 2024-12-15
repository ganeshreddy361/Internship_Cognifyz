// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear existing errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // If valid, display success message
    if (isValid) {
        alert("Form submitted successfully!");
    }
});
