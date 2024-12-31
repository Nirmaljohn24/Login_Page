document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Simulating form submission success
    alert("Account Successfully Created!");

    // Redirecting to login page
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000); // Redirects after 2 seconds
});
