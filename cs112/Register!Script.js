function showPopup(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value; // Get selected gender

    // Check if all required fields are filled
    if (!firstName || !lastName || !email || !password || !gender) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a user object
    let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        gender: gender
    };

    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    users.push(userData);

    // Save the updated user list back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Display a success message
    alert("Welcome " + firstName + " " + lastName + "! Your registration has been saved.");

    // Redirect to another page after 2 seconds
    setTimeout(function () {
        window.location.href = "login.html"; // Change to another page if needed
    }, 2000);
}
