document.getElementById("C:\Users\rosas\OneDrive\Desktop\cs112\login.html").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get login input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve stored user data from localStorage
    let storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
        alert("No user found. Please register first.");
        return;
    }

    let userData = JSON.parse(storedUserData);

    // Validate login credentials
    if (email === userData.email && password === userData.password) {
        alert("Login successful! Welcome, " + userData.firstName + " " + userData.lastName);
        window.location.href = "C:\Users\rosas\OneDrive\Desktop\cs112\index.html"; // Redirect to a dashboard or home page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
