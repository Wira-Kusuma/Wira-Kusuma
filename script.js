const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('nav-animation');
    void navMenu.offsetWidth; // trigger reflow
    navMenu.classList.add('nav-animation')
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
