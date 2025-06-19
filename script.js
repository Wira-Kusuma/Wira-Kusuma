const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-open')) {
        navMenu.classList.remove('nav-open');
        navMenu.classList.add('nav-close');
    } else {
        navMenu.classList.remove('nav-close');
        navMenu.classList.add('nav-open');
    }

    hamburger.classList.toggle('active');
});
