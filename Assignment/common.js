const navItems = document.getElementById('nav-items');
let navToggleMenuButton = document.getElementById('hamburger-menu-button-anchor');
navToggleMenuButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (navItems.style.display === 'none' || navItems.style.display === '') {
        navItems.style.display = 'block';
    } else {
        navItems.style.display = 'none';
    }
})