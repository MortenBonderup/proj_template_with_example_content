// Function to toggle the 'active' class on the navigation links
function toggleMenu() {
    // Select the HTML element with the ID 'nav-links'
    const navLinks = document.getElementById('nav-links');
    // Toggle the 'active' class on the 'navLinks' element
    navLinks.classList.toggle('active');
}

// Select the HTML element with the ID 'burger-menu'
// Add a 'click' event listener to the 'burger-menu' element
// When the 'burger-menu' element is clicked, call the 'toggleMenu' function
document.getElementById("burger-menu").addEventListener("click", toggleMenu);
