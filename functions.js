// functions.js
// Eric Yo
// 3/20/2024

document.addEventListener("DOMContentLoaded", function() {
    var sidemenu = document.getElementById("sidemenu")

    function openMenu() {
        sidemenu.style.right = "0";
    }

    function closeMenu() {
        sidemenu.style.left = "-200px";
    }

    document.querySelector(".fa-bars").addEventListener("click", openMenu);
    document.querySelector(".fa-times").addEventListener("click", closeMenu);
});