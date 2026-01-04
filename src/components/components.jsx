"use client"
import { useState } from "react";
import "../styles/globals.css";
import header from "../styles/header.module.css";
import main from "../styles/main.module.css";
import about from "../styles/about.module.css";

export function Header() {
    const [open, setOpen] = useState(false);
  return (
    <header className={header.header}>
      <h1>Wira</h1>

      <div 
      className={header.burgerMenu} 
      onClick={()=>setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </div>

      <nav className={`${header.nav} ${open ? header.show : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function Main(){
  return(
    <main className={main.main}>
      <div>
        <div>
          <p>Hello I'M A</p>
          <h2>Frontend Developer</h2>
          <p>Hi i'm Wira passionate frontend developer based in Indonesia, Welcome to my portofolio</p>
        </div>
      </div>
      <div>
        <img src="wira.jpg" alt="Portait of wira kusuma phandawa" />
        <div className={main.info}>
          <p>Wira Kusuma Phandawa</p>
          <p>Frontend Developer</p>
        </div>
      </div>
    </main>
  )
}

export function About(){
  return(
    <section className={about.about}>
      <div className={about.container1}>
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer with expertise in creating responsive and user-friendly web applications. I love turning ideas into interactive digital experiences.
        </p>
        <div className={about.details}>
          <div>
            <h3>Experience</h3>
            <p>{new Date().getFullYear() - 2025 } years of frontend development</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>Indonesia</p>
          </div>
        </div>
      </div>

      <div className={about.container2}></div>
    </section>
  )
}