document.addEventListener("DOMContentLoaded", function(){

    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    const startBtn = document.getElementById("startTrackingBtn");
    const dashboardBtn = document.getElementById("viewDashboardBtn");
    const getStartedBtn = document.getElementById("getStartedBtn");

    function handleProtectedNavigation() {

        const isLoggedIn = localStorage.getItem("ecoUser") === "true";

        if (!isLoggedIn) {
            window.location.href = "login.html";
        } else {
            window.location.href = "dashboard.html";
        }
    }

    startBtn?.addEventListener("click", handleProtectedNavigation);
    dashboardBtn?.addEventListener("click", handleProtectedNavigation);
    getStartedBtn?.addEventListener("click", handleProtectedNavigation);

});