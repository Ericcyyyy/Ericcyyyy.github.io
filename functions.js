// functions.js
// Eric Yo
// 3/20/2024

var sidemenu = document.getElementById("sidemenu")

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.left = "-200px";
}

// Get the current URL
var currentUrl = window.location.href;

// Check if the URL contains "index.html"
if (currentUrl.includes("index.html")) {
    // Replace "index.html" with an empty string in the URL
    var newUrl = currentUrl.replace("index.html", "");

    // Push the new URL to the browser's history without reloading the page
    window.history.pushState({}, document.title, newUrl);
}

// Get the current URL
var currentUrl = window.location.href;

// Check if the URL contains "privacy.html"
if (currentUrl.includes("privacy.html")) {
    // Replace "privacy.html" with an empty string in the URL
    var newUrl = currentUrl.replace("privacy.html", "");

    // Push the new URL to the browser's history without reloading the page
    window.history.pushState({}, document.title, newUrl);
}
