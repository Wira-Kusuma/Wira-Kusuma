const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('nav-open');
    hamburger.classList.toggle('active');
});
