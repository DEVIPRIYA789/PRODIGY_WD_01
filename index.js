// Function to add/remove the 'scrolled' class on the navbar when the page is scrolled
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Add hover effect by toggling class when hovered (for additional customization)
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.fontWeight = 'bold';
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.fontWeight = 'normal';
        link.style.transform = 'scale(1)';
    });
});
