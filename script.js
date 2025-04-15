document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = storedUsers.find(user => user.email === email && user.password === password);

    if (matchedUser) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

        console.log("dashboardAdmin.html"); // log untuk debug

        // Redirect
        window.location.href = "dashboardAdmin.html";
    } else {
        errorMessage.textContent = "Email atau password salah!";
        errorMessage.style.display = "block";
    }
});
