// 1. Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Run reveal on load to check if elements are already in view
reveal();

// 2. Typewriter Effect (Home Page Only)
const typewriterElement = document.querySelector("#typewriter span");
if (typewriterElement) {
    const text = "My Portfolio";
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    // Start typing after a short delay
    setTimeout(type, 500);
}

// 3. Navbar Active State
const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].style.background = "#fff";
        menuItem[i].style.color = "#000";
    }
}