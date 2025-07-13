
// nav animation and toggle
const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("active");
});

// animation when web load
window.addEventListener("load", function () {
    setTimeout(function () {
        const img = document.querySelector("main img");
        img.style.transform = "rotate(-15deg) scale(1.2)";
    }, 1000);
});

// scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); 
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
      skillCard.className="skillCard";
      skillCard.classList.add="fade-in";

      skillCard.innerHTML=`
        <img src="${item.images}" alt="${item.title}">
        <p>${item.description}</p>
      `

      let mySkill = document.querySelector(".mySkill");
      mySkill.appendChild(skillCard);

    });
  });


// get project from json
fetch("project.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      let projekCard = document.createElement("div");
      projekCard.className = "projekCard";
      projekCard.classList.add = "fade-in";

      projekCard.innerHTML=`
      <img src="${item.images}" alt="${item.title}">
      <div class="projekDesc">
        <h3>${item.title}</h3>
        <p>${item.tech}</p>
        <p>
            ${item.description} 
            <a href="${item.link}" target="_blank">Source Code (Github)</a>
        </p>
      </div>
      `;

      let projek = document.querySelector(".projek");
      projek.appendChild(projekCard);
    });
  });