const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('nav-open');
    hamburger.classList.toggle('active');
});


window.addEventListener("load", function () {
    setTimeout(function () {
        const img = document.querySelector("main img");
        img.style.transform = "rotate(-15deg) scale(1.2)";
    }, 1000); // dalam 1 detik
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // ✨ hilang saat keluar layar
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// get skill from json

fetch("skill.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      let skillCard = document.createElement("div");
      skillCard.className="skillCard"

      skillCard.innerHTML=`
        <img src="${item.images}" alt="${item.title}">
        <p>${item.description}</p>
      `

      let mySkill = document.querySelector(".mySkill");
      mySkill.appendChild(skillCard);

    });
  });