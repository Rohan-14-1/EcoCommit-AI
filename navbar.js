document.addEventListener("DOMContentLoaded", function () {

    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            initializeNavbar();
        });

});


function initializeNavbar(){

    const isLoggedIn = localStorage.getItem("ecoUser") === "true";
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.getElementById("nav-links");
    const authSection = document.getElementById("auth-buttons");

    navLinks.innerHTML = "";
    authSection.innerHTML = "";

    // =============================
    // LOGIN & SIGNUP PAGE
    // =============================
    if(currentPage === "login.html" || currentPage === "signup.html"){
        return; // Only logo visible
    }

    // =============================
    // NOT LOGGED IN
    // =============================
    if(!isLoggedIn){

        authSection.innerHTML = `
            <button class="nav-btn green-outline" id="goLogin">Sign In</button>
            <button class="nav-btn green-fill" id="goSignup">Sign Up</button>
        `;

        document.getElementById("goLogin").onclick = () => {
            window.location.href = "login.html";
        };

        document.getElementById("goSignup").onclick = () => {
            window.location.href = "signup.html";
        };

        return;
    }

    // =============================
    // LOGGED IN
    // =============================

    navLinks.innerHTML = `
        <a href="home.html" class="nav-link">🏠 Home</a>
        <a href="dashboard.html" class="nav-link">📊 Dashboard</a>
        <a href="profile.html" class="nav-link">👤 Profile</a>
        <a href="rewards.html" class="nav-link">🏆 Rewards</a>
    `;

}