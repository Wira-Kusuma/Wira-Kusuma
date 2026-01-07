"use client";
import { useState } from "react";
import "../styles/globals.css";
import header from "../styles/header.module.css";
import main from "../styles/main.module.css";
import about from "../styles/about.module.css";
import skills from "../styles/skills.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={header.header}>
      <a href="#main" className={header.logo}>
        <h1>Wira</h1>
      </a>

      <div className={header.burgerMenu} onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>

      <nav className={`${header.nav} ${open ? header.show : ""}`}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function Main() {
  return (
    <main className={main.main}>
      <div>
        <p>Hello, I'm a</p>
        <h2>Frontend Developer</h2>
        <p>
          I'm Wira, a passionate frontend developer based in Indonesia. Welcome
          to my portfolio
        </p>
        <div className={main.socialIcon}>
          <a href="https://github.com/Wira-Kusuma" target="_blank">
            <img src="/social-icon/github.png" alt="GitHub social icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/wira-kusuma-193303354/"
            target="_blank"
          >
            <img src="/social-icon/linkedin.png" alt="LinkedIn social icon" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=+628556301399&text=Hello, I'm interested in your services"
            target="_blank"
          >
            <img src="/social-icon/whatsapp.png" alt="WhatsApp social icon" />
          </a>
        </div>
      </div>

      <div>
        <img src="wira.jpg" alt="Portrait of Wira Kusuma Phandawa" />
        <div className={main.info}>
          <p>Wira Kusuma Phandawa</p>
          <p>Frontend Developer</p>
        </div>
      </div>
    </main>
  );
}

export function About() {
  return (
    <section className={about.about} id="about">
      <div className={about.container1}>
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer with expertise in creating
          responsive and user-friendly web applications. I love turning ideas
          into interactive digital experiences.
        </p>
        <div className={about.details}>
          <div>
            <h3>Experience</h3>
            <p>
              {new Date().getFullYear() - 2025} years of frontend development
            </p>
          </div>
          <div>
            <h3>Location</h3>
            <p>Indonesia</p>
          </div>
        </div>
      </div>

      <div className={about.container2}></div>
    </section>
  );
}

export function Skills() {
  const techStack = [
    {
      lang: "Html",
      img: "/language/html.png/",
      progress: "Expert",
    },
    {
      lang: "CSS",
      img: "/language/css.png/",
      progress: "Advanced",
    },
    {
      lang: "javaScript",
      img: "/language/js.png/",
      progress: "Advanced",
    },
    {
      lang: "React",
      img: "/language/react.png/",
      progress: "Intermediate",
    },
    {
      lang: "Next.Js",
      img: "/language/nextjs.svg/",
      progress: "Intermediate",
    },
  ];

  const [clicked, setClicked] = useState("Html")

  return (
    <section className={skills.skills} id="skills">
      <div className={skills.showing}>
        <h2>Tech Stack / Skills</h2>
          <div className={skills.cardWrap}>
            {techStack.map((data) => (
              <div 
              className={skills.cards} 
              key={data.lang} 
              style={data.lang === clicked ? {display:'flex'} : {display:'none'}}>
                <img src={data.img} alt={data.lang} />
                <p>name : {data.lang}</p>
                <p></p>
              </div>
            ))}
          </div>
      </div>

      <div className={skills.cardWrap}>
        {techStack.map((data) => (
          <div 
          className={skills.cards} 
          key={data.lang} 
          onClick={()=>setClicked(data.lang)}
          >
            <img src={data.img} alt={data.lang} />
            <h3>{data.lang}</h3>
            <p>{data.progress}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
