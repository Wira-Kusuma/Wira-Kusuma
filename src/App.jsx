import { useState } from 'react'
import './index.css'

export default function App() {

  return (
    <>
    <Header />
    <Main />
    <About />
    </>
  )
}

function Header() {

  const [showed, setShowed] = useState(false)

  return(
    <header>
      <h1>wiraKusuma</h1>
      <div className='burger-menu' onClick={()=>setShowed(!showed)} >
        &#8801;
      </div>
      <nav className={showed ? 'active' : ''} >
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skill">skill</a></li>
          <li><a href="#project">project</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Main() {
  return(
    <main>
      <div className='main1'>
        <div>
          <p>Hi!, Im</p>
          <h1>
            Wira Kusuma Phandawa
          </h1>
          <p>Based in the Indonesia, I'm a front-end developer passionate about building accessible web apps that users love.</p>
          <button>Let's talk</button>
          <button>Show project</button>
        </div>
      </div>

      <div className='main2'>
        <img src="img/wira.jpg" alt="portait of wira" />
      </div>
    </main>
  )
}

function About(){
  return(
    <section className='about' id='about'>
      <div className="about1">
        <div>
          <h1>About Me</h1>
          <p>Hi! I'm Wira Kusuma Phandawa, a front-end developer based in Indonesia. I focus on web development, problem-solving, and writing clean code. My main goal is to build fast, secure, and scalable web applications for you.</p>
        </div>
      </div>
      <div className="about2">
        <img src="img/react.png" alt="react icon" />
      </div>
    </section>
  )
}