"use client"
import { useState } from "react";
import "../styles/globals.css";
import header from "../styles/header.module.css";
import main from "../styles/main.module.css";

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
      
    </main>
  )
}
