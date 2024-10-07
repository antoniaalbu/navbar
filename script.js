// Selectarea butonului hamburger și a meniului
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Eveniment de click pentru a deschide/închide meniul pe mobil
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
