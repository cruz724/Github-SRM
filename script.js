
const scrollToTopArrow = document.querySelector('.arrow');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopArrow.style.opacity = '1';
        scrollToTopArrow.style.visibility = 'visible';
    } else {
        scrollToTopArrow.style.opacity = '0';
        scrollToTopArrow.style.visibility = 'hidden';
    }
};

// Scroll to the top when the arrow is clicked
scrollToTopArrow.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the visibility of the nav links when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none'; // Hide the menu
    } else {
        navLinks.style.display = 'flex'; // Show the menu
        navLinks.style.flexDirection = 'column'; // Stack the menu items vertically
    }
});