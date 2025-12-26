// Change navbar color when scrolling
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if(window.scrollY > 50) {
        navbar.style.backgroundColor = "blue";  // just color name
    } else {
        navbar.style.backgroundColor = "black";
    }
});
