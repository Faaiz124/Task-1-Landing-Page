// JavaScript to handle scrolling and changing navbar background color
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-blue');
        navbar.classList.add('bg-gold');
    } else {
        navbar.classList.remove('bg-gold');
        navbar.classList.add('bg-blue');
    }
});
